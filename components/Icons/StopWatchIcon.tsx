import React from "react";

const StopWatchIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Group 1171274937">
        <path
          id="Vector"
          d="M5.2522 1.55811C2.57734 1.55811 0.400513 3.73493 0.400513 6.40979C0.400513 9.08465 2.57734 11.2671 5.2522 11.2671C7.92706 11.2671 10.1039 9.09025 10.1039 6.41539C10.1039 3.74052 7.92706 1.55811 5.2522 1.55811ZM5.67189 6.23072C5.67189 6.46015 5.48163 6.65042 5.2522 6.65042C5.02276 6.65042 4.8325 6.46015 4.8325 6.23072V3.43275C4.8325 3.20331 5.02276 3.01305 5.2522 3.01305C5.48163 3.01305 5.67189 3.20331 5.67189 3.43275V6.23072Z"
        />
        <path
          id="Vector_2"
          d="M6.87017 0.886608H3.63571C3.41187 0.886608 3.2328 0.707537 3.2328 0.483699C3.2328 0.259862 3.41187 0.0751953 3.63571 0.0751953H6.87017C7.09401 0.0751953 7.27308 0.254266 7.27308 0.478103C7.27308 0.701941 7.09401 0.886608 6.87017 0.886608Z"
        />
      </g>
    </svg>
  );
};

export default StopWatchIcon;

type Props = {
  className: string;
};