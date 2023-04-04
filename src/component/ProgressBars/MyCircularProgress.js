import React, { useRef } from "react";
import { useState, useEffect } from "react";

const CircularProgress = ({ size, progress }) => {
  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const progressOffset = ((23000 - progress) / 23000) * circumference;
    setOffset(progressOffset);
  }, [circumference, progress]);

  return (
    <svg width={size} height={size}>
      <circle
        stroke="#00046c"
        strokeWidth={strokeWidth}
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke="#00046c"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        style={{
          strokeDasharray: circumference,
          strokeDashoffset: offset,
          transition: "stroke-dashoffset 0.5s ease 0s",
        }}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="40"
        fontWeight="bold"
        fill="#00046c"
        className="font-italic "
      >
        {progress}+
      </text>
    </svg>
  );
};

const MyCircularProgress = () => {
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const interval = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress === 23000) {
              clearInterval(interval);
              return 23000;
            } else {
              return prevProgress + 50;
            }
          });
        }, 7);
      }
    });
    observer.observe(progressRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={progressRef}>
      <CircularProgress size={200} progress={progress} />
    </div>
  );
};

export default MyCircularProgress;