import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "@/assets/styles";

export type StatusType = keyof typeof THEMES;

interface Props {
  status: string;
}

export const THEMES: Record<string, string> = {
  ACTIVE: COLORS.gren_300,
  HOLD: COLORS.orange_300,
  INACTIVE: COLORS.red_300,
};

export const Status: FC<Props> = ({ status }) => {
  const color = THEMES[status];

  return <Root $color={color}>{status.toLowerCase()}</Root>;
};

const Root = styled.span<{ $color?: string }>`
  text-transform: capitalize;
  color: ${({ $color }) => $color};
`;
