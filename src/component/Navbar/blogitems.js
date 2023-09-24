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
        <section className="card hoverBlog  container  animate__animated  animate__fadeInDown newsCard shade mb-5 rounded mb-3 ">
            {badge}

            <div className="row g-0">
                {visibleProps.includes("imgUrl") && (
                    <div className="col-md-4 newspic">
                        <img
                            loading="lazy"
                            src={props.image}
                            className="img-fluid rounded-start"
                            alt="News"
                        />
                    </div>
                )}
                <div className="col-md-8 ">
                    <div className="card-body">
                        {visibleProps.includes("title") && (
                            <h5 className="card-title ">{props.title}</h5>
                        )}
                        {/* {visibleProps.includes("description") && (
                            <p className="card-text text-justify">{props.description}</p>
                        )} */}

                        

                      
                    </div>
                    {visibleProps.includes("authorname") && (
                        <p

                            className=" text-primary text-end"
                        >
                            Published By : {props.authorname}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BlogItems;
