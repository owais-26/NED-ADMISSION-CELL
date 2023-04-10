import React from "react";

const WhatsApp = () => {
  const phoneNumber = "+923032785025"; // replace with your phone number
  const message =
    encodeURIComponent(`Hi there! I reached you through Ned Admission Cell website. I'm interested in learning more about Mathflix by Hashim Zia and its courses. Can you provide me with more information, please?
`); // replace with your default message
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  return (
    <div >
      <a
        href={url}
        title="WhatsApp"
        rel="	noopener noreferrer"
        className="float"
        target="_blank"
      >
        &#8203;
        <i className="fa-brands fa-whatsapp my-float"></i>
      </a>
    </div>
  );
};

export default WhatsApp;
