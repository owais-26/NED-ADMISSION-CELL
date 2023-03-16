import React from 'react';

const Defaultnews = () => {
    return (
      <div>
        <>
          <div>
            <h2 data-aos="fade-down"  className="text-center  mt-3">
              <i  className="fa-sharp fa-solid fa-newspaper me-1"></i> News
            </h2>
            <div
              data-aos="fade-down"
               className="  text-decoration-underline mb-4 mx-auto"
            ></div>
          </div>
          <h3 data-aos="fade-down"  className="text-center my-4">
            {" "}
            Whoa!! No News?? Stay Tuned!!{" "}
          </h3>
        </>
      </div>
    );
}

export default Defaultnews;
