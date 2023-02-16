import Link from "next/link";
import React, { FC, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

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
  const nodeRef = React.useRef(null);

  const handleCloseDropdownMenu = () => {
    setIsDropdownMenuVisible((prev) => !prev);
  };

  return (
    <Root>
      <LogoLink />

      {username && (
        <WrapUser>
          <StyledLink href="/subscriptions">My subscriptions</StyledLink>

          <CSSTransition
            nodeRef={nodeRef}
            in={isDropdownMenuVisible}
            classNames="dropmenu"
            timeout={50}
          >
            <div ref={nodeRef}>
              {isDropdownMenuVisible ? (
                <HeaderDropdownMenu
                  onClose={handleCloseDropdownMenu}
                  username={username}
                />
              ) : (
                <ButtonIcon
                  text={username}
                  icon={<StyledSvgChevron strokeWidth={3} />}
                  onClick={handleCloseDropdownMenu}
                />
              )}
            </div>
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

const StyledSvgChevron = styled(SvgChevronRight)`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
`;
