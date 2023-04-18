import React from "react";
import { useState } from "react";
import Feedback from "./Feedback";
import MyCircularProgress from "../ProgressBars/MyCircularProgress";
import MyCircularProgress1 from "../ProgressBars/MyCircularProgress1";
import MyCircularProgress2 from "../ProgressBars/MyCircularProgress2";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore(!showMore);
  return (
    <>
      <section className="mission   ">
        <div>
          <div data-aos="fade-up" data-aos-duration="2200" className=" ">
            <div className="  text-center">
              <h1 data-aos="fade-up" data-aos-duration="2200" className="h1seo ">
                <b>
                  <i className="fa-solid fa-pen"></i> Our Mission at{" "}
                  <br className="br" /> NED Admission Cell
                </b>
              </h1>
              <div
                data-aos="fade-down" 
                className=" text-decoration-underline mb-3 mx-auto"
              ></div>
            </div>
            <p
              data-aos="fade-up" data-aos-duration="2200"
              className="text-justify px-5 hashim1 rounded-lg hashimpara py-4   para "
            >
              Our website provides a comprehensive range of resources to assist
              students with their university admission process. We offer the
              latest{" "}
              <b>
                {" "}
                <a
                  className="text-white"
                  href="https://nedadmissioncell.com/news"
                >
                  News
                </a>{" "}
              </b>{" "}
              regarding admission requirements and deadlines, as well as{" "}
              <a
                className="text-white"
                href="https://nedadmissioncell.com/guidelines"
              >
                <b>Guidelines</b>
              </a>{" "}
              on how to prepare for the entry tests. Our platform features{" "}
              <b>
                {" "}
                <a
                  className="text-white"
                  href="https://nedadmissioncell.com/pastpaper"
                >
                  Past Papers
                </a>{" "}
                and{" "}
                <a
                  className="text-white"
                  href="https://nedadmissioncell.com/faqs"
                >
                  Frequently Asked Questions (FAQs)
                </a>
              </b>{" "}
              to help students familiarize themselves with the{" "}
              <a
                className="text-white"
                href="https://nedadmissioncell.com/tests"
              >
                <b>Test</b>
              </a>{" "}
              format and content. In addition, we provide valuable information
              on various{" "}
              <b>
                {" "}
                <a
                  className="text-white"
                  href="https://nedadmissioncell.com/dept"
                >
                  Departments
                </a>
              </b>{" "}
              to guide students towards their desired fields of study. Our team
              is committed to supporting students through every step of the
              admission process, including the announcement of{" "}
              <b>
                {" "}
                <a
                  className="text-white"
                  href="https://nedadmissioncell.com/merit"
                >
                  Merit Lists
                </a>{" "}
              </b>{" "}
              and orientation day celebrations. With our website's assistance,
              students can increase their chances of successfully gaining
              admission to{" "}
              <b>
                <a className="text-white" href="https://www.neduet.edu.pk">NED University.</a>
              </b>
            </p>
          </div>
        </div>
      </section>
      <section className="text-center">
        <div className=" col-md-12 mt-5 mb-5 text-center">
          <h2 data-aos="fade-down" data-aos-duration="2200" className=" ">
            {" "}
            <b>
              <i className="fa-solid fa-pen"></i> Meet The Team
            </b>{" "}
          </h2>
          <div
            data-aos="fade-up" data-aos-duration="2200"
            className=" text-decoration-underline mx-auto"
          ></div>
        </div>

        <div className="card mb-3 rounded-lg shade hashim1">
          <div className="row no-gutters">
            <div className="col-md-4 m-auto Hashim-Pic">
              <img
                loading="lazy"
                data-aos="fade-down" data-aos-duration="2200"
                src="hashim.jpg"
                className="img-fluid w-75 rounded-circle"
                alt="hashim"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body vertical1">
                <h3 data-aos="fade-up" data-aos-duration="2200" className="text-center hashimpara">
                  Founder
                </h3>
                <h4 data-aos="fade-down" data-aos-duration="2200" className="card-title hashimpara">
                  Engr. Muhammad Hashim Zia
                </h4>
                <p
                  data-aos="fade-up" data-aos-duration="2200"
                  className="card-text text-justify  hashimpara"
                >
                  As an Industrial Manufacturing engineer with a passion for
                  teaching, I have had the opportunity to inspire and guide over
                  25000 students across various professional institutes in
                  Pakistan. Through my YouTube channel, Mathsflix by Hashim Zia,
                  I have been able to extend my reach and impact the lives of
                  countless more individuals. Through my teaching experience, I
                  have learned to set clear goals and motivate my students to
                  achieve them. I am passionate about guiding individuals
                  towards success and helping them realize their full potential.
                  I firmly believe that education is the key to unlocking one's
                  true potential, and I am committed to providing quality
                  education to every student I teach. In all of my teaching
                  endeavors, I strive to instill a love for learning and a
                  passion for growth in my students. I believe that education is
                  a lifelong journey, and my ultimate goal is to equip my
                  students with the knowledge and skills they need to succeed
                  not only in their current studies but also in their future
                  endeavors. teaching style and composed communication abilities
                  facilitated me in connecting with my students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center container ">
          <div className="row justify-content-center">
            <div data-aos="fade-up" data-aos-duration="2200" className="col-12 text-center ">
              <h3 className="mb-2 mt-4">
                {" "}
                <b>
                  <i className="fa-solid fa-pen"></i> Moderators
                </b>{" "}
                <div className=" text-decoration-underline mt-2 mb-5 mx-auto"></div>
              </h3>
            </div>
            <div className="col-md-6 col-lg-3   mb-4">
              <div
                data-aos="fade-down" data-aos-duration="2200"
                className="card rounded-lg hashim1 shade"
              >
                <img
                  loading="lazy"
                  src="owais.jpg"
                  className="card-img-top rounded-circle"
                  alt="owais"
                />
                <div className="card-body">
                  <h4 className="card-title hashimpara">Owais Ansari</h4>
                  <p className="card-text hashimpara">
                    Undergraduate Computer Science Student
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div data-aos="fade-up" data-aos-duration="2200" className="card rounded-lg hashim1 shade">
                <img
                  loading="lazy"
                  src="zafrullah.jpg"
                  className="card-img-top rounded-circle"
                  alt="zafrullah"
                />
                <div className="card-body">
                  <h4 className="card-title hashimpara">Zafarullah Hakro</h4>
                  <p className="card-text hashimpara">
                    Undergraduate Civil Engineering Student
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div
                data-aos="fade-down" data-aos-duration="2200"
                className="card rounded-lg hashim1 shade"
              >
                <img
                  loading="lazy"
                  src="muaz.jpg"
                  className="card-img-top rounded-circle"
                  alt="muaz."
                />
                <div className="card-body">
                  <h4 className="card-title hashimpara">Muaaz Hussain</h4>
                  <p className="card-text hashimpara">
                    Industrial Manufacturing Engineer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 mb-4">
              <div
                data-aos="fade-up" data-aos-duration="2200"
                className="card hashim1 rounded-lg  shade"
              >
                <img
                  loading="lazy"
                  src="sameed.jpg"
                  className="card-img-top rounded-circle"
                  alt="sameed"
                />
                <div className="card-body">
                  <h4 className="card-title hashimpara">Sameed Ansar</h4>
                  <p className="card-text hashimpara">
                    Undergraduate Electrical Engineering Student
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <div className=" col-md-12 mt-5 mb-5 ">
          <h2 data-aos="fade-down" data-aos-duration="2200" className=" text-center">
            {" "}
            <b>
              <i className="fa-solid fa-pen"></i> Join Us Now!
            </b>{" "}
          </h2>
          <div
            data-aos="fade-up" data-aos-duration="2200"
            className="  text-decoration-underline mb-4 mx-auto"
          ></div>
          <div className="container2">
            <div className="container1">
              <div data-aos="fade-down" data-aos-duration="2200" style={{ margin: "auto" }}>
                <MyCircularProgress />
                <div>
                  <h3 className="mt-2 underline">
                    <b>Group Members</b>
                  </h3>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="2200" className="" style={{ margin: "auto" }}>
                <MyCircularProgress1 />
                <div className="">
                  <h3 className="mt-2 underline">
                    <b>Admitted in NED!</b>
                  </h3>
                </div>
              </div>
              <div data-aos="fade-down" data-aos-duration="2200" className="" style={{ margin: "auto" }}>
                <MyCircularProgress2 />
                <div>
                  <h3 className="mt-2 underline">
                    <b>Registered Now!</b>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <Fb /> */}
            <div
              data-aos="fade-up" data-aos-duration="2200"
              className="card container fbcard  mt-5 hashim1 rounded shade mb-3"
              style={{
                width: "600px",
              }}
            >
              <img
                loading="lazy"
                data-aos="fade-up" data-aos-duration="2200"
                src="mainpic.png"
                className="card-img-top rounded fbimg "
                style={{
                  width: "370px",
                  height: "200px",
                }}
                alt="ned fb"
              />
              <div className="card-body  text-center">
                <h4 data-aos="fade-down" data-aos-duration="2200" className="hashimpara card-title">
                  NED ADMISSION CELL <br />{" "}
                  <p className="card-text ">
                    <small className="text-muted hashimpara ">
                      Facebook Group - 23k+ Members
                    </small>
                  </p>
                </h4>
                <div data-aos="fade-down" data-aos-duration="2200" className="parent-container mb-2">
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/groups/396363091463993"
                  >
                    <button className="join-group-button hashimpara text-center">
                      <i className="fa-brands fa-facebook me-1"></i>
                      Join/Visit Group
                    </button>
                  </a>
                </div>
                <p
                  data-aos="fade-down" data-aos-duration="2200"
                  className="card-text text-justify hashimpara"
                >
                  Greetings to all members and new additions to our community.
                  We, the team at "NED University Admission Cell" powered by
                  "Mathsflix By Hashim Zia," extend our warmest welcome and
                  sincere wishes to all students
                  {showMore ? (
                    <span>
                      {" "}
                      who are navigating the challenging and crucial phase of
                      university admissions. Our team comprises of NED alumni &
                      students who are dedicated to guiding and preparing you
                      for the entry test, answering your queries, and providing
                      valuable information on the fields of study to help you
                      become successful engineers and professionals in the
                      future. We recognize the significance of every question
                      and believe that no query is too small or unimportant. Our
                      team is committed to supporting you from test preparation
                      to orientation day celebrations, ensuring that you are
                      fully equipped to secure admission in NED University.
                      Please feel free to post your questions in this group and
                      invite your peers to join us as we work towards your
                      academic success.
                    </span>
                  ) : (
                    <span>
                      {" "}
                      We recognize the significance of every question and
                      believe that no query is too small or unimportant.{" "}
                      <button
                        className="read-more btn-outline-primary"
                        onClick={handleToggle}
                      >
                        Read More...
                      </button>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section data-aos="fade-up" data-aos-duration="2200" className="container text-center mt-5 ">
        <h2 data-aos="fade-down" data-aos-duration="2200" className=" mt-5 text-center">
          {" "}
          <b>
            <i className="fa-solid fa-pen"></i> Our Feedbacks!
          </b>{" "}
        </h2>
        <div
          data-aos="fade-up" data-aos-duration="2200"
          className="  text-decoration-underline mb-4 mx-auto"
        ></div>
        <Feedback />
      </section>
    </>
  );
};

export default About;
