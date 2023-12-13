import React from "react";

const T24HourIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
      className={className}
    >
      <path
        opacity="0.4"
        d="M33.75 35.3632H32.325C30.825 35.3632 29.4 35.9445 28.35 36.9945L25.1438 40.1632C23.6813 41.607 21.3 41.607 19.8375 40.1632L16.6312 36.9945C15.5812 35.9445 14.1375 35.3632 12.6562 35.3632H11.25C8.1375 35.3632 5.625 32.8695 5.625 29.7945V9.33823C5.625 6.26323 8.1375 3.76953 11.25 3.76953H33.75C36.8625 3.76953 39.375 6.26323 39.375 9.33823V29.7945C39.375 32.8508 36.8625 35.3632 33.75 35.3632Z"
      />
      <path d="M19.4617 27.207H14.4367C13.6117 27.207 12.843 26.8132 12.3555 26.1382C11.8867 25.5007 11.7742 24.7133 11.9992 23.9633C12.6554 21.957 14.2679 20.8695 15.6929 19.8945C17.1929 18.882 18.0367 18.2445 18.0367 17.157C18.0367 16.182 17.2492 15.3945 16.2742 15.3945C15.2992 15.3945 14.5117 16.182 14.5117 17.157C14.5117 17.9258 13.8742 18.5633 13.1055 18.5633C12.3367 18.5633 11.6992 17.9258 11.6992 17.157C11.6992 14.6445 13.7429 12.582 16.2742 12.582C18.8054 12.582 20.8492 14.6258 20.8492 17.157C20.8492 19.8008 18.8617 21.1507 17.268 22.2382C16.2742 22.9132 15.3367 23.5508 14.8679 24.3945H19.4429C20.2117 24.3945 20.8492 25.032 20.8492 25.8008C20.8492 26.5695 20.2305 27.207 19.4617 27.207Z" />
      <path d="M30.0734 27.2082C29.3047 27.2082 28.6672 26.5707 28.6672 25.802V24.5082H24.9922C24.9922 24.5082 24.9922 24.5082 24.9734 24.5082C24.0547 24.5082 23.2109 24.0207 22.7422 23.2332C22.2734 22.427 22.2734 21.4332 22.7422 20.6457C24.0172 18.452 25.4984 15.9582 26.8484 13.7832C27.4484 12.8269 28.5922 12.3957 29.6609 12.6957C30.7297 13.0145 31.4797 13.9895 31.4609 15.1145V21.7145H31.8734C32.6422 21.7145 33.2797 22.352 33.2797 23.1207C33.2797 23.8895 32.6422 24.527 31.8734 24.527H31.4797V25.8207C31.4797 26.5895 30.8609 27.2082 30.0734 27.2082ZM28.6672 16.202C27.5609 18.002 26.4172 19.9332 25.3859 21.6957H28.6672V16.202Z" />
    </svg>
  );
};

export default T24HourIcon;

type Props = {
  className: string;
};
