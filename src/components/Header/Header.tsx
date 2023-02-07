import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgChevronRight, SvgLogoIcon, SvgTextLogo } from "@/assets/svg";
import { ButtonIcon } from "@/ui";

interface Props {
  username?: string;
}

export const Header: FC<Props> = ({ username }) => {
  const [isPopUp, setPopUp] = useState(false);

  return (
    <Root>
      <Logo>
        <SvgLogoIcon />
        <SvgTextLogo />
      </Logo>

      {username && (
        <WrapUser>
          <Link href="/subscriptions">My subscriptions</Link>
          <WrapUser>
            <ButtonIcon
              text={username}
              icon={<StyledSvgChevron $isPopUp={isPopUp} strokeWidth={3} />}
              onClick={() => setPopUp((prev) => !prev)}
            />

            {isPopUp && (
              <StyledPopUp>
                <div>Settings</div>
                <div>Logout</div>
              </StyledPopUp>
            )}
          </WrapUser>
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

const StyledPopUp = styled.div`
  position: absolute;
  background-color: ${COLORS.color_701};
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  top: 94px;
  right: 86px;
  z-index: ${Z_INDEX.headerPopUp};
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
