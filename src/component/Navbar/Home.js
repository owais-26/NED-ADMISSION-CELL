import { React, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useState } from "react";
import About from "./About";
import Loader from "./Loader";



function Home() {
   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Home | Ned Admission Cell";
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="theme-color" content="#4285f4" />
          <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

          <link rel="canonical" href="https://www.nedadmissioncell.com" />
          <meta
            name="description"
            content="Unlock your potential with NED Admission Cell. Our experts provide comprehensive guidance for engineering & technology education. Achieve your goals today."
          />
        </Helmet>
      </HelmetProvider>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            data-aos= 'fade-up'
            data-aos-duration ='600'
            id="carouselExampleDark"
            className="carousel carousel-dark slide mb-3 "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="5"
                aria-label="Slide 6"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval="5000">
                <img
                  src="mainpic.png"
                  className="d-block w-100 carousel-media"
                  alt="Slide 1"
                  title="carousel"
                ></img>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="carousel3.jpeg"
                  className="d-block w-100 carousel-media "
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="masjid.jpeg"
                  className="d-block w-100 carousel-media"
                  alt="Slide 3"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="carousel4.jpeg"
                  className="d-block w-100 carousel-media"
                  alt="Slide 4"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="carousel5.jpeg"
                  className="d-block w-100 carousel-media"
                  alt="Slide 5"
                ></img>
              </div>
              <div className="carousel-item">
                <img
                  src="carousel6.jpeg"
                  className="d-block w-100 carousel-media"
                  alt="Slide 6"
                ></img>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
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
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <br />
          <About />
        </>
      )}
    </>
  );
}

export default Home;
