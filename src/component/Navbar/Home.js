import { React, useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
// import { useState } from "react";
import About from "./About";
import Loader from "./Loader";
import Typed from "typed.js";



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
         
            <section className=" ">
              <div  className="container mx-auto  d-flex flex-wrap justify-items-center align-items-center">
                <div data-aos='fade-right' className="col-lg-6 mt-sm-5 mt-5 mb-0 mb-sm-5 pt-5 pt-sm-5  col-md-6 ">
                  <h3 className="display-5  text-color font-weight-bolder mb-2 "> <q>Turning Dreams into Realities</q> </h3>
                  <h3 className="display-7 mb-4 font-weight-bolder">
                  At the NED Admission Cell </h3>
                  <p className="hashim1  rounded text-white text-lg p-4">
                    <span className="display-6">We</span> 're dedicated to your academic journey. Our services include test preparations, expert guidance, quick responses, mock tests, field advice, and study materials. Let's partner for your NED University success!

                   </p>
                 
                
                </div>
                <div data-aos='fade-left' className="col-lg-6 col-md-6">
                  <img className="img-fluid  rounded " alt="hero" src="NED.png"/>
                </div>
              </div>
            </section>

              <About />

          <br />
       
        </>
      )}
    </>
  );
}

export default Home;
