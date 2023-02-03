import React, { ButtonHTMLAttributes, FC } from "react";
import styled, { css } from "styled-components";

import { ROTATE, COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgLoadingRing } from "@/assets/svg";

import { THEMES } from "./themes";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text?: string;
  isDisabled?: boolean;
  variant: keyof typeof THEMES;
  isLoading?: boolean;
}

export const Button: FC<Props> = ({
  isDisabled,
  className,
  text,
  variant,
  isLoading,
  ...props
}) => {
  return (
    <Root
      disabled={isDisabled}
      className={className}
      $variant={variant}
      $isLoading={isLoading}
      $isDisabled={isDisabled}
      {...props}
    >
      {isLoading ? <StyledLoadingRing width={16} height={16} /> : text}
    </Root>
  );
};

const Root = styled.button<{
  $variant: keyof typeof THEMES;
  $isLoading?: boolean;
  $isDisabled?: boolean;
}>`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px};
  box-shadow: 0px 10px 28px ${COLORS.btn_box_shadow};
  padding: 20px 10px;
  max-width: 105px;
  width: 100%;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${({ $variant }) => THEMES[$variant]}
  ${({ $isLoading }) =>
    $isLoading &&
    css`
      padding: 20px 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      pointer-events: none;
    `}
  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.6;
      pointer-events: none;
    `}
`;

const StyledLoadingRing = styled(SvgLoadingRing)`
  animation: ${ROTATE} 1s infinite linear;
`;
