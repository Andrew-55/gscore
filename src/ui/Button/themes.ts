import { COLORS } from "@/assets/styles/constants/colors";

export const primary = {
  background_color: COLORS.primary_01,
  color: COLORS.color_100,
  background_color_hover: COLORS.red_400,
  outline: "4px solid rgba(252, 88, 66, 0.3)",
};

export const THEMES = {
  primary: {
    background_color: COLORS.primary_01,
    color: COLORS.color_100,
    color_hover: COLORS.color_100,
    background_color_hover: COLORS.red_400,
    outline: "4px solid rgba(252, 88, 66, 0.3)",
  },
  secondary: {
    background_color: COLORS.color_100,
    background_color_hover: COLORS.color_200,
    color: COLORS.primary_01,
    color_hover: COLORS.red_400,
    outline: "4px solid rgba(255, 255, 255, 0.3)",
  },
};
