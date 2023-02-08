import Link from "next/link";
import React, { FC, useState } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgChevronRight, SvgLogoIcon, SvgTextLogo } from "@/assets/svg";
import { ButtonIcon } from "@/ui";

import { HeaderDropdownMenu } from "../HeaderDropdownMenu";

interface Props {
  username?: string;
}

export const Header: FC<Props> = ({ username }) => {
  const [isDropdownMenuVisible, setIsDropdownMenuVisible] = useState(false);

  const handleCloseDropdownMenu = () => {
    setIsDropdownMenuVisible((prev) => !prev);
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

const StyledSvgChevron = styled(SvgChevronRight)`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
`;
