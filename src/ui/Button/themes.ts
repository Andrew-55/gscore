import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

import { COLORS } from "@/assets/styles/colors";

export const ThemeButton: DefaultTheme = {
  palette: {
    primary: css`
      color: ${COLORS.color_100};
      background-color: ${COLORS.primary_01};
      &:hover {
        background-color: ${COLORS.red_400};
        box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
      }
    `,
  },
};

export const THEMES = {
  primary: css`
    color: ${COLORS.color_100};
    background-color: ${COLORS.primary_01};
    &:hover {
      background-color: ${COLORS.red_400};
      box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
    }
    &:focus {
      background-color: ${COLORS.primary_01};
      box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
      outline: 4px solid rgba(252, 88, 66, 0.3);
    }
    &:active {
      background-color: ${COLORS.primary_01};
      box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
    }
  `,
  primary_active: css`
    background-color: ${COLORS.primary_01};
    box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  `,
};

export const primary = css`
  color: ${COLORS.color_100};
  background-color: ${COLORS.primary_01};
`;
