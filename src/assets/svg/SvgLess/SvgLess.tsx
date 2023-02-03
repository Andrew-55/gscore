import * as React from "react";
import { SVGProps } from "react";

export const SvgLess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 20}
    height={props.height || 3}
    viewBox="0 0 20 3"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1.64h18"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
