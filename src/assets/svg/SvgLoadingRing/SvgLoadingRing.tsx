import * as React from "react";
import { SVGProps } from "react";

export const SvgLoadingRing = ({
  width = 18,
  height = 18,
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
      d="M17 9a8 8 0 1 1-2.343-5.657"
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);
