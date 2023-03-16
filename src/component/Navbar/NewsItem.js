import React from "react";


const NewsItem = (props) => {
  const visibleProps = ["image", "title", "description", "file", "newsLink"];

  let badge;
  if (props.index < 3) {
    badge = (
      <span className="position-absolute top-0  newBadge translate-middle badge rounded-pill bg-danger">
        New!
        <span className="visually-hidden">New!</span>
      </span>
    );
  }

  return (
    <section className="card container  animate__animated  animate__fadeInDown newsCard shade mb-5 rounded mb-3 ">
      {badge}

      <div className="row g-0">
        {visibleProps.includes("image") && (
          <div className="col-md-4 newspic">
            <img
              loading="lazy"
              src={props.image}
              className="img-fluid rounded-start"
              alt="News"
            />
          </div>
        )}
        <div className="col-md-8">
          <div className="card-body">
            {visibleProps.includes("title") && (
              <h5 className="card-title ">{props.title}</h5>
            )}
            {visibleProps.includes("description") && (
              <p className="card-text text-justify">{props.description}</p>
            )}

            {props.newsLink && props.newsLink.length > 0 ? (
              <a
                href={props.newsLink}
                rel="noopener noreferrer"
                target="_blank"
                className="card-link text-primary"
              >
                News link
              </a>
            ) : (
              <span className="card-link text-muted">
                No news link available
              </span>
            )}

            {props.file && props.file.length > 0 ? (
              <a
                href={props.file}
                rel="noopener noreferrer"
                target="_blank"
                download
                className="card-link text-primary"
              >
                Download Image/PDF!
              </a>
            ) : (
              <span className="card-link text-muted">No file available</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsItem;
