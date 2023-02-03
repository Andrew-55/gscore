import * as React from "react";
import { SVGProps } from "react";

export const SvgArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 18}
    height={props.height || 18}
    viewBox="0 0 20 20"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.54 1.54 19 10l-8.46 8.46M19 10H1"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
