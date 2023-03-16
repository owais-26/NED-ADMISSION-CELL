import React, { useState, useEffect } from "react";

import Mock from "../TestComps/Mock";
import ChemComp from "../TestComps/ChemComp";
import PhyComp from "../TestComps/PhyComp";
import MathComp from "../TestComps/MathComp"
import { HelmetProvider, Helmet } from "react-helmet-async";


const Test = (props) => {
  
    const [activeComp, setActiveComp] = useState('mock');
    useEffect(() => {
      document.title = "Tests | Ned Admission Cell";
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

        <div className="container text-center">
          <div>
            <h1 data-aos="fade-down" className="text-center h1seo mt-3">
              <i className="fa-solid fa-pen"></i> Online Mock Tests &#8203;
              &#8203;
            </h1>
            <div
              data-aos="fade-up"
              className="  text-decoration-underline mb-4 mx-auto"
            ></div>
          </div>

          <p data-aos="fade-down" className=" text-justify  ">
            At NED Admission Cell, we understand that testing one's preparation
            can be a challenging task, especially during the busy and demanding
            days of preparation. That's why we are excited to announce our "FREE
            MOCK TEST" for students pursuing Pre-Engineering, Pre-Medical, and
            Computer Science. Designed based on the pattern of NEDUET's entry
            test, our mock test covers four subjects for each group. This
            presents a unique opportunity for students to evaluate their
            knowledge and expertise in a simulated testing environment. We
            recognize the scarcity of authentic NED past papers in the market,
            and that is why we have taken it upon ourselves to provide this
            service to you at no cost. Additionally, we encourage you to share
            this opportunity with your friends and peers who may benefit from
            these free mock tests. At NED Admission Cell, we are committed to
            assisting you in achieving your academic goals, and we believe that
            this free mock test will help you to better prepare for the actual
            test day.
          </p>
          <div
            data-aos="fade-up"
            style={{
              width: "100%",
              height: "3rem",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "flex-end",
            }}
          >
            <div
              data-aos="fade-up"
              style={{
                width: "100%",
                boxSizing: "border-box",
                borderBottom: activeComp === "mock" ? "3px solid blue" : "0",
                cursor: "pointer",
              }}
              onClick={() => setActiveComp("mock")}
            >
              <h5>Mock</h5>
            </div>
            <div
              data-aos="fade-up"
              style={{
                width: "100%",
                borderBottom: activeComp === "maths" ? "3px solid blue" : "0",
                cursor: "pointer",
              }}
              onClick={() => setActiveComp("maths")}
            >
              <h5>Maths</h5>
            </div>
            <div
              data-aos="fade-up"
              style={{
                width: "100%",
                borderBottom: activeComp === "physics" ? "3px solid blue" : "0",
                cursor: "pointer",
              }}
              onClick={() => setActiveComp("physics")}
            >
              <h5>Physics</h5>
            </div>
            <div
              data-aos="fade-up"
              style={{
                width: "100%",
                borderBottom:
                  activeComp === "chemistry" ? "3px solid blue" : "0",
                cursor: "pointer",
              }}
              onClick={() => setActiveComp("chemistry")}
            >
              <h5>Chemistry</h5>
            </div>
          </div>
          {activeComp === "mock" && <Mock />}
          {activeComp === "chemistry" && <ChemComp />}
          {activeComp === "physics" && <PhyComp />}
          {activeComp === "maths" && <MathComp />}
        </div>
      </>
    );
};

export default Test;
