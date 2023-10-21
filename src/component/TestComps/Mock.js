import React from 'react';
import { mock } from '../Arrays/mocktest';
import TestItem from './TestItem';
import { useEffect,useState } from "react";
import Req from "../../Url";
import Loader from '../Navbar/Loader';


const Mock = ({getTestByType}) => {
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
    // const arr = mock;
    return (
      <div>
        <h2 data-aos="fade-up" className="mt-2">
          Mock test
        </h2>
        {isLoading ? (
          <Loader/>
        ) : (
          getTestByType("mock").map((item, index) => {
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
    );
}

export default Mock;
