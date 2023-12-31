import React from "react";

const Grid2Icon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18.6714 2H16.7714C14.5914 2 13.4414 3.15 13.4414 5.33V7.23C13.4414 9.41 14.5914 10.56 16.7714 10.56H18.6714C20.8514 10.56 22.0014 9.41 22.0014 7.23V5.33C22.0014 3.15 20.8514 2 18.6714 2Z"
      />
      <path
        d="M7.24 13.43H5.34C3.15 13.43 2 14.58 2 16.76V18.66C2 20.85 3.15 22 5.33 22H7.23C9.41 22 10.56 20.85 10.56 18.67V16.77C10.57 14.58 9.42 13.43 7.24 13.43Z"
      />
      <path
        d="M6.29 10.58C8.6593 10.58 10.58 8.6593 10.58 6.29C10.58 3.9207 8.6593 2 6.29 2C3.9207 2 2 3.9207 2 6.29C2 8.6593 3.9207 10.58 6.29 10.58Z"
      />
      <path
        d="M17.7119 21.9999C20.0812 21.9999 22.0019 20.0792 22.0019 17.7099C22.0019 15.3406 20.0812 13.4199 17.7119 13.4199C15.3426 13.4199 13.4219 15.3406 13.4219 17.7099C13.4219 20.0792 15.3426 21.9999 17.7119 21.9999Z"
      />
    </svg>
  );
};

export default Grid2Icon;

type Props = {
  className: string;
};
