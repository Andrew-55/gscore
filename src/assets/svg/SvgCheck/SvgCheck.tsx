import * as React from "react";
import { SVGProps } from "react";

export const SvgCheck = ({
  width = 22,
  height = 18,
  stroke = "#fff",
  strokeWidth = 2,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.16 10.406 5.623 5.623L20.84 1.97"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
