import Link from "next/link";
import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgChevronRight } from "@/assets/svg";
import { LogoLink } from "@/components";
import { ButtonIcon } from "@/ui";

import { HeaderDropdownMenu } from "../HeaderDropdownMenu";

interface Props {
  username?: string;
}

export const HeaderDesktop: FC<Props> = ({ username }) => {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);
  const [valueClick, setValueClick] = useState(true);
  const nodeRef = React.useRef(null);

  const handleCloseDropdownMenu = () => {
    setIsDropdownMenuVisible(false);
  };

  return (
    <Root>
      <LogoLink />

      {username && (
        <WrapUser>
          <StyledLink href="/subscriptions">My subscriptions</StyledLink>

          <ButtonIcon
            text={username}
            icon={<StyledSvgChevron $isOpening={valueClick} strokeWidth={3} />}
            onClick={() => setIsDropdownMenuVisible(valueClick)}
          />

          <CSSTransition
            nodeRef={nodeRef}
            in={isDropdownMenuVisible}
            classNames="header__drop__menu"
            timeout={500}
            unmountOnExit
            onEnter={() => setValueClick(false)}
            onExited={() => setValueClick(true)}
          >
            <WrapHeaderDropdownMenu ref={nodeRef}>
              <HeaderDropdownMenu
                onClose={handleCloseDropdownMenu}
                username={username}
              />
            </WrapHeaderDropdownMenu>
          </CSSTransition>
        </WrapUser>
      )}
    </Root>
  );
};

const Root = styled.header`
  position: relative;
  width: 100%;
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding: 32px 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLink = styled(Link)`
  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
  }
`;

const WrapUser = styled.div`
  display: flex;
  column-gap: 32px;
`;

const WrapHeaderDropdownMenu = styled.div`
  position: absolute;
  top: 94px;
  right: 86px;
`;

const StyledSvgChevron = styled(SvgChevronRight)<{ $isOpening: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isOpening }) =>
    !$isOpening &&
    css`
      transform: rotate(-90deg);
    `}
`;
