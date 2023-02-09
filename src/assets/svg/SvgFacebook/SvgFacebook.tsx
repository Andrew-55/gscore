import * as React from "react";
import { SVGProps } from "react";

export const SvgFacebook = ({
  width = 14,
  height = 25,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.002 24.723V13.494h3.959l.592-4.376H9.002V6.324c0-1.267.37-2.13 2.278-2.13l2.434-.001V.279c-.421-.053-1.866-.173-3.547-.173-3.51 0-5.912 2.04-5.912 5.785v3.227H.286v4.376h3.97v11.23h4.746Z"
      fill="#fff"
    />
  </svg>
);
