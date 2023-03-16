import React from 'react';
import { mathArr } from '../Arrays/math';
import TestItem from './TestItem';


const MathComp = () => {
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
        {mathArr.map((item, index) => {
          return (
            <TestItem
              className="testitem"
              testTitle={item.testName}
              testLink={item.testLink}
              key={index}
            />
          );
        })}
      </>
    );
}

export default MathComp;
