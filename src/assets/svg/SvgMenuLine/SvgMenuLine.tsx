import * as React from "react";
import { SVGProps } from "react";

export const SvgMenuLine = ({
  width = 24,
  height = 24,
  stroke = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      d="M4 5h16M4 12h16M4 19h16"
    />
  </svg>
);
