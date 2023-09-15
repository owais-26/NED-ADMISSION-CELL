import React from "react";
import { Accordion } from "react-bootstrap-accordion";

const Faqsitem = (props) => {
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine' className="mb-3">
        <div className="container  ">
          <Accordion
            className="rounded-edges text-black"
            title={props.question}
            show={false}
            children={<div style={{ fontFamily: "Asul" , color: "GrayText" }}>{props.answer}</div>}
          />
        </div>
      </div>
    </>
  );
};

export default Faqsitem;
