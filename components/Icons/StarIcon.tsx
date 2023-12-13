import React from "react";

const StarIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="32"
      height="29"
      viewBox="0 0 32 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.405 1.47826C15.0615 0.165421 16.9213 0.220123 17.523 1.47826L21.1334 8.75359L29.1198 9.90233C30.5421 10.1211 31.0891 11.8716 30.0497 12.9109L24.3061 18.5452L25.6736 26.4769C25.8924 27.8992 24.3608 28.9932 23.1026 28.3368L15.9914 24.5624L8.82547 28.3368C7.56733 28.9932 6.03569 27.8992 6.25449 26.4769L7.62204 18.5452L1.87836 12.9109C0.839024 11.8716 1.38604 10.1211 2.80829 9.90233L10.8494 8.75359L14.405 1.47826Z"
      />
    </svg>
  );
};

export default StarIcon;

type Props = {
  className: string;
};
