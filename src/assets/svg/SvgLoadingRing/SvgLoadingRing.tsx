import * as React from "react";
import { SVGProps } from "react";

export const SvgLoadingRing = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 18}
    height={props.height || 18}
    viewBox="0 0 18 18"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g fill={props.fill}>
      <path
        d="M17 9a8 8 0 1 1-2.343-5.657"
        stroke={props.stroke}
        strokeWidth={2}
        strokeLinecap="round"
      />
    </g>
  </svg>
);
