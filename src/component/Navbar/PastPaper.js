import React from "react";
import { useEffect } from "react";
import PastItem from "./Pastitem";
import { pprArr } from "../Arrays/pprarr";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function PastPaper() {
  useEffect(() => {
    document.title = "Past Papers | Ned Admission Cell";
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
            content="Looking to ace NEDUET's entry test? Get FREE mock tests at NED Admission Cell! Simulate the actual test environment and prepare better. Share with friends!"
          />
        </Helmet>
      </HelmetProvider>
      <h1 data-aos="fade-down" className="text-center h1seo mt-4">
        {" "}
        <i className="fa-sharp fa-solid fa-clipboard me-1"></i> Study Material &
        Past Papers
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="1300"
        className="  text-decoration-underline mb-4 mx-auto"
      ></div>
      <p data-aos="fade-down" className="text-justify container">
        Looking to kickstart your aptitude preparations? Look no further than
        this comprehensive study material drive! With sections dedicated to
        physics, chemistry, math, biology, computer science, English, IQ, and
        general knowledge, this drive contains everything you need to ace your
        upcoming exams. Access a wealth of resources, including past papers and
        study notes, as well as ECAT books, aptitude lecture copies, formulas
        PDFs, important key points, and short tricks. With past papers you'll
        have ample opportunities to practice and hone your skills. Download all
        the materials you need to prepare for your NED Entry Test, and don't
        forget to share this valuable resource with your friends and classmates.
        Get started today by clicking on the link provided below.
      </p>

      <div
        data-aos="fade-up"
        data-aos-duration="1300"
        className="a  container mt-5"
      >
        {pprArr.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="1300"
            className="b m-3"
            style={{
              width: "300px",
            }}
            key={index}
          >
            <PastItem name={item.name} link={item.link} img={item.img} />
          </div>
        ))}
      </div>
    </>
  );
}
