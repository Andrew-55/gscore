import Link from "next/link";
import React, { FC } from "react";
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
  const ref = React.useRef<HTMLDivElement>(null);

  useOnclickOutside(ref, onClose);

  return (
    <div ref={ref}>
      <ButtonIcon
        text={username}
        icon={<StyledSvgChevron strokeWidth={3} />}
        onClick={onClose}
      />
      <DropdownMenu>
        <Link href="/settings">
          <Wrap>
            <SvgSettings /> Settings
          </Wrap>
        </Link>
        <Link href="/login">
          <Wrap>
            <SvgLogout /> Logout
          </Wrap>
        </Link>
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

const Wrap = styled.div`
  display: flex;
  column-gap: 12px;
`;

const StyledSvgChevron = styled(SvgChevronRight)`
  transform: rotate(-90deg);
  height: 14px;
  width: 7px;
`;
