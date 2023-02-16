import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";
import { SvgLogoIcon, SvgTextLogo } from "@/assets/svg";

interface Props {
  isMobile?: boolean;
}

export const LogoLink: FC<Props> = ({ isMobile }) => {
  return (
    <Root href="/">
      {isMobile ? (
        <>
          <SvgLogoIcon width={32} height={32} />
          <SvgTextLogo width={88} height={17} />
        </>
      ) : (
        <>
          <SvgLogoIcon />
          <SvgTextLogo />
        </>
      )}
    </Root>
  );
};

const Root = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 10px;

  & svg {
    fill: ${COLORS.color_100};
    transition: all 0.3s ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: ${COLORS.primary_01};
  }

  &:active svg {
    fill: ${COLORS.red_400};
  }
`;
