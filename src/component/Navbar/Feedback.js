import React from "react";

const Feedback = () => {
  return (
    <div className="mx-auto mb-5 " style={{ maxWidth: "600px" }}>
      <div
        className="carousel slide"
        id="carouselExampleAutoplaying"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner hashim1 rounded shade ">
          <div className="carousel-item active text-center shade rounded">
            <img
              src="feedback1.png"
              className="d-block mx-auto w-75 shade rounded"
              alt="Feedbacks 1"
            />
          </div>
          <div className="carousel-item text-center">
            <img
              src="feedback2.png"
              className="d-block mx-auto w-75 shade rounded"
              alt="Feedbacks 2"
            />
          </div>
          <div className="carousel-item text-center">
            <img
              src="feedback3.png"
              className="d-block mx-auto w-75 shade rounded"
              alt="Feedbacks 3"
            />
          </div>
          <div className="carousel-item text-center shade rounded">
            <img
              src="feedback4.png"
              className="d-block mx-auto w-75"
              alt="Feedbacks 4"
            />
          </div>
          <div className="carousel-item text-center">
            <img
              src="feedback5.png"
              className="d-block mx-auto w-75 shade rounded"
              alt="Feedbacks 5"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Feedback;
