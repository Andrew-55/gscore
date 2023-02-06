import * as React from "react";
import { SVGProps } from "react";

export const SvgSearch = ({
  width = 22,
  height = 23,
  stroke = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.889 19.417a8.889 8.889 0 1 0 0-17.778 8.889 8.889 0 0 0 0 17.778ZM21 21.64l-4.834-4.834"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
