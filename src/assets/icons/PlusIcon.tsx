import React from "react";

export const PlusIcon = ({
  width = "56",
  height = "56",
  fill = "#313037",
}) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35 27H29V21C29 20.448 28.552 20 28 20C27.448 20 27 20.448 27 21V27H21C20.448 27 20 27.448 20 28C20 28.552 20.448 29 21 29H27V35C27 35.553 27.448 36 28 36C28.552 36 29 35.553 29 35V29H35C35.553 29 36 28.552 36 28C36 27.448 35.553 27 35 27Z"
        fill={fill}
      />
    </svg>
  );
};