import React, { useState, useEffect, useContext } from 'react';
import { Jodit } from 'jodit-react';
import JoditReact from "jodit-react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './Firebase';
import axios from 'axios'
import { DataContext } from './Context';
import { useNavigate } from 'react-router-dom';
import Req from '../../Url';
const JoditEditor = () => {
    const context = useContext(DataContext)
    const navigate = useNavigate()
    let content;
    const title = context.data.blogtitle
    const imgUrl = context.data.coverimg
    const authorname = context.data.authorname
    const authoremail = context.data.authoremail
    console.log({ title, imgUrl, authorname, authoremail })
    const editorConfig = {
        readonly: false,
        toolbar: true,
        spellcheck: true,
        language: 'en',
        toolbarButtonSize: 'large',
        // ... (other existing configuration options)
        width: "100%",
        minHeight: 700,
        controls: {
            font: {
                command: 'fontname',
                list: {
                    "'Open Sans',sans-serif": 'Open Sans',
                    'Helvetica,sans-serif': 'Helvetica',
                    'Arial,Helvetica,sans-serif': 'Arial',
                    'Georgia,serif': 'Georgia',
                    'Impact,Charcoal,sans-serif': 'Impact',
                    'Tahoma,Geneva,sans-serif': 'Tahoma',
                    "'Times New Roman',Times,serif": 'Times New Roman',
                    'Verdana,Geneva,sans-serif': 'Verdana',
                    'Consolas,monaco,monospace': 'Consolas'
                },
            },
        },
        buttons: 'undo,redo,font,fontsize,|,bold,italic,underline,brush,paragraph,strikethrough,|,ul,ol,align,|,table,link,hr,|,symbols,uploadImage,indent,|,preview,print,codeBlock',
        buttonsMD: 'undo,redo,font,fontsize,|,bold,italic,underline,brush,paragraph,|,ul,ol,align,|,table,link,hr,|,symbols,uploadImage,indent,|,preview,print,codeBlock',
        buttonsSM: 'undo,redo,font,fontsize,|,bold,italic,underline,brush,paragraph,|,ul,ol,align,|,table,link,hr,|,symbols,uploadImage,indent,|,preview,print,codeBlock',
        buttonsXS: 'undo,redo,font,fontsize,|,bold,italic,underline,brush,paragraph,|,ul,ol,align,|,table,link,hr,|,symbols,uploadImage,indent,|,preview,print,codeBlock',
    };

    useEffect(() => {
        uploadImageButton();
        codeBlockButton();
    }, []);

    const uploadImageButton = () => {
        Jodit.defaultOptions.controls.uploadImage = {
            name: 'Upload image to Cloudinary',
            iconURL: "https://w7.pngwing.com/pngs/527/625/png-transparent-scalable-graphics-computer-icons-upload-uploading-cdr-angle-text-thumbnail.png",
            exec: async (editor) => {
                await imageUpload(editor);
            }
        };
    };

    const codeBlockButton = () => {
        Jodit.defaultOptions.controls.codeBlock = {
            name: 'Code Block',
            iconURL: "https://cdn.icon-icons.com/icons2/2406/PNG/512/codeblock_editor_highlight_icon_145997.png",
            exec: async (editor) => {
                const pre = editor.selection.j.createInside.element('pre');
                pre.style = 'background-color:#F0F0F0; text-align:left; padding:10px';
                pre.innerHTML = `${editor.selection.html}`;
                editor.selection.insertNode(pre);
            },
        };
    };

    const imageUpload = (editor) => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');
        input.click();

        input.onchange = async function () {
            const file = input.files[0];
            const fileName = new Date().getTime() + file?.name;
            const storage = getStorage(app);
            const storageRef = ref(storage, `${fileName}`);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on(
                'state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        default:
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // Handle unsuccessful uploads
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        insertImage(editor, downloadURL);
                    });
                }
            );
        };
    };

    const insertImage = (editor, url) => {
        const image = editor.selection.j.createInside.element('img');
        image.setAttribute('src', url);
        editor.selection.insertNode(image);
    };

    const Output = (e) => {
        content = e
    }
    const handleSubmit = async () => {
        if (!context.data.title && !context.data.authorname && !context.data.authoremail && !context.data.imgUrl) {
            navigate("/addblogs")
        }
        else{
            await Req.post("/blog/pendBlog", { title, imgUrl, authorname, authoremail, content })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Blog Created")
                        navigate("/")
                    }
                })
        }
       
    }
    return (
        <>
            <JoditReact config={editorConfig} onChange={(e) => Output(e)} />
            <button onClick={handleSubmit} style={{ marginTop: "50px" }}>Submit</button>
        </>
    );
};

export default JoditEditor;