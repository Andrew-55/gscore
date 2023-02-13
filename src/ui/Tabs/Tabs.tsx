import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { ButtonTab } from "@/ui";

interface Props {
  activeIndex: number;
  onClickTab: (index: number) => void;
  tabs: string[];
}

export const Tabs: FC<Props> = ({ activeIndex, onClickTab, tabs }) => {
  return (
    <Root>
      {tabs.map((item, index) => (
        <li key={index}>
          <StyledButtonTab text={item} onClick={() => onClickTab(index)} />
          <Line $isRed={activeIndex >= index} />
        </li>
      ))}
    </Root>
  );
};

const Root = styled.ul`
  color: ${COLORS.color_100};
  display: flex;
  column-gap: 16px;
  row-gap: 16px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const StyledButtonTab = styled(ButtonTab)`
  width: 195px;
  padding-bottom: 24px;
  color: ${COLORS.color_100};
  border: none;
  text-align: start;
  ${TYPOGRAPHY.THICCCBOI_Semi_Bold_20px}

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Semi_Bold_16px}
    width: 150px;
  }
`;

const Line = styled.div<{ $isRed: boolean }>`
  width: 100%;
  height: 8px;
  margin-top: -8px;
  border-radius: 4px;
  background-color: ${COLORS.color_700};

  ${({ $isRed }) =>
    $isRed &&
    css`
      background-color: ${COLORS.primary_01};
    `}
`;
