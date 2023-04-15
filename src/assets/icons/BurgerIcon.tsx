import React from "react";

export const BurgerIcon = ({
  width = "56",
  height = "56",
  fill = "#313037",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="56" height="56" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37 23H19C18.448 23 18 22.552 18 22C18 21.448 18.448 21 19 21H37C37.553 21 38 21.448 38 22C38 22.552 37.553 23 37 23ZM37 29H19C18.448 29 18 28.552 18 28C18 27.448 18.448 27 19 27H37C37.553 27 38 27.448 38 28C38 28.552 37.553 29 37 29ZM19 35H37C37.553 35 38 34.553 38 34C38 33.447 37.553 33 37 33H19C18.448 33 18 33.447 18 34C18 34.553 18.448 35 19 35Z"
        fill={fill}
      />
    </svg>
  );
};
