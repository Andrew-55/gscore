import React from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";
import { SvgLogoIcon, SvgTextLogo } from "@/assets/svg";

export const Logo = () => {
  return (
    <Root>
      <StyledSvgLogoIcon />
      <StyledSvgTextLogo />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const StyledSvgLogoIcon = styled(SvgLogoIcon)`
  fill: ${COLORS.color_100};
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const StyledSvgTextLogo = styled(SvgTextLogo)`
  fill: ${COLORS.color_100};
  @media (max-width: 768px) {
    width: 88px;
    height: 17px;
  }
`;
