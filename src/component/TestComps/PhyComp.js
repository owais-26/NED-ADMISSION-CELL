import React from 'react';
import { phy } from "../Arrays/physics";
import TestItem from './TestItem';
// import { useEffect, useState } from "react";
import Req from "../../Url";
import { useEffect, useState } from "react";
import Loader from '../Navbar/Loader';
// import Req from "../../Url";
const PhyComp = ({getTestByType}) => {
   const [Test, setTest] = useState();
    const [isLoading, setIsLoading] = useState(true);
   useEffect(() => {
     document.title = "Tests | Ned Admission Cell";
     const getTest = async () => {
       await Req.get(`/test/gettest`).then((response) => {
         if (response.status === 200) {
           setTest(response.data);
           setIsLoading(false);
         }
       });
     };
     getTest();
   }, []);
    return (
      <>
        <div id="physics " className="mb-5">
          <h2 data-aos="fade-up" className="mt-2 testHead">
            Physics
          </h2>
          {isLoading ? (
            <Loader />
          ) : (
            
            getTestByType("physics").map((item, index) => {
              return (
                <TestItem
                  className="testitem"
                  key={item._id}
                  testTitle={item.title}
                  testLink={item.link}
                />
              );
            })
          )}
        </div>
      </>
    );
}

export default PhyComp;
