import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" border-5 border-dark">
        <footer
          className="text-center footer text-lg-start text-white"
          // style={{"background-color: #1c2331"}}
        >
          <section
            className="d-flex sec justify-content-between p-4"
            //    style="background-color: #6351ce"
          >
            <div className="me-5">
              <span className="text-white">Get connected with us:</span>
            </div>

            <div>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/groups/396363091463993"
                className="text-white me-4"
                target={"_blank"}
              >
                <i className="fa-brands  fa-facebook"></i> Facebook
              </a>
            </div>
          </section>

          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row ">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    //   style={"width: 60px; background-color: #7c4dff; height: 2px"}
                  ></hr>

                  <h3 className="text text-white">
                    <b>NED Admission Cell</b>{" "}
                  </h3>

                  <img
                    loading="lazy"
                    src=" NED.png"
                    className=" m-auto ms-5 footerlogo"
                    alt="FooterLogo"
                  />
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h4 className="text-uppercase text-white fw-bold">
                    Useful links
                  </h4>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "white",
                      height: "2px",
                    }}
                  />
                  <div className="row ">
                    <div className="col-6">
                      <p>
                        <Link
                          to="/tests"
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          className="text-white"
                        >
                          Tests
                        </Link>
                      </p>
                      <p>
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          to="/dept"
                          className="text-white"
                        >
                          Departments
                        </Link>
                      </p>
                      <p>
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          to="/merit"
                          className="text-white"
                        >
                          MeritLists
                        </Link>
                      </p>
                    </div>
                    <div className="col-6">
                      <p>
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          to="/guidelines"
                          className="text-white"
                        >
                          Guidelines
                        </Link>
                      </p>
                      <p>
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          to="/pastpaper"
                          className="text-white"
                        >
                          PastPapers
                        </Link>
                      </p>
                      <p>
                        <Link
                          onClick={() => {
                            window.scrollTo(0, 0); // add this line to scroll to top
                          }}
                          to="/faqs"
                          className="text-white"
                        >
                          FAQs
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h4 className="text-uppercase text-white fw-bold">
                    Contacts
                  </h4>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{
                      width: "60px",
                      backgroundColor: "white",
                      height: "2px",
                    }}
                  />

                  <p className="text-white">
                    <i className="fa-brands me-2 fa-youtube"></i>{" "}
                    <a
                      rel="noopener noreferrer"
                      className="text-white"
                      href="https://www.youtube.com/channel/UCqqGFk5yI9hRFwZg53GFyeQ"
                    >
                      Mathsflix By Hashim Zia
                    </a>
                  </p>
                  <p className="text-white">
                    <i className="fas fa-phone mr-3"></i> 0303 2785025
                  </p>
                  <p className="text-white">
                    <i className="fa-brands me-2 fa-facebook"></i>{" "}
                    <a
                      rel="noopener noreferrer"
                      className="text-white"
                      target={"_blank"}
                      href="https://www.facebook.com/mathsflix/"
                    >
                      Mathsflix By Hashim Zia
                    </a>
                  </p>
                </div>
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center pb-1"
            // style="background-color: rgba(0, 0, 0, 0.2)"
          >
            <p className="text-white">
              Developed By Owais Ansari. <br />
              <a
                rel="noopener noreferrer"
                className="text-white"
                target="_blank"
                href="https://www.facebook.com/owais.ansari.9822/"
                title="Facebook"
              >
                <span hidden>Facebook</span>
                <i className="fa-brands fa-facebook me-1"></i>{" "}
              </a>
              <a
                rel="noopener noreferrer"
                className="text-white"
                target="_blank"
                href="https://www.instagram.com/owais._.26/"
                title="Instagram"
              >
                <span hidden>Instagram</span>
                <i className="fa-brands fa-instagram me-2"></i>
              </a>
              <a
                rel="noopener noreferrer"
                className="text-white"
                target="_blank"
                href="https://www.linkedin.com/in/muhammad-owais-ansari-ba0694229/"
                title="LinkedIn"
              >
                <span hidden>LinkedIn</span>
                <i className="fa-brands fa-linkedin me-2"></i>
              </a>
              <a
                rel="noopener noreferrer"
                className="text-white"
                target="_blank"
                href="https://github.com/owais-26"
                title="Github"
              >
                <span hidden>Git</span>
                <i className="fa-brands fa-github"></i>
              </a>{" "}
              <br />
              <Link
                onClick={() => {
                  window.scroll(0, 0);
                }}
                rel="noopener noreferrer"
                className="text-white"
                to="/"
              >
                nedadmissioncell.com &nbsp;
              </Link>
                | All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
