import React from "react";

const PlayIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="55"
      height="54"
      viewBox="0 0 55 54"
      fill="none"
      className={className}
    >
      <path d="M27.2159 4.59961C14.8511 4.59961 4.81595 14.6348 4.81595 26.9996C4.81595 39.3644 14.8511 49.3996 27.2159 49.3996C39.5807 49.3996 49.6159 39.3644 49.6159 26.9996C49.6159 14.6348 39.5807 4.59961 27.2159 4.59961ZM33.1743 30.8748L30.3071 32.5324L27.4399 34.19C23.7439 36.318 20.7199 34.5708 20.7199 30.3148V26.9996V23.6844C20.7199 19.406 23.7439 17.6812 27.4399 19.8092L30.3071 21.4668L33.1743 23.1244C36.8703 25.2524 36.8703 28.7468 33.1743 30.8748Z" />
    </svg>
  );
};

export default PlayIcon;

type Props = {
  className: string;
};
