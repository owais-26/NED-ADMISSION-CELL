import React from 'react';
import { phy } from "../Arrays/physics";
import TestItem from './TestItem';

const PhyComp = () => {
    return (
      <>
        <div id="physics " className="mb-5">
          <h2 data-aos="fade-up" className="mt-2 testHead">
            Physics
          </h2>
          {phy.map((item, index) => {
            return (
              <TestItem
                className="testitem"
                key={index}
                testTitle={item.testName}
                testLink={item.testLink}
              />
            );
          })}
        </div>
      </>
    );
}

export default PhyComp;
