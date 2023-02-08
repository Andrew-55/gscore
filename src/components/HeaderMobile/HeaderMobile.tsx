import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import {
  SvgChevronRight,
  SvgLogoIcon,
  SvgMenuLine,
  SvgTextLogo,
} from "@/assets/svg";
import { ButtonIcon } from "@/ui";

import { HeaderMobilePopUp } from "../HeaderMobilePopUp";

interface Props {
  username?: string;
}

export const HeaderMobile: FC<Props> = ({ username }) => {
  const [isMobilePopUp, setIsMobilePopUp] = useState(false);

  const handleClosePopUp = () => {
    setIsMobilePopUp((prev) => !prev);
  };

  return (
    <Root>
      <Logo>
        <SvgLogoIcon width={32} height={32} />
        <SvgTextLogo width={88} height={17} />
      </Logo>

      {username && (
        <ButtonIcon
          icon={<SvgMenuLine />}
          onClick={() => setIsMobilePopUp((prev) => !prev)}
        />
      )}

      {isMobilePopUp && (
        <HeaderMobilePopUp username={username} onClose={handleClosePopUp} />
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding: 28px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Settings = styled.div`
  position: absolute;
`;

const WrapUser = styled.div`
  display: flex;
  column-gap: 32px;
`;

const StyledSvgChevron = styled(SvgChevronRight)<{ $isPopUp?: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isPopUp }) =>
    $isPopUp &&
    css`
      transform: rotate(-90deg);
    `}
`;
