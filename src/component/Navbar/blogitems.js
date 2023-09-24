import React from "react";


const BlogItems = (props) => {
    const visibleProps = ["imgUrl", "title", "authorname"];

    let badge;
    if (props.index < 3) {
        badge = (
            <span className="position-absolute top-0  newBadge translate-middle badge shade rounded-pill bg-danger">
                New!
                <span className="visually-hidden badge">New!</span>
            </span>
        );
    }

    return (
        // <section className="card hoverBlog  container  animate__animated  animate__fadeInDown newsCard shade mb-5 rounded mb-3 ">
        //     {badge}

        //     <div className="row g-0">
        //         {visibleProps.includes("imgUrl") && (
        //             <div className="col-md-4 newspic">
        //                 <img
        //                     loading="lazy"
        //                     src={props.image}
        //                     className="img-fluid rounded-start"
        //                     alt="News"
        //                 />
        //             </div>
        //         )}
        //         <div className="col-md-8 ">
        //             <div className="card-body">
                      
        //                 {/* {visibleProps.includes("description") && (
        //                     <p className="card-text text-justify">{props.description}</p>
        //                 )} */}

                        

                      
        //             </div>
        //             {visibleProps.includes("authorname") && (
        //                 <p

        //                     className=" text-primary text-end"
        //                 >
        //                     Published By : {props.authorname}
        //                 </p>
        //             )}
        //         </div>
        //     </div>
        // </section>
        <div class="card card hoverBlog  container  animate__animated  animate__fadeInDown newsCard shade mb-5 rounded mb-3" >
            {badge}
            {visibleProps.includes("imgUrl") && (
                <img  src={props.image} class=" h-full w-full  img-fluid card-img card-imagePast" alt="..."/>
            )}
                <div class="card-body">
                {visibleProps.includes("title") && (
                    <h5 className="card-title ">{props.title}</h5>
                )}
                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}

                {visibleProps.includes("authorname") && (
                            <p

                                className=" text-primary text-end"
                            >
                                Published By : {props.authorname}
                            </p>
                        )}
                </div>
        </div>
    );
};

export default BlogItems;
