import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { ThemeProvider } from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles/constants/typography";
import { SvgLoadingRing } from "@/assets/svg/SvgLoadingRing/SvgLoadingRing";

import { THEMES } from "./themes";

export enum VARIANT {
  PRIMARY,
  SECONDARY,
}

interface IProps {
  variant?: VARIANT;
  isActive?: boolean;
  isLoading?: boolean;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  isDisabled?: boolean;
  variant?: VARIANT;
  isActive?: boolean;
  isLoading?: boolean;
  icon?: React.ReactElement;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <Root
      disabled={isDisabled}
      isLoading={isLoading}
      className={className}
      {...props}
    >
      {text}
      {isLoading && icon}
    </Root>
  );
};

const Root = styled.button<IProps>`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px}
  box-shadow: 0px 10px 28px rgba(252, 88, 66, 0.2);
  padding: 20px 24px;
  border-radius: 4px;
  text-align: center;
  justify-content: center;
  align-items: center;
  border: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) => {
    if (props.variant === VARIANT.PRIMARY && props.isActive) {
      return THEMES.primary_active;
    }
    if (props.variant === VARIANT.PRIMARY && props.isLoading) {
      return THEMES.primary_loading;
    }
    if (props.variant === VARIANT.PRIMARY && !props.isLoading) {
      return THEMES.primary;
    }
    if (props.variant === VARIANT.SECONDARY && props.isActive) {
      return THEMES.secondary_active;
    }
    if (props.variant === VARIANT.SECONDARY && props.isLoading) {
      return THEMES.secondary_loading;
    }
    if (props.variant === VARIANT.SECONDARY && !props.isLoading) {
      return THEMES.secondary;
    }
  }}
`;
