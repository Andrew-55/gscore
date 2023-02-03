import * as React from "react";
import { SVGProps } from "react";

export const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 22}
    height={props.height || 18}
    viewBox="0 0 22 18"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.16 10.406 5.623 5.623L20.84 1.97"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
