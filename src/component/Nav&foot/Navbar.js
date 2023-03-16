import { Link } from "react-router-dom";
import { React, useState, useEffect, useRef } from "react";

function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const togglerRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        togglerRef.current &&
        !togglerRef.current.contains(event.target) &&
        expanded
      ) {
        setExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [togglerRef, expanded]);
  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const closeNav = () => {
    if (expanded) {
      setExpanded(false);
    }
  };

  return (
    <>
      <nav className="navbar navbar1 sticky-top  navbar-expand-lg ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
             onClick={()=>{
               window.scrollTo(0, 0);
            }
          }
              loading="lazy"
              style={{
                width: "40px",
              }}
              src="NED.png"
              alt="Logo"
              className="d-inline-block logo align-text-top "
            ></img>
          </Link>
          <div className=" text-center mt-3 d-lg-none">
            <Link onClick={()=>{
               window.scrollTo(0, 0);
            }
              
            } className="text-white" to="/">
              {" "}
              <h5 className="text-center text-white"> NED Admission Cell</h5>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={!expanded}
            aria-label="Toggle navigation"
            onClick={toggleNav}
            ref={togglerRef}
          >
            <span className="navbar-toggler-icon">
              <i className="fa-solid fa-bars text-white toggler-icon "></i>
            </span>
          </button>

          <div
            className={`collapse navbar-collapse ${expanded ? "show" : ""}`}
            id="navbarSupportedContent"
            onClick={() => {
              closeNav();
              window.scrollTo(0, 0); // add this line to scroll to top
            }}
          >
            <ul className="navbar-nav nav-item1 me-auto mb-2 mb-lg-0">
              <li className="hover">
                <Link
                  className="nav-link active nav-item1 px-3  "
                  to="/"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-house me-1"></i>
                  Home
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link active nav-item1 px-3  "
                  to="/onlinecourses"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-solid fa-house-laptop me-1"></i>
                  Online Courses
                </Link>
              </li>
              <li className="hover">
                <Link
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                  className="nav-link nav-item1 px-3 "
                  to="/news"
                >
                  <i className="fa-sharp fa-solid fa-newspaper me-1"></i>
                  News
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3"
                  to="/guidelines"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-solid fa-circle-info me-1"></i>
                  Guidelines
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3 "
                  to="/tests"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-square-pen me-1"></i>
                  Tests
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3 "
                  to="/dept"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-building-columns me-1"></i>
                  Departments
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3 "
                  to="/merit"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-list-ol me-1"></i>
                  Merit Lists
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3 "
                  to="/pastpaper"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-clipboard me-1"></i>
                  Past Papers
                </Link>
              </li>
              <li className="hover">
                <Link
                  className="nav-link nav-item1 px-3 "
                  to="/faqs"
                  onClick={() => {
                    closeNav();
                    window.scrollTo(0, 0); // add this line to scroll to top
                  }}
                >
                  <i className="fa-sharp fa-solid fa-person-circle-question me-1"></i>
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
