import React from 'react';
import './Loader.css'
import img from './NED.png'
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
toast.info("Loading data... Clear your browser cache if it takes longer.", {
  position: "bottom-left",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
});

const Loader = () => {
    return (
      <>
        <ToastContainer
          position="bottom-left"
          autoClose={false}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="spanloader">
          <img className="loaderImg" src={img} alt="" />
          <span className="loader "> </span>
        </div>
      </>
    );
}

export default Loader;
