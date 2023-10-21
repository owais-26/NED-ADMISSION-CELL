import React, { useState } from 'react';
import { chem } from '../Arrays/chemisty';
import TestItem from './TestItem';
import { useEffect } from 'react';
import Req from '../../Url'
import Loader from '../Navbar/Loader';

const ChemComp = ({getTestByType}) => {
  const [Test, setTest] = useState();
   const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Tests | Ned Admission Cell";
    setIsLoading(false)
  }, []);
    return (
      <>
        <div id="physics " className="mb-5">
          <h2 data-aos="fade-up" className="mt-2 testHead">
            Chemistry
          </h2>
          {isLoading ? (
            <Loader />
          ) : (
            getTestByType("chemistry").map((item, index) => {
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

export default ChemComp;
