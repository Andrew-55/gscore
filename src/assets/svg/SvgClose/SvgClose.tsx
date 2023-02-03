import * as React from "react";
import { SVGProps } from "react";

export const SvgClose = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1 19 19 1M19 19 1 1"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
