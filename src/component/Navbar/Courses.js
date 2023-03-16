import React from "react";
import { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";


const Courses = () => {
 
  const phoneNumber = "+923032785025"; // replace with your phone number
  const message =
    encodeURIComponent(`Hi there! I reached you through Ned Admission Cell website. I'm interested in joining your ecat mdcat batches. Can you provide me with more information, please?
`); // replace with your default message
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  useEffect(() => {
    document.title = "Online Courses | NED Admission Cell";
  }, []);
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <meta name="theme-color" content="#4285f4" />
          <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />

          <link rel="canonical" href="https://www.nedadmissioncell.com" />
          <meta
            name="description"
            content="Explore and enhance your skills with our wide range of online courses. Learn at your own pace and achieve your career goals. Enroll now!"
          />
        </Helmet>
      </HelmetProvider>

      <h1 data-aos="fade-down" className="mt-3 text-center h1seo">
        <i className="fa-solid fa-house-laptop me-1"></i> Online Courses &#8203;
        &#8203; &#8203; &#8203; &#8203; &#8203;
      </h1>
      <div
        data-aos="fade-up"
        className="  text-decoration-underline mb-4 mx-auto"
      ></div>
      <section
        data-aos="fade-up"
        className="card container newsCard shade  rounded mb-3 "
      >
        <div className="card-body">
          <div className="text-center my-3">
            <a
              href={url}
              rel="noopener noreferrer"
              target="_blank"
              className="card-link text-success h4 WhatsAppGlow "
            >
              <i className="fa-brands fa-whatsapp whatsApp me-1"></i>
              Join Now!
            </a>
          </div>
          <h4 className="card-title">ECAT and MDCAT Batch </h4>

          <section className="card-text text-justify mb-2">
            Attention all ECAT and MDCAT aspirants! Are you looking for
            top-quality test preparation that will help you ace your exams? Our
            course offers complete guidance and preparation for{" "}
            <b>NUST, FAST, UET, NED, PIEAS, SMC, DOW, NUMS</b> tests, and more.
            With our online classes pattern, practice materials, tests, and
            weekly GTS, you'll be well on your way to success! Here's what you
            can expect from our course: <br />
            <ul>
              <li>ECAT and MDCAT Course</li>
              <li>Course Comprehensive Schedule for Classes and Guidance</li>
              <li>Interactive Online Classes Pattern</li>
              <li> Top-quality Practice Material and Tests</li>
              <li> Weekly Tests and GTS</li>
              <li> Effective Time Management Techniques</li>
              <li>Proven Strategy for All Subjects</li>
              <li>Access to Past Papers</li>
              <li>Preparation Tricks</li>
            </ul>{" "}
            To register for our course, kindly deposit the complete course fees
            (all subjects included) of <b>PKR 6000 </b> to the following
            account: <br />{" "}
            <b>
              via Easypaisa, JazzCash, or Sadapay: 03032785025 <br /> Account
              Title: Muhammad Hashim Ziya <br /> Account Number: 01300105001973{" "}
              <br /> Bank: Meezan Bank Branch: Shamsi Society - Malir <br />
            </b>{" "}
            Don't miss out on this incredible opportunity to excel in your ECAT
            and MDCAT exams! Register now and secure your place in our Batch.
          </section>
        </div>
        <img
          loading="lazy"
          src="ad.jpeg"
          className="m-3 rounded shadow-lg"
          alt="Online Course"
        />
      </section>
    </div>
  );
};

export default Courses;
