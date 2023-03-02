import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgMenuLine } from "@/assets/svg";
import { LogoLink, MobileBurgerMenu } from "@/components";
import { ButtonIcon } from "@/ui";

interface Props {
  username?: string;
  onClickLogout: () => void;
}

export const HeaderMobile: FC<Props> = ({ username, onClickLogout }) => {
  const [isMobileBurgerMenuVisible, setIsMobileBurgerMenuVisible] =
    useState(false);
  const menuRef = React.useRef(null);
  const shadowRef = React.useRef(null);

  const handleCloseBurgerMenu = () => {
    setIsMobileBurgerMenuVisible(false);
  };

  return (
    <Root>
      <LogoLink />

      {username && (
        <ButtonIcon
          icon={<SvgMenuLine />}
          onClick={() => setIsMobileBurgerMenuVisible((prev) => !prev)}
        />
      )}

      <CSSTransition
        nodeRef={shadowRef}
        in={isMobileBurgerMenuVisible}
        classNames="mobile__shadow"
        timeout={500}
        unmountOnExit
      >
        <Shadow ref={shadowRef} />
      </CSSTransition>

      <CSSTransition
        nodeRef={menuRef}
        in={isMobileBurgerMenuVisible}
        classNames="mobile__burger"
        timeout={500}
        unmountOnExit
      >
        <WrapMobileBurgerMenu ref={menuRef}>
          <MobileBurgerMenu
            username={username}
            onClose={handleCloseBurgerMenu}
            onClickLogout={onClickLogout}
          />
        </WrapMobileBurgerMenu>
      </CSSTransition>
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  width: 100%;
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding: 28px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Shadow = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.black1};
  z-index: ${Z_INDEX.headerPopUp};
`;

const WrapMobileBurgerMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${Z_INDEX.headerPopUp};
`;
