import React from "react";

const YouTubeIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path d="M17 3.99902H7C4 3.99902 2 5.99902 2 8.99902V14.999C2 17.999 4 19.999 7 19.999H17C20 19.999 22 17.999 22 14.999V8.99902C22 5.99902 20 3.99902 17 3.99902ZM13.89 13.029L11.42 14.509C10.42 15.109 9.59998 14.649 9.59998 13.479V10.509C9.59998 9.33903 10.42 8.87903 11.42 9.47903L13.89 10.959C14.84 11.539 14.84 12.459 13.89 13.029Z" />
    </svg>
  );
};

export default YouTubeIcon;

type Props = {
  className: string;
};
