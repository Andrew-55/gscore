import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { ThemeProvider } from "styled-components";

import { COLORS } from "@/assets/styles/colors";
import { TYPOGRAPHY } from "@/assets/styles/typography";

import { THEMES } from "./themes";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}

interface IProps {
  variant?: VARIANT;
  isActive?: boolean;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
  isDisabled?: boolean;
  variant?: VARIANT;
  isActive?: boolean;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  ...props
}) => {
  return (
    <Root disabled={isDisabled} className={className} {...props}>
      {text}
    </Root>
  );
};

const Root = styled.button<IProps>`
  cursor: pointer;
  ${TYPOGRAPHY.THICCCBOI_Bold_16px}
  padding: 20px 24px;
  border-radius: 4px;
  text-align: center;
  border: none;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) => {
    if (props.variant === VARIANT.PRIMARY && props.isActive) {
      return THEMES.primary_active;
    }
    if (props.variant === VARIANT.PRIMARY) {
      return THEMES.primary;
    }
  }}
`;
