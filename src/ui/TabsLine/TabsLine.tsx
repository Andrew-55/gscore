import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { ButtonTab } from "@/ui";

interface Props {
  activeIndex: number;
  onClickTab: (index: number) => void;
  tabs: string[];
}

export const TabsLine: FC<Props> = ({ activeIndex, onClickTab, tabs }) => {
  return (
    <Root>
      <Line />
      {tabs.map((item, index) => (
        <li key={index}>
          <StyledButtonTab
            text={item}
            onClick={() => onClickTab(index)}
            $isActive={activeIndex === index}
          />
        </li>
      ))}
    </Root>
  );
};

const Root = styled.ul`
  position: relative;
  display: flex;
  min-width: fit-content;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border: 1px solid ${COLORS.color_700};
`;

const StyledButtonTab = styled(ButtonTab)<{ $isActive: boolean }>`
  position: relative;
  z-index: 2;
  color: ${COLORS.color_700};
  padding: 0 24px 12px 24px;
  ${TYPOGRAPHY.THICCCBOI_Bold_18px}

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_16px};
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      color: ${COLORS.primary_01};
      border-bottom: 2px solid ${COLORS.primary_01};
    `}
`;
