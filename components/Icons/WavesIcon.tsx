import React from "react";

const WavesIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="78"
      height="47"
      viewBox="0 0 78 47"
      fill="none"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7626 44.144C14.7985 44.312 7.68174 43.9761 1.02297 46.3575C0.626072 46.498 0.189495 46.2934 0.0460014 45.8965C-0.0944405 45.4996 0.110119 45.063 0.507019 44.9195C7.32149 42.4832 14.6 42.7885 21.7259 42.6175C22.1472 42.6053 22.4983 42.9411 22.5075 43.3625C22.5197 43.7838 22.1839 44.1318 21.7626 44.144Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.3841 34.0304C20.2134 32.0331 17.8442 30.5368 14.9804 29.7952C14.5713 29.6896 14.3271 29.2728 14.4309 28.8649C14.5377 28.457 14.956 28.2119 15.362 28.3175C18.4762 29.1235 21.056 30.7362 23.4161 32.9066C23.7275 33.1918 23.7488 33.6751 23.4619 33.9853C23.1779 34.2951 22.6925 34.3156 22.3841 34.0304Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.4254 12.2263C27.4301 8.81444 25.47 6.14544 22.4658 4.21803C22.1116 3.99058 22.0078 3.51797 22.2368 3.16351C22.4627 2.80904 22.936 2.70584 23.2901 2.9333C26.615 5.0674 28.7887 8.02094 29.8909 11.7985C30.01 12.2027 29.7749 12.6271 29.3719 12.745C28.9658 12.8631 28.5414 12.6305 28.4254 12.2263Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62.727 7.59501C63.3193 8.29203 63.8505 9.04309 64.3024 9.84269C64.5039 10.1987 64.8581 10.9552 64.913 11.604C64.9741 12.2952 64.739 12.8784 64.1345 13.1855C63.3315 13.5928 62.6904 13.5504 62.1958 13.304C61.7195 13.0674 61.347 12.6024 61.1119 11.9789C60.6631 10.7873 60.7303 8.96616 60.9654 7.92689C60.3334 7.27476 59.6404 6.68336 58.8985 6.15762C53.3724 2.24205 45.2664 3.68585 39.029 9.54044C36.846 11.5903 35.7958 15.8951 35.2493 20.5398C34.3975 27.7716 34.8829 35.8488 34.9501 38.2153C34.9654 38.7996 34.9104 39.1465 34.8799 39.2158C34.7364 39.5565 34.483 39.645 34.3059 39.6786C34.0494 39.7244 33.8449 39.6756 33.68 39.5901C33.4572 39.4728 33.2739 39.2664 33.1885 38.948C33.1427 38.7721 33.1305 38.5273 33.1366 38.2663C33.1427 38.0852 33.1793 37.8874 33.1427 37.7576C32.9046 36.9266 32.6176 36.115 32.3367 35.2977C31.3994 32.5503 30.1873 29.9756 28.8409 27.404C24.5635 19.2327 20.4266 10.5989 13.4137 4.3734C13.0992 4.09405 13.0687 3.61105 13.3496 3.29597C13.6274 2.9809 14.1098 2.95219 14.4273 3.23185C21.5807 9.58043 25.8306 18.3629 30.1934 26.696C31.3383 28.8835 32.3886 31.0741 33.2618 33.3655C33.1732 29.3122 33.2068 23.7015 33.9487 18.7372C34.6082 14.3222 35.863 10.4203 37.9849 8.42759C44.8177 2.01398 53.7296 0.622701 59.7808 4.91228C60.4281 5.37146 61.0448 5.87645 61.6187 6.42417C64.7848 0.707279 71.5626 -1.58407 77.5528 1.15027C77.9375 1.32521 78.1054 1.77829 77.9314 2.16145C77.7543 2.54461 77.3024 2.71376 76.9177 2.53882C71.5199 0.0749824 65.3984 2.2738 62.727 7.59501ZM62.2843 9.50898C62.5316 9.85826 62.7606 10.2204 62.9743 10.5947C63.0873 10.7956 63.2827 11.1818 63.3651 11.5598C63.3834 11.6483 63.3865 11.7869 63.3865 11.851C63.1758 11.9548 63.011 12.0049 62.8766 11.9374C62.7087 11.8544 62.6232 11.659 62.5408 11.4407C62.3332 10.893 62.266 10.1669 62.2843 9.50898Z"
      />
    </svg>
  );
};

export default WavesIcon;

type Props = {
  className: string;
};