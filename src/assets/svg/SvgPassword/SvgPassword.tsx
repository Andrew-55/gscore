import * as React from "react";
import { SVGProps } from "react";

export const SvgPassword = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 18}
    height={props.height || 23}
    viewBox="0 0 18 23"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14 9.14H4a2.5 2.5 0 0 0-2.5 2.5v7.5a2.5 2.5 0 0 0 2.5 2.5h10a2.5 2.5 0 0 0 2.5-2.5v-7.5a2.5 2.5 0 0 0-2.5-2.5ZM9 1.64a5 5 0 0 0-5 5v2.5h10v-2.5a5 5 0 0 0-5-5v0Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
