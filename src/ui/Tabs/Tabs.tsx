import Link from "next/link";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { ButtonTab } from "@/ui";

interface Props {
  activeIndex: number;
  tabs?: { title: string; url: string }[];
}

const tabs = [
  { title: "Create account", url: "/create-account" },
  { title: "Log in", url: "/login" },
  { title: "Checkout", url: "/checkout" },
];

export const Tabs: FC<Props> = ({ activeIndex }) => {
  return (
    <Root>
      {tabs.map((item, index) => (
        <li key={index}>
          <StyledLink href={item.url}>{item.title}</StyledLink>
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

const StyledLink = styled(Link)`
  display: block;
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
