import * as React from "react";
import { SVGProps } from "react";

export const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width || 12}
    height={props.height || 20}
    viewBox="0 0 12 20"
    fill="none"
    transform={props.transform}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.5 19 9-9-9-9"
      stroke={props.stroke}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
