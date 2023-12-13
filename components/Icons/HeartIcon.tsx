import React from "react";

const HeartIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="vuesax/linear/heart">
        <g id="heart">
          <path
            id="Vector"
            d="M7.53602 11.769C7.34479 11.8365 7.02984 11.8365 6.83862 11.769C5.2076 11.2122 1.56313 8.88945 1.56313 4.95252C1.56313 3.21464 2.96355 1.80859 4.69018 1.80859C5.71378 1.80859 6.61927 2.30352 7.18732 3.06841C7.75536 2.30352 8.66648 1.80859 9.68446 1.80859C11.4111 1.80859 12.8115 3.21464 12.8115 4.95252C12.8115 8.88945 9.16703 11.2122 7.53602 11.769Z"
            strokeWidth="0.843629"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );
};

export default HeartIcon;

type Props = {
  className: string;
};
