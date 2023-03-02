import Link from "next/link";
import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgChevronRight } from "@/assets/svg";
import { LogoLink } from "@/components";
import { ButtonIcon } from "@/ui";
import { useOnclickOutside } from "@/utils/hooks";

import { HeaderDropdownMenu } from "../HeaderDropdownMenu";

interface Props {
  username?: string;
  onClickLogout: () => void;
}

export const HeaderDesktop: FC<Props> = ({ username, onClickLogout }) => {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);
  const nodeRef = React.useRef(null);
  const blockRef = React.useRef(null);

  useOnclickOutside(blockRef, () => setIsDropdownMenuVisible(false));

  return (
    <Root>
      <LogoLink />

      {username && (
        <WrapUser>
          <StyledLink href="/subscriptions">My subscriptions</StyledLink>

          <div ref={blockRef}>
            <ButtonIcon
              text={username}
              className="header__button"
              icon={
                <StyledSvgChevron
                  $isUp={isDropdownMenuVisible}
                  strokeWidth={3}
                />
              }
              onClick={() => setIsDropdownMenuVisible((prev) => !prev)}
            />

            <CSSTransition
              nodeRef={nodeRef}
              in={isDropdownMenuVisible}
              classNames="header__drop__menu"
              timeout={500}
              unmountOnExit
            >
              <WrapHeaderDropdownMenu ref={nodeRef}>
                <HeaderDropdownMenu onClickLogout={onClickLogout} />
              </WrapHeaderDropdownMenu>
            </CSSTransition>
          </div>
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

const StyledSvgChevron = styled(SvgChevronRight)<{ $isUp: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isUp }) =>
    $isUp &&
    css`
      transform: rotate(-90deg);
    `}
`;
