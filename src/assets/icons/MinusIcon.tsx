import React from "react";

export const MinusIcon = ({
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
        <rect x="22" y="27" width="12" height="2" rx="1" fill={fill} />
    </svg>
  );
};