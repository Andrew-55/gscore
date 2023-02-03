import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { ThemeProvider } from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles/constants/typography";

type Theme = {
  background_color: string;
  color: string;
  color_hover: string;
  background_color_hover: string;
  outline: string;
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  isDisabled?: boolean;
  isActive?: boolean;
  icon?: React.ReactElement;
  theme?: Theme;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  icon,
  theme,
  ...props
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Root disabled={isDisabled} className={className} {...props}>
        {text}
        {!!icon && <StyledIcon>{icon}</StyledIcon>}
      </Root>
    </ThemeProvider>
  );
};

const Root = styled.button`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px}
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  padding: 20px 24px;
  border-radius: 4px;
  text-align: center;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.background_color};
  stroke: ${(props) => props.theme.color};
  fill: none;
  &:hover {
    color: ${(props) => props.theme.color_hover};
    background-color: ${(props) => props.theme.background_color_hover};
  }
  &:active {
    background-color: ${(props) => props.theme.background_color};
  }
  &:focus {
    background-color: ${(props) => props.theme.background_color};
    outline: ${(props) => props.theme.outline};
  }
  &:disabled {
    background-color: ${(props) => props.theme.background_color};
    opacity: 0.6;
  }
`;

const StyledIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
