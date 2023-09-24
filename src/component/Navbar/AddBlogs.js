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
        <div className="container my-5">
            <div className="row justify-content-center ">
                <div className="col-md-6 border-solid shade border-black">
                    <h1 className="text-center h1seo mt-3">Blog Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="blogTitle" className="form-label">
                                Title of Blog
                            </label>
                            <input
                                required
                                onChange={(e) => settitle(e.target.value)}
                                className="form-control"
                                id="blogTitle"
                                type="text"
                                placeholder="Title of Blog"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blogSubtitle" className="form-label">
                                Subtitle of Blog
                            </label>
                            <input
                                required
                                onChange={(e) => setsubtitle(e.target.value)}
                                className="form-control"
                                id="blogSubtitle"
                                type="text"
                                placeholder="Subtitle of Blog"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="blogImage" className="form-label">
                                Display Picture for Blog {img && <span style={{ color: "darkgreen", fontWeight: "bold" }}>{imgPerc}%</span>}
                            </label>
                            <input
                                required
                                onChange={(e) => setimg(e.target.files[0])}
                                className="form-control"
                                id="blogImage"
                                type="file"
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="yourName" className="form-label">
                                Your Name
                            </label>
                            <input
                                required
                                onChange={(e) => setname(e.target.value)}
                                className="form-control"
                                id="yourName"
                                type="text"
                                placeholder="Your Name"
                                
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="yourEmail" className="form-label">
                                Your Correct Email
                            </label>
                            <input
                                required
                                onChange={(e) => setemail(e.target.value)}
                                className="form-control"
                                id="yourEmail"
                                type="email"
                                placeholder="Your Correct Email"
                            ></input>
                        </div>
                        <button type="submit " className="btn myButton testBtn my-3">
                            <h6 className="mb-0 pb-0">Submit</h6>
                        </button>
                    </form>
                    
                </div>
            </div>
        </div>

    )
}