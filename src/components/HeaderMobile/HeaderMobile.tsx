import React, { FC, useState } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgLogoIcon, SvgMenuLine, SvgTextLogo } from "@/assets/svg";
import { MobileBurgerMenu } from "@/components";
import { ButtonIcon } from "@/ui";

interface Props {
  username?: string;
}

export const HeaderMobile: FC<Props> = ({ username }) => {
  const [isMobileBurgerMenuVisible, setIsMobileBurgerMenuVisible] =
    useState(false);

  const handleCloseBurgerMenu = () => {
    setIsMobileBurgerMenuVisible((prev) => !prev);
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
          onClick={() => setIsMobileBurgerMenuVisible((prev) => !prev)}
        />
      )}

      {isMobileBurgerMenuVisible && (
        <MobileBurgerMenu username={username} onClose={handleCloseBurgerMenu} />
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
