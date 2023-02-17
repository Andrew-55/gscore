import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";

interface Props {
  tabs: { title: string; url: string }[];
}

export const Tabs: FC<Props> = ({ tabs }) => {
  const router = useRouter();

  const activeIndex = tabs.findIndex((tab) => tab.url === router.pathname);

  return (
    <Root>
      {tabs.map((item, index) => (
        <li key={index}>
          <StyledLink href={item.url}>
            <span>{item.title}</span>
            <Line $isRed={activeIndex >= index} />
          </StyledLink>
        </li>
      ))}
    </Root>
  );
};

const Root = styled.ul`
  color: ${COLORS.color_100};
  margin-bottom: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  column-gap: 16px;
  padding-bottom: 20px;
  overflow-x: auto;
`;

const StyledLink = styled(Link)`
  display: block;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 195px;
  color: ${COLORS.color_100};
  text-align: start;
  ${TYPOGRAPHY.THICCCBOI_Semi_Bold_20px}

  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    transition: all 0.3s ease-out;

    & > div {
      background-color: ${COLORS.primary_01};
      opacity: 0.7;
      transition: all 0.3s ease-out;
    }
  }

  &:active {
    color: ${COLORS.red_400};
    & > div {
      background-color: ${COLORS.red_400};
      transition: all 0.3s ease-out;
    }
  }

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
