import React from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY, VISUALLY_HIDDEN } from "@/assets/styles";
import { SvgCheck } from "@/assets/svg";

interface Props {
  className?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
  text?: string;
  value: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, text, isDisabled, isChecked, value, ...props }, ref) => {
    return (
      <Root>
        <Input
          ref={ref}
          type="checkbox"
          className={className}
          disabled={isDisabled}
          checked={isChecked}
          value={value}
          {...props}
        />
        <CheckboxDisplay>
          <StyledSvgCheck strokeWidth={3} />
        </CheckboxDisplay>
        {!!text && <TextLabel>{text}</TextLabel>}
      </Root>
    );
  }
);

Checkbox.displayName = "Checkbox";
export { Checkbox };

const Root = styled.label`
  cursor: pointer;
  position: relative;
  ${TYPOGRAPHY.THICCCBOI_Medium_18px};
  color: ${COLORS.color_100};
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  justify-content: center;
`;

const TextLabel = styled.span`
  margin-left: 14px;
`;

const CheckboxDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 7px;
`;

const StyledSvgCheck = styled(SvgCheck)`
  width: 16px;
  height: 12px;
  opacity: 0;
`;

const Input = styled.input`
  ${VISUALLY_HIDDEN};
  margin-left: 35px;

  & + ${CheckboxDisplay} {
    box-shadow: 0px 2px 6px ${COLORS.checkbox_box_shadow};
    background-color: ${COLORS.color_100};
    border: 1px solid ${COLORS.color_400};
  }

  &:hover:not(:disabled) ${CheckboxDisplay} {
    background-color: ${COLORS.color_400};
  }

  &:focus:not(:checked) + ${CheckboxDisplay} {
    box-shadow: 0 0 0 4px ${COLORS.checkbox_focus_box_shadow};
  }

  &:checked + ${CheckboxDisplay} {
    background-color: ${COLORS.primary_01};
    border: 1px solid ${COLORS.primary_01};
  }

  &:checked + ${CheckboxDisplay} > ${StyledSvgCheck} {
    opacity: 1;
  }

  &:checked:focus + ${CheckboxDisplay} {
    box-shadow: 0 0 0 4px ${COLORS.checkbox_focus_checked_box_shadow};
  }

  &:checked:hover:not(:disabled) + ${CheckboxDisplay} {
    background-color: ${COLORS.red_400};
    border: 1px solid ${COLORS.red_400};
  }

  &:disabled + ${CheckboxDisplay} {
    pointer-events: none;
    opacity: 0.5;
  }
`;
