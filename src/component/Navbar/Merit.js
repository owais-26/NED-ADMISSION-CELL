import React from "react";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Merit() {
useEffect(() => {
  document.title = "Merit Lists | Ned Admission Cell";
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
            content="Looking for the latest merit list of NEDUET? Look no further than NED Admission Cell! We provide the most up-to-date information on merit lists for all departments at NED"
          />
        </Helmet>
      </HelmetProvider>
      <div className="text-center">
        <h1 data-aos="fade-down" className="mt-3 h1seo">
          {" "}
          <i className="fa-sharp fa-solid fa-list-ol me-1"></i> Year Wise Merit
          List
        </h1>
        <div
          data-aos="fade-up"
          className="  text-decoration-underline mb-4 mx-auto"
        ></div>
        <p
          data-aos="fade-down"
          className=" text-justify  container  rounded pt-2"
        >
          The merit list for admission to NED University is a highly
          sought-after document that is eagerly anticipated by thousands of
          applicants each year. The list represents the ranking of applicants
          based on their academic performance and other criteria, and it is a
          key factor in determining who will be admitted to the university. Over
          the years, the competition for admission to NED University has become
          increasingly fierce, with the merit list cutoffs rising year after
          year. Despite the importance of the merit list, it is not officially
          released by the university, which can make it difficult for applicants
          to access this critical information. To address this issue, our
          moderators work tirelessly to compile unofficial merit lists each
          year, based on the latest available data. This is a laborious and
          time-consuming process, but our team is dedicated to providing
          accurate and reliable information to help students make informed
          decisions about their academic futures. Slide to see for year 2021 and
          2020.
        </p>
      </div>
      <div className="d-flex  mb-4 justify-content-center align-items-center">
        <a download href="nedmerit22.jpeg">
          {" "}
          <button
            type="button"
            className="btn cardPast mx-2 btn-outline-primary mb-2 "
          >
            <i className="fa-solid me-1 fa-file-arrow-down"></i>Merit List 2022
          </button>
        </a>
        <a download href="ned2021.jpeg">
          {" "}
          <button
            type="button"
            className="btn cardPast btn-outline-primary  mx-2 mb-2 "
          >
            <i className="fa-solid me-1 fa-file-arrow-down"></i> Merit List 2021
          </button>
        </a>
        <a download href="ned2020.jpeg">
          <button
            type="button"
            className="btn cardPast btn-outline-primary  mx-2 mb-2  "
          >
            <i className="fa-solid me-1 fa-file-arrow-down"></i> Merit List 2020
          </button>
        </a>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
           
            className="d-block w-100"
            src="merit list-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            
            className="d-block w-100"
            src="ned2021.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            
            className="d-block w-100"
            src="ned2020.jpeg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
