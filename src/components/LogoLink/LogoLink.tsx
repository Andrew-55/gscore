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
          <StyledSvgLogoIcon />
          <StyledSvgTextLogo />
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

const StyledSvgLogoIcon = styled(SvgLogoIcon)`
  width: 32px;
  height: 32px;
`;

const StyledSvgTextLogo = styled(SvgTextLogo)`
  width: 88px;
  height: 17px;
`;
