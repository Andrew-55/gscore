import { KeyObject } from "crypto";

import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles/constants/typography";

import { THEMES } from "./themes";

interface IProps {
  variant: keyof typeof THEMES;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  isDisabled?: boolean;
  variant: keyof typeof THEMES;
  isLoading?: boolean;
  icon?: React.ReactElement;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  icon,
  variant,
  ...props
}) => {
  return (
    <Root
      disabled={isDisabled}
      className={className}
      variant={variant}
      {...props}
    >
      {text}
      {!!icon && icon}
    </Root>
  );
};

const Root = styled.button<IProps>`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px};
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
  ${(props) => THEMES[props.variant]}
`;
