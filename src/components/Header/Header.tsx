import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgChevronRight, SvgLogoIcon, SvgTextLogo } from "@/assets/svg";
import { ButtonIcon } from "@/ui";

import { HeaderDropdownMenu } from "../HeaderDropdownMenu";

interface Props {
  username?: string;
}

export const Header: FC<Props> = ({ username }) => {
  const [isDropdownMenu, setIsDropdownMenu] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleCloseDropdownMenu = () => {
    setIsDropdownMenu((prev) => !prev);
  };

  return (
    <Root>
      <Logo>
        <SvgLogoIcon />
        <SvgTextLogo />
      </Logo>

      {username && (
        <WrapUser>
          <Link href="/subscriptions">My subscriptions</Link>
          <div ref={ref}>
            <ButtonIcon
              text={username}
              icon={
                <StyledSvgChevron
                  $isDropdownMenu={isDropdownMenu}
                  strokeWidth={3}
                />
              }
              onClick={() => setIsDropdownMenu((prev) => !prev)}
            />

            {isDropdownMenu && (
              <HeaderDropdownMenu
                onClose={handleCloseDropdownMenu}
                refOutOf={ref}
              />
            )}
          </div>
        </WrapUser>
      )}
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  width: 100%;
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  padding: 32px 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const WrapUser = styled.div`
  display: flex;
  column-gap: 32px;
`;

const StyledSvgChevron = styled(SvgChevronRight)<{ $isDropdownMenu?: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isDropdownMenu }) =>
    $isDropdownMenu &&
    css`
      transform: rotate(-90deg);
    `}
`;
