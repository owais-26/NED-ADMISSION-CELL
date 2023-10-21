import React from "react";
import { mathArr } from "../Arrays/math";
import TestItem from "./TestItem";
import { useEffect, useState } from "react";
import Req from "../../Url";
import Loader from "../Navbar/Loader";

const MathComp = ({getTestByType}) => {
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
      {/* <div id="math" className="mb-5">
          <h2 className=" testHead">MATH</h2>
          {a.map((element) => {
          return <TestItem testTitle={`Math Test No. ${element}`} />;
        })}
        </div> */}
      <h2 data-aos="fade-up" className="mt-2">
        Maths test
      </h2>
      {isLoading ? (
        <Loader />
      ) : (
        
        getTestByType("math").map((item, index) => {
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
    </>
  );
};

export default MathComp;
