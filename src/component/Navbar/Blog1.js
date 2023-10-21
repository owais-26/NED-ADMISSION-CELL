// import { Box, Container, useMediaQuery, useTheme } from "@mui/material";
import parse from 'html-react-parser';
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Req from '../../Url';
import Loader from './Loader';

export default function Blog1() {
    const [blog, setblog] = useState(null)
    const [Loading, setloading] = useState(true);
    const location = useLocation()
    // const type = location.pathname.split("/")[2]
    // const title = location.pathname.split("/")[3]
    const title = location.pathname.split("/")[2]
    var decodedString = decodeURIComponent(title);
    console.log(decodedString)
    const getBlog = async () => {
        await Req.get(`/blog/appBlog/${decodedString}`)
            .then((res) => {
                if (res.status === 200) {
                    setblog(res.data[0])
                    setloading(false)

                    // console.log(res.data)
                }
            })
            .catch((error) => {
                console.log(error)

            })


    }
    useEffect(() => {
        getBlog()
    }, [])
    console.log(blog)
    // console.log(blog.imgUrl)
    let html;
    if (blog) {
        html = blog.content
    }

    return (
        // <div class="container-fluid" >
        //     {/* <img src={blog?.imgUrl} alt="" /> */}
        //     <div class="row">
        //         <div class="col-6">
        //             {blog && parse(html)}

        //         </div>
        //     </div>
        // </div>
        <>
            <header className="bgimage  text-center py-5">
                <h1 className='text-congrats h1seo'>{blog?.title}!</h1>
                <h4 className=" text-center px-2 text-white">{blog?.subtitle}</h4>
            </header>
            {Loading ? <Loader /> : <>
                <div  className="container text-left sm:text-left col-md-6 mt-5">
                    {blog && parse(html)}
                    
                    <div className="container mt-3">
                        <p className="text-muted text-end">Published by: {blog?.authorname}</p>
                    </div>
                </div>
            </>
            }   

        </>
    )
}