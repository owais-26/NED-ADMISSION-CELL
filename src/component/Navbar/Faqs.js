import React from "react";
import { faqArr } from "../Arrays/faq";
import Faqsitem from "./faqsitem";
import { useState, useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";

const Faqs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    document.title = "FAQS | Ned Admission Cell";
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
            content="Looking to explore different fields and their career opportunities? Discover in-depth details about NED's diverse departments and their scopes at NED Admission Cell."
          />
        </Helmet>
      </HelmetProvider>
      <div>
        <h1 data-aos="fade-down" className="mt-3 h1seo text-center">
          {" "}
          &nbsp; &nbsp;
          <i className="fa-sharp fa-solid fa-person-circle-question me-1"></i>{" "}
          FAQs & Queries&nbsp;&nbsp;
        </h1>

        <div
          data-aos="fade-up"
          data-aos-duration="1300"
          className="  text-decoration-underline mb-4 mx-auto"
        ></div>
      </div>
      <div data-aos="fade-down" className="searchBox text-center mb-5 ">
        <input
          className="search_input "
          type="text"
          placeholder="Search FAQs here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />{" "}
      </div>
      <div className="faq " data-aos="fade-up" data-aos-duration="1300">
        {faqArr
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.Question.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return <div style={{ backgroundColor: "yellow" }}>{val}</div>;
            } else if (
              val.Answer.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return <div style={{ backgroundColor: "yellow" }}>{val}</div>;
            }
          })
          .map((item, index) => {
            return (
              <Faqsitem 
                key={index}
                question={item.Question}
                answer={item.Answer}
              />
            );
          })}
      </div>
      {/* <QuestionForm/> */}
    </>
  );
};

export default Faqs;
