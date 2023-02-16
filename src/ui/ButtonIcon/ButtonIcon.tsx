import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactElement;
  isDisabled?: boolean;
  text?: string;
}

export const ButtonIcon: FC<Props> = ({
  isDisabled,
  className,
  icon,
  text,
  ...props
}) => {
  return (
    <Root disabled={isDisabled} className={className} {...props}>
      {text}
      {icon}
    </Root>
  );
};

const Root = styled.button`
  color: ${COLORS.color_100};
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 12px;
  stroke: ${COLORS.color_100};

  &:hover,
  &:focus {
    color: ${COLORS.primary_01};
    stroke: ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
    stroke: ${COLORS.red_400};
  }
`;
