import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  text: string;
}

export const ButtonTab: FC<Props> = ({ className, text, ...props }) => {
  return (
    <Root className={className} {...props}>
      {text}
    </Root>
  );
};

const Root = styled.button`
  text-align: center;
  white-space: nowrap;
  border-bottom: 2px solid ${COLORS.without_color};
`;
