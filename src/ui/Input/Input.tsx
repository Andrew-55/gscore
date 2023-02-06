import React, { FC, InputHTMLAttributes } from "react";
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

export const Input: FC<Props> = ({
  className,
  isDisabled,
  isSuccess,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <div>
      <Root>
        <StyledInput
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
};

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
      padding-right: calc(23px + 1.5em);
    `}

  ${({ $isError }) =>
    $isError &&
    css`
      border: 1px solid ${COLORS.red_300};
      padding-right: calc(23px + 1.5em);
    `}
`;

const StyledSvgCheck = styled(SvgCheck)`
  position: absolute;
  width: auto;
  height: 25%;
  top: 37.5%;
  right: 22px;
`;

const StyledSvgClose = styled(SvgClose)`
  position: absolute;
  width: auto;
  height: 27%;
  top: 36.5%;
  right: 22px;
`;

const ErrorMessage = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_14px}
  color: ${COLORS.red_300};
  margin-top: 2px;
`;
