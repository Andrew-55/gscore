import * as React from "react";
import { SVGProps } from "react";

export const SvgEmail = (props: SVGProps<SVGSVGElement>) => (
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
      d="M21 4.14v10a2.5 2.5 0 0 1-2.5 2.5h-15a2.5 2.5 0 0 1-2.5-2.5v-10"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 4.14a2.5 2.5 0 0 0-2.5-2.5h-15A2.5 2.5 0 0 0 1 4.14l8.675 5.416a2.5 2.5 0 0 0 2.65 0L21 4.14Z"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
