import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import { SvgSettings, SvgLogout } from "@/assets/svg";
import { useOnclickOutsideWithExtraRef } from "@/utils/hooks";

interface Props {
  onClose: () => void;
  refExtra: React.RefObject<HTMLDivElement>;
}

export const HeaderPopUp: FC<Props> = ({ onClose, refExtra }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useOnclickOutsideWithExtraRef(ref, refExtra, onClose);

  return (
    <Root ref={ref}>
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
    </Root>
  );
};

const Root = styled.div`
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
