import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "@/assets/styles";
import { SvgCheck } from "@/assets/svg";

interface Props {
  className?: string;
  isDisabled?: boolean;
  isChecked?: boolean;
}

export const Checkbox: FC<Props> = ({
  className,
  isDisabled,
  isChecked = false,
  ...props
}) => {
  const [checked, setChecked] = useState(isChecked);

  return (
    <Root className={className} {...props}>
      <CheckboxInput
        type="checkbox"
        className={className}
        disabled={isDisabled}
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        {...props}
      ></CheckboxInput>
      <CheckboxDisplay>
        {checked && <StyledSvgCheck strokeWidth={3} />}
      </CheckboxDisplay>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
`;

const CheckboxDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;

const CheckboxInput = styled.input`
  margin: 0;
  position: absolute;
  box-sizing: border-box;
  appearance: none;
  cursor: pointer;

  & + ${CheckboxDisplay} {
    box-shadow: 0px 2px 6px ${COLORS.checkbox_box_shadow};
    background-color: ${COLORS.color_100};
    border: 1px solid ${COLORS.color_400};
  }

  &:hover:not(:disabled) + ${CheckboxDisplay} {
    background-color: ${COLORS.color_400};
  }

  &:focus:not(:checked) + ${CheckboxDisplay} {
    box-shadow: 0 0 0 4px ${COLORS.checkbox_focus_box_shadow};
  }

  &:checked + ${CheckboxDisplay} {
    background-color: ${COLORS.primary_01};
    border: 1px solid ${COLORS.primary_01};
  }

  &:checked:focus + ${CheckboxDisplay} {
    box-shadow: 0 0 0 4px ${COLORS.checkbox_focus_checked_box_shadow};
  }
  &:checked:hover:not(:disabled) + ${CheckboxDisplay} {
    background-color: ${COLORS.red_400};
    border: 1px solid ${COLORS.red_400};
  }

  &:disabled {
    pointer-events: none;
  }
  &:disabled + ${CheckboxDisplay} {
    opacity: 0.5;
  }
`;

const StyledSvgCheck = styled(SvgCheck)`
  stroke: ${COLORS.color_100};
  width: 50%;
  height: 35.7%;
`;
