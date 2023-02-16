import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgSettings, SvgLogout, SvgChevronRight } from "@/assets/svg";
import { ButtonIcon } from "@/ui";
import { useOnclickOutside } from "@/utils/hooks";

interface Props {
  onClose: () => void;
  username: string;
}

export const HeaderDropdownMenu: FC<Props> = ({ username, onClose }) => {
  const router = useRouter();
  const ref = React.useRef<HTMLDivElement>(null);

  useOnclickOutside(ref, onClose);

  const handleClickLogout = () => {
    router.push("/login");
  };

  return (
    <div ref={ref}>
      <ButtonIcon
        text={username}
        icon={<StyledSvgChevron strokeWidth={3} />}
        onClick={onClose}
      />
      <DropdownMenu>
        <StyledLink href="/settings">
          <SvgSettings /> Settings
        </StyledLink>
        <StyledButtonIcon
          text="Logout"
          icon={<SvgLogout />}
          onClick={handleClickLogout}
        />
      </DropdownMenu>
    </div>
  );
};

const DropdownMenu = styled.div`
  position: absolute;
  top: 94px;
  right: 86px;
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

const StyledSvgChevron = styled(SvgChevronRight)`
  transform: rotate(-90deg);
  height: 14px;
  width: 7px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  flex-direction: row-reverse;
  justify-content: start;
`;
