import React from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import {
  SvgFacebook,
  SvgLinkedin,
  SvgLogoIcon,
  SvgTextLogo,
  SvgTwitter,
} from "@/assets/svg";

export const Footer = () => {
  return (
    <Root>
      <FooterColumn>
        <Logo>
          <StyledSvgLogoIcon />
          <StyledSvgTextLogo />
        </Logo>
        <Paragraph>
          Ut enim ad minim veniam quis nostrud exercitation ea commodo
        </Paragraph>
      </FooterColumn>
      <FooterBottom>
        <ParagraphBottom>
          Copyright © {new Date().getFullYear()} GScore | All Rights Reserved{" "}
          <StyledSpan>
            |{" "}
            <StyledLink
              href="https://ru.wikipedia.org/wiki/Cookie"
              target={"_blank"}
            >
              Cookies
            </StyledLink>{" "}
            |{" "}
            <StyledLink
              href="https://en.wikipedia.org/wiki/Privacy_policy"
              target={"_blank"}
            >
              Privacy Policy
            </StyledLink>
          </StyledSpan>
        </ParagraphBottom>
        <SocialMedia>
          <SocialMediaLink
            href="https://purrweb.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <SvgFacebook />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://purrweb.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <SvgTwitter />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://purrweb.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <SvgLinkedin />
          </SocialMediaLink>
        </SocialMedia>
      </FooterBottom>
    </Root>
  );
};

const Root = styled.footer`
  position: relative;
  width: 100%;
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding: 60px 86px 42px 86px;
  border-top: 1px solid ${COLORS.color_700};

  @media (max-width: 768px) {
    padding: 40px 16px 24px 16px;
  }
`;

const Logo = styled.div`
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

const FooterColumn = styled.div`
  max-width: 322px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 24px;

  @media (max-width: 768px) {
    max-width: 375px;
    margin-bottom: 40px;
  }
`;

const ParagraphStyle = css`
  color: ${COLORS.color_400};
  ${TYPOGRAPHY.Inter_Medium_18px}

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Regular_16px}
    line-height: 30px;
  }
`;

const Paragraph = styled.p`
  ${ParagraphStyle};
`;

const ParagraphBottom = styled.p`
  margin-left: -18px;
  ${ParagraphStyle};

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`;

const StyledSpan = styled.span`
  color: ${COLORS.color_100};
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${COLORS.color_700};
  padding-top: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 30px;

  @media (max-width: 768px) {
    padding-top: 32px;
    flex-direction: column;
    justify-content: center;
    row-gap: 24px;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  column-gap: 25px;
  align-items: center;
`;

const SocialMediaLink = styled.a`
  fill: ${COLORS.color_100};
  transition: all 0.3s ease-out;

  &:hover {
    fill: ${COLORS.primary_01};
    transform: scale(1.1);
  }

  &:focus {
    fill: ${COLORS.primary_01};
  }

  &:active {
    fill: ${COLORS.red_400};
  }
`;

const StyledLink = styled.a`
  border-bottom: 1px solid ${COLORS.color_100};

  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    border-bottom: 1px solid ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
    border-bottom: 1px solid ${COLORS.red_400};
  }
`;
