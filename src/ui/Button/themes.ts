import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components";

import { COLORS } from "@/assets/styles/constants/colors";

export const THEMES = {
  primary: css`
    color: ${COLORS.color_100};
    background-color: ${COLORS.primary_01};
    &:hover {
      background-color: ${COLORS.red_400};
    }
    &:active {
      background-color: ${COLORS.primary_01};
    }
    &:focus {
      background-color: ${COLORS.primary_01};
      outline: 4px solid rgba(252, 88, 66, 0.3);
    }
    &:disabled {
      background-color: ${COLORS.primary_01};
      opacity: 0.6;
    }
  `,
  primary_active: css`
    color: ${COLORS.color_100};
    background-color: ${COLORS.primary_01};
  `,
  primary_loading: css`
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${COLORS.primary_01};
    fill: none;
    stroke: ${COLORS.color_100};
  `,

  secondary: css`
    color: ${COLORS.primary_01};
    background-color: ${COLORS.color_100};
    &:hover {
      color: ${COLORS.red_400};
      background-color: ${COLORS.color_200};
    }
    &:active {
      color: ${COLORS.primary_01};
    }
    &:focus {
      outline: 4px solid rgba(255, 255, 255, 0.3);
    }
    &:disabled {
      color: ${COLORS.primary_01};
      opacity: 0.6;
    }
  `,
  secondary_active: css`
    color: ${COLORS.primary_01};
    background-color: ${COLORS.color_100};
  `,
  secondary_loading: css`
    display: flex;
    justify-content: center;
    align-content: center;
    background-color: ${COLORS.color_100};
    fill: none;
    stroke: ${COLORS.primary_01};
  `,
};
