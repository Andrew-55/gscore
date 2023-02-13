import copy from "copy-to-clipboard";
import React, { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgCopy } from "@/assets/svg";

import { ButtonIcon } from "../ButtonIcon";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  isDisabled?: boolean;
  isCopy?: boolean;
  value?: string;
}

export const InputLabel = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, isDisabled, isCopy, value, ...props }, ref) => {
    const isValue = !!value;

    return (
      <Root>
        {label}
        <StyledInput
          ref={ref}
          className={className}
          disabled={isDisabled}
          value={value}
          $isCopy={isCopy}
          {...props}
        />

        {isCopy && isValue && (
          <StylecButtonIcon icon={<SvgCopy onClick={() => copy(value)} />} />
        )}
      </Root>
    );
  }
);

InputLabel.displayName = "InputLabel";

const Root = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 12px;
  color: ${COLORS.color_500};
  ${TYPOGRAPHY.THICCCBOI_Bold_16px}
`;

const StyledInput = styled.input<{ $isCopy?: boolean }>`
  ${TYPOGRAPHY.THICCCBOI_Regular_16px}
  color: ${COLORS.color_500};
  width: 100%;
  padding: 24px 25px;
  border-radius: 6px;
  background-color: ${COLORS.color_700};
  box-shadow: 0px 2px 12px ${COLORS.input_box_shadow};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ $isCopy }) =>
    $isCopy &&
    css`
      padding-right: 50px;
    `}
`;

const StylecButtonIcon = styled(ButtonIcon)`
  position: absolute;
  right: 23px;
  bottom: 22px;
`;
