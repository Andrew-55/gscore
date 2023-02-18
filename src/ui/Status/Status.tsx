import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "@/assets/styles";

export type StatusType = keyof typeof THEMES;

interface Props {
  status: string;
}

export const THEMES = {
  ACTIVE: css`
    color: ${COLORS.gren_300};
  `,
  HOLD: css`
    color: ${COLORS.orange_300};
  `,
  INACTIVE: css`
    color: ${COLORS.red_300};
  `,
};

export const Status: FC<Props> = ({ status }) => {
  const key = (Object.keys(THEMES) as (keyof typeof THEMES)[]).find(
    (key) => key.toString() === status
  );

  return <Root $status={key}>{status.toLowerCase()}</Root>;
};

const Root = styled.span<{ $status?: StatusType }>`
  text-transform: capitalize;
  ${({ $status }) => $status && THEMES[$status]};
`;
