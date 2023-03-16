import React from 'react';
import { chem } from '../Arrays/chemisty';
import TestItem from './TestItem';

const ChemComp = () => {
    return (
      <>
        <div id="physics " className="mb-5">
          <h2 data-aos="fade-up" className="mt-2 testHead">
            Chemistry
          </h2>
          {chem.map((item, index) => {
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

export default ChemComp;
