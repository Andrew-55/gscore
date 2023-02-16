import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import {
  SvgChevronRight,
  SvgClose,
  SvgLogout,
  SvgSettings,
} from "@/assets/svg";
import { LogoLink } from "@/components/LogoLink";
import { ButtonIcon } from "@/ui";
import { useOnclickOutside } from "@/utils/hooks";

interface Props {
  username?: string;
  onClose: () => void;
}

export const MobileBurgerMenu: FC<Props> = ({ username, onClose }) => {
  const router = useRouter();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const nodeRef = React.useRef(null);

  useOnclickOutside(ref, onClose);

  const handleClickLogout = () => {
    router.push("/login");
  };

  return (
    <Root ref={ref}>
      <WrapLogo>
        <ButtonIcon icon={<SvgClose />} onClick={onClose} />
        <LogoLink />
      </WrapLogo>

      <StyledLink href="/subscriptions">My subscriptions</StyledLink>

      <Settings>
        <StyledButtonIcon
          text={username}
          icon={<StyledSvgChevron $isOn={isSettingsVisible} strokeWidth={3} />}
          onClick={() => setIsSettingsVisible((prev) => !prev)}
        />

        <CSSTransition
          nodeRef={nodeRef}
          in={isSettingsVisible}
          classNames="burger__menu"
          timeout={500}
          unmountOnExit
        >
          <SettingsContent ref={nodeRef}>
            <StyledLinkMenu href="/settings">
              <SvgSettings width={20} height={20} />
              Settings
            </StyledLinkMenu>
            <StyledButtonIconMenu
              text="Logout"
              icon={<SvgLogout />}
              onClick={handleClickLogout}
            />
          </SettingsContent>
        </CSSTransition>
      </Settings>
    </Root>
  );
};

const Root = styled.div`
  position: absolute;
  left: auto;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  padding: 28px 24px;
  background-color: ${COLORS.color_701};
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_16px}
`;

const WrapLogo = styled.div`
  display: flex;
  column-gap: 32px;
  margin-bottom: 48px;
`;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
  }
`;

const StyledLinkMenu = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 12px;
  stroke: ${COLORS.color_500};
  color: ${COLORS.color_500};

  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    stroke: ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
    stroke: ${COLORS.red_400};
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 100%;
`;

const StyledButtonIconMenu = styled(ButtonIcon)`
  stroke: ${COLORS.color_500};
  color: ${COLORS.color_500};
  flex-direction: row-reverse;
  justify-content: start;
`;

const Settings = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${COLORS.color_700};
  border-bottom: 1px solid ${COLORS.color_700};
`;

const SettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 28px;
`;

const StyledSvgChevron = styled(SvgChevronRight)<{ $isOn?: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isOn }) =>
    $isOn &&
    css`
      transform: rotate(-90deg);
    `}
`;
