import React, { useState, useEffect, useContext } from 'react';
import { Jodit } from 'jodit-react';
import JoditReact from "jodit-react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from './Firebase';
import axios from 'axios'
import { DataContext } from './Context';
import { Router, useNavigate } from 'react-router-dom';
import Req from '../../Url';
const JoditEditor = () => {
    const context = useContext(DataContext)
    const navigate = useNavigate()
    let content = null;
    const title = context.data.blogtitle
    const subtitle = context.data.blogsubtitle
    const imgUrl = context.data.coverimg
    const authorname = context.data.authorname
    const authoremail = context.data.authoremail
    console.log({title,subtitle,imgUrl,authorname,authoremail})
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
        const handleBeforeUnload = (e) => {
            // Display a confirmation message when the user tries to refresh
          
            e.preventDefault();
             e.returnValue = '';
        };
        
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            // Cleanup: Remove the event listener when the component unmounts
            window.removeEventListener('beforeunload', handleBeforeUnload)
           
            
        };
    }, []);
    useEffect(()=>{
        if (!title &&  !authorname && !authoremail && !imgUrl) {
            navigate("/addblog")
        }
    },[title,authorname,authoremail,imgUrl])
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

        console.log(content)
        if (!context.data.title &&  !context.data.authorname && !context.data.authoremail && !context.data.imgUrl) {
            navigate("/addblog")
        }
        else if(content!==null){
            alert("Please Write Content in the Blog Section")
        }
        else{
            await Req.post("/blog/pendBlog", { title,subtitle, imgUrl, authorname, authoremail, content })
                .then((res) => {
                    if (res.status === 200) {
                        alert("Thank you for submitting your blog. It is currently awaiting admin approval. You will receive a confirmation email at the address you provided. We appreciate your patience.")
                        navigate("/blogs")
                    }
                })
        }
       
    }
    return (
        <>
            <div className='container'>
                <h1 data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine' className="mt-3 h1seo text-center">
                    {" "}
                    &nbsp; &nbsp;
                    <i className="fa-sharp fa-solid fa-pencil me-1"></i>{" "}
                    Blog Editor&nbsp;&nbsp;&nbsp;&nbsp;
                </h1>
                <div
                    data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'

                    className="  text-decoration-underline mb-4 mx-auto"
                ></div>
                <h3>Ready to Write Your First Blog? Learn the Top 5 Rules</h3>
               
                <ol>
                    <li>Understand Your Audience: Get to know your target audience and create content that speaks to their interests and needs.</li>
                    <li>Captivating Titles: Craft compelling headlines that clearly convey your blog's topic and captivate your readers.</li>
                    <li>High-Quality Content: Offer valuable, well-researched, and informative content that provides solutions or insights to your readers.</li>
                    <li>Structured Posts: Organize your blog posts logically, using headings, subheadings, and bullet points to enhance readability.</li>
                    <li>Engage Your Audience: Encourage reader engagement through effective use of visuals, calls-to-action (CTAs), and responsive interactions with comments.</li>
                </ol>
                <h4>Key Criteria for Blog Approval</h4>
                <p className='text-danger'>Your blog submission must meet the following criteria to be approved:</p>
                <ol>
                    <li>Word Count Requirement: Ensure your blog contains a minimum of 500 words.</li>
                    <li>Originality and Plagiarism: Your content must not exceed a 20% plagiarism index, and it should be genuinely created without AI-generated text.</li>
                    <li>Heading and Subheading Inclusion: Organize your blog with appropriate headings and subheadings for structure and clarity.</li>
                    <li>Visual Content: Enhance your blog with relevant visuals, such as images or graphics, to improve engagement and comprehension.</li>
                </ol>
                <p className='text-danger'>Kindly be aware that the editor below will display your blog exactly as it appears on the website. Therefore, please make an effort to enhance its quality to the best of your ability.</p>
               
            </div>
            <div className='mx-5 mt-5'>
             
                    <h4 className='text-danger text-center show-on-mobile'>Oops... You cannot post your blog from a mobile device. Use Laptop/Desktop for better experience</h4>
               
                    <JoditReact config={editorConfig} onChange={(e) => Output(e)} className='hide-on-mobile' />
            
            </div>
            <div className='text-center hide-on-mobile'>
                <button onClick={handleSubmit} className="myButton mb-5 btnTest  " style={{ marginTop: "30px",
                width: "10rem"
            }}>Submit</button>
            </div>
           

        </>
    );
};

export default JoditEditor;