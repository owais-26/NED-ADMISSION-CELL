import React from "react";

import Card from "react-bootstrap/Card";

const Pastitem = ({props}) => {
  return (
    <>
      <div
        data-aos="fade-up" data-aos-duration="600" data-aos-easing='ease-out-sine'
        style={{
          width: "300px",
        }}
      >
        <Card className="m-2 cardPast">
          <div className="card-imagePast card-flipPast">
            <Card.Img
            alt='Different subjects are shown'
              variant="top"
              src={props.imgUrl}
              style={{
                width: "250px",
                "borderRadius": "20px",
              }}
            />
          </div>
          <Card.Body>
            <h5 className="text-center p-2 ">{props.title}</h5>
            <div className="text-center">
              <button type="button"  className="btn  btn-outline-primary">
                <a  rel="noopener noreferrer" className="pastpprlink" href={props.link} target="_blank">
                  {" "}
                  Show Material!
                </a>
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Pastitem;
