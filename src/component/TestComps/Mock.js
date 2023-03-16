import React from 'react';
import { mock } from '../Arrays/mocktest';
import TestItem from './TestItem';


const Mock = () => {
    const arr = mock;
    return (
      <div>
        <h2 data-aos="fade-up" className="mt-2">
          Mock test
        </h2>
        {arr.map((item, index) => {
          return (
            <TestItem
              className="testitem"
              testTitle={item.testName}
              testLink={item.testLink}
              key={index}
            />
          );
        })}
      </div>
    );
}

export default Mock;
