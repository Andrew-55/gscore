import styled, { css } from "styled-components";

import { COLORS } from "@/assets/styles/constants/colors";

export const THEMES = {
  primary: css`
    color: ${COLORS.color_100};
    background-color: ${COLORS.primary_01};
    stroke: ${COLORS.color_100};
    &:hover {
      background-color: ${COLORS.red_400};
    }
    &:active {
      background-color: ${COLORS.primary_01};
    }
    &:focus {
      box-shadow: 0 0 0 4px ${COLORS.btn_border_primary};
    }
  `,
  secondary: css`
    color: ${COLORS.primary_01};
    background-color: ${COLORS.color_100};
    stroke: ${COLORS.primary_01};
    &:hover {
      color: ${COLORS.red_400};
      background-color: ${COLORS.color_200};
    }
    &:active {
      color: ${COLORS.primary_01};
    }
    &:focus {
      box-shadow: 0 0 0 4px ${COLORS.btn_border_secondary};
    }
  `,
};
