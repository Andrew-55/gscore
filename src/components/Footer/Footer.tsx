import React from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgLogoIcon, SvgTextLogo } from "@/assets/svg";

export const Footer = () => {
  return (
    <Root>
      <FooterColumn>
        <Logo>
          <SvgLogoIcon />
          <SvgTextLogo />
        </Logo>
        <StyledParagraph>
          Ut enim ad minim veniam quis nostrud exercitation ea commodo
        </StyledParagraph>
      </FooterColumn>
      <FooterBottom>
        <StyledParagraph>
          Copyright © 2022 GScore | All Rights Reserved | Cookies | Privacy
          Policy
        </StyledParagraph>
      </FooterBottom>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding-top: 60px;
  padding-bottom: 42px;
  padding-left: 86px;
  padding-right: 86px;
  border-top: 1px solid ${COLORS.color_700};
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const FooterColumn = styled.div`
  max-width: 322px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;
`;

const StyledParagraph = styled.p`
  color: ${COLORS.color_400};
  ${TYPOGRAPHY.Inter_Medium_18px}
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${COLORS.color_700};
  min-height: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
