import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgChevronRight, SvgLogoIcon, SvgTextLogo } from "@/assets/svg";
import { ButtonIcon } from "@/ui";

import { HeaderPopUp } from "../HeaderPopUp";

interface Props {
  username?: string;
}

export const Header: FC<Props> = ({ username }) => {
  const [isPopUp, setIsPopUp] = useState(false);

  const ref = React.useRef<HTMLDivElement>(null);

  const handleClosePopUp = () => {
    setIsPopUp((prev) => !prev);
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
          <WrapUser ref={ref}>
            <ButtonIcon
              text={username}
              icon={<StyledSvgChevron $isPopUp={isPopUp} strokeWidth={3} />}
              onClick={() => setIsPopUp((prev) => !prev)}
            />

            {isPopUp && (
              <HeaderPopUp onClose={handleClosePopUp} refExtra={ref} />
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
