import { useContext, useEffect, useState } from "react"
import { DataContext } from "./../Jodit/Context"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "./../Jodit/Firebase";
import { useNavigate } from "react-router-dom";
export default function AddBlogs() {
    const context = useContext(DataContext)
    const [title, settitle] = useState()
    const [subtitle, setsubtitle] = useState()
    const [img, setimg] = useState()
    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [imgPerc, setimgPerc] = useState()
    const [imgUrl, setimgUrl] = useState()
    const navigate = useNavigate()
    const UploadFile = (file) => {
        const fileName = new Date().getTime() + file?.name
        const storage = getStorage(app);
        const storageRef = ref(storage, `${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setimgPerc(progress)
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
                    setimgUrl(downloadURL)
                });
            }
        )
    }
    useEffect(() => { img && UploadFile(img) }, [img])
    const handleSubmit = (e) => {
        e.preventDefault()
        context.setdata({
            blogtitle: title,
            blogsubtitle: subtitle,
            coverimg: imgUrl,
            authorname: name,
            authoremail: email
        })
        navigate("/editor")
    }
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "60vh", flexDirection: "column" }}>
            <h1>Blog Form</h1>
            <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
                <input required onChange={(e) => settitle(e.target.value)} placeholder="Title of Blog" type="text"></input>
                <input required onChange={(e) => setsubtitle(e.target.value)} placeholder="Sub Title of Blog" type="text"></input>
                <label>Display Picture for Blog {img && <span style={{ color: "darkgreen", fontWeight: "bold" }}>{imgPerc}%</span>}</label>
                <input required onChange={(e) => setimg(e.target.files[0])} type="file"></input>
                <input required onChange={(e) => setname(e.target.value)} placeholder="Your Name" type="text"></input>
                <input required onChange={(e) => setemail(e.target.value)} placeholder="Your Correct Email" type="email"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}