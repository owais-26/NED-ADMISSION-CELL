import React from 'react'



export default function TestItem(props) {
  
  return (
    <>
      <div data-aos="fade-up" className="container rounded mt-4 mb-3 shade ">
        <div className="d-flex justify-content-between p-2  ">
          <div className="text-black testitem text-dark pt-3 pb-2">
            <i  className="fa-sharp fa-solid  fa-pen-to-square me-1"></i>
            {props.testTitle}{" "}
          </div>
          <button className="myButton testBtn">
            {" "}
            <a  rel="noopener noreferrer"
              className="text-white underline"
              target="_blank"
              href={props.testLink}
            >
              Start Test!{" "}
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
