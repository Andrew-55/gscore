import * as React from "react";
import { SVGProps } from "react";

export const SvgArrowExternalRight = ({
  width = 16,
  height = 16,
  stroke = "#fff",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 17 17 1M17 16.085V1H1.915"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
