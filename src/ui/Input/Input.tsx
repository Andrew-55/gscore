import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgCheck, SvgClose } from "@/assets/svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    { className, isDisabled, isSuccess, isError, errorMessage, ...props },
    ref
  ) => {
    return (
      <div>
        <Root>
          <StyledInput
            ref={ref}
            className={className}
            disabled={isDisabled}
            $isSuccess={isSuccess}
            $isError={isError}
            {...props}
          />

          {isSuccess && <StyledSvgCheck stroke={COLORS.gren_300} />}

          {isError && <StyledSvgClose stroke={COLORS.red_300} />}
        </Root>
        {!!errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };

const Root = styled.div`
  position: relative;
  width: 100%;
  min-width: 100px;
`;

const StyledInput = styled.input<{ $isSuccess?: boolean; $isError?: boolean }>`
  ${TYPOGRAPHY.THICCCBOI_Regular_16px}
  color: ${COLORS.color_700};
  width: 100%;
  caret-color: ${COLORS.primary_01};
  padding: 24px 23px;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 6px;
  background-color: ${COLORS.color_100};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &::placeholder {
    color: ${COLORS.color_500};
  }

  &:disabled {
    border: 1px solid ${COLORS.color_300};
    opacity: 0.6;
    box-shadow: 0px 2px 12px ${COLORS.input_box_shadow_disabled};
  }

  ${({ $isSuccess }) =>
    $isSuccess &&
    css`
      border: 1px solid ${COLORS.gren_300};
      padding-right: 66px;
    `}

  ${({ $isError }) =>
    $isError &&
    css`
      border: 1px solid ${COLORS.red_300};
      padding-right: 64px;
    `}
`;

const StyledSvgCheck = styled(SvgCheck)`
  position: absolute;
  width: 20px;
  height: 14px;
  top: 50%;
  transform: translateY(-50%);
  right: 22px;
`;

const StyledSvgClose = styled(SvgClose)`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  transform: translateY(-50%);
  right: 22px;
`;

const ErrorMessage = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_14px}
  color: ${COLORS.red_300};
  margin-top: 2px;
`;
