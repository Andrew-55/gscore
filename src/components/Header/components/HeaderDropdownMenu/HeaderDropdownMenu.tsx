import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgSettings, SvgLogout } from "@/assets/svg";
import { ButtonIcon } from "@/ui";

type Props = {
  onClickLogout: () => void;
};

export const HeaderDropdownMenu: FC<Props> = ({ onClickLogout }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <DropdownMenu ref={ref}>
      <StyledLink href="/settings">
        <SvgSettings /> Settings
      </StyledLink>
      <StyledButtonIcon
        text="Logout"
        icon={<SvgLogout />}
        onClick={onClickLogout}
      />
    </DropdownMenu>
  );
};

const DropdownMenu = styled.div`
  position: relative;
  min-width: 188px;
  padding: 28px 24px;
  background-color: ${COLORS.color_701};
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 34px;
  z-index: ${Z_INDEX.headerPopUp};
`;

const StyledLink = styled(Link)`
  display: flex;
  column-gap: 12px;
  stroke: ${COLORS.color_100};

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
  flex-direction: row-reverse;
  justify-content: start;
`;
