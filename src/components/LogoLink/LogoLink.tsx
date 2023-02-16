import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";

import { Logo } from "../Logo";

export const LogoLink = () => {
  return (
    <Root href="/">
      <Logo />
    </Root>
  );
};

const Root = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 10px;

  & svg {
    fill: ${COLORS.color_100};
    transition: all 0.3s ease-out;
  }

  &:hover svg,
  &:focus svg {
    fill: ${COLORS.primary_01};
  }

  &:active svg {
    fill: ${COLORS.red_400};
  }
`;
