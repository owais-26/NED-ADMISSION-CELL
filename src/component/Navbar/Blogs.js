import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "./Loader";
import Req from '../../Url';
import Defaultnews from './Defaultnews';
import BlogItems from './blogitems';

export default function Blogs() {
    const [isLoading, setIsLoading] = useState(true);
    const [blogs, setblogs] = useState();
    useEffect(() => {
        document.title = "Blogs | NED Admission Cell";
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        const getBlogs = async () => {
            await Req.get(`/blog/appBlog`).then((response) => {
                if (response.status === 200) {
                    setblogs(response.data);

                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
                }
            });
        };
        getBlogs();
        console.log(blogs)

    }, [blogs]);
    const sortedBlogs =
        blogs && blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return (
        //         <>
        //             <HelmetProvider>
        //                 <Helmet>
        //                     <meta name="theme-color" content="#4285f4" />
        //                     <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

        //                     <link rel="canonical" href="https://www.nedadmissioncell.com" />
        //                     <meta
        //                         name="description"
        //                         content="Get the inside scoop on NED admission from our blog. Discover essential tips, requirements, and insights to help you secure your place at NED University, your gateway to a bright academic future."
        //                     />
        //                 </Helmet>
        //             </HelmetProvider>
        //            {isLoading ? <Loader/> :  <>
        //                 <h1 data-aos="fade-down" data-aos-duration="600" data-aos-easing='ease-out-sine' className="mt-3 h1seo text-center h1seo">
        //                     <i className="fa-solid fa-blog me-1"></i> Blogs
        //                     &#8203; &#8203; &#8203; &#8203; &#8203; &#8203;
        //                 </h1>
        //                 <div
        //                     data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'
        //                     className="  text-decoration-underline mb-4 mx-auto"
        //                 ></div>
        //                 {/* {
        //                     blogs && blogs.map(items) =(




        //                 <Link to="gaining-edge-with-programming-languages" >

        //                     <div className="card mb-3 container rounded hoverBlog" >
        //                         <div className="row g-0">
        //                             <div className="col-md-4 my-auto ">
        //                                 <img src="blog1.jpg" className="img-fluid my-auto rounded-start rounded" alt="..." />
        //                             </div>
        //                             <div className="col-md-8">
        //                                 <div className="card-body">
        //                                     <h4 className="card-title">Mastering the Code: A Roadmap for Success in Computer & IT Programs</h4>
        //                                     <h5 className="card-text">Your Guide to Programming Excellence and University Triumph</h5>
        //                                     <p className="card-text mt-3"><small className="text-body-secondary">Published By
        //                                         <a className='mx-2 text-primary mt-1' href="https://owaisdev-owais-26.vercel.app/">Owais Ansari</a></small></p>
        //                                     <p className="card-text mt-3 text-muted">15 Sep 2023</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </Link>
        //                     )} */}
        //             </>

        // }
        //         </>
        <>

            <HelmetProvider>
                <Helmet>
                    <meta name="theme-color" content="#4285f4" />
                    <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

                    <link rel="canonical" href="https://www.nedadmissioncell.com" />
                    <meta
                        name="description"
                        content="Stay up-to-date with NED Admission Cell news, including admission key dates and results and much more! "
                    />
                </Helmet>
            </HelmetProvider>

            {blogs && blogs.length === 0 ? (
                <Defaultnews />
            ) : (
                <>

                    <div>
                        <h1
                            data-aos="fade-down"
                            data-aos-duration="600" data-aos-easing='ease-out-sine'
                            className="text-center h1seo mt-3"
                        >
                            <i className="fa-solid fa-blog me-1"></i> Blogs &#8203; &#8203; &#8203;
                        </h1>
                        <div
                            data-aos="fade-up"
                            data-aos-duration="600" data-aos-easing='ease-out-sine'
                            className="  text-decoration-underline mb-4 mx-auto"
                        ></div>
                    </div>
                    <div>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            sortedBlogs.map((item, index) => (
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-9">

                                            <div key={index} data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'>
                                                <Link>
                                                    <BlogItems
                                                        title={item.title}
                                                        image={item.imgUrl}
                                                        authorname={item.authorname}
                                                        index={index}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div class="col-md-3 py-5 text border bg-white  border-gray-400">
                                            <h5 style={{
                                                color: 'black' 
                                            }}>Have you ever contemplated the idea of becoming a blogger? If so, here's a fantastic opportunity to utilize our platform to spread your creativity to thousands of aspiring individuals.
                                            </h5>
                                        </div>
                                    </div>
                                </div>

                            ))
                        )}
                    </div>
                </>
            )}
        </>
    )
}