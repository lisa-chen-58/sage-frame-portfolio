import React from "react";

const Divider = ({ flip = false }) => {
  return (
    <div className="relative mt-5 my-8 flex items-center justify-center w-full">
      <svg
        width="100%"
        height="60"
        viewBox="0 0 200 40"
        className={`${flip ? "" : "scale-x-[-1]"}`}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-quinary)" stopOpacity="0" />
            <stop offset="20%" stopColor="var(--color-quinary)" stopOpacity="1" />
            <stop offset="50%" stopColor="var(--color-tertiary)" stopOpacity="1" />
            <stop offset="80%" stopColor="var(--color-primary)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 0 20 C 50 -10, 150 50, 200 20"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default Divider;
