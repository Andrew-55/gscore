import * as React from "react";
import { SVGProps } from "react";

export const SvgArrowExternalRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 16}
    height={props.height || 16}
    viewBox="0 0 18 18"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 17 17 1M17 16.085V1H1.915"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
