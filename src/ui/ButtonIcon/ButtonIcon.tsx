import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon: React.ReactElement;
  isDisabled?: boolean;
}

export const ButtonIcon: FC<Props> = ({
  isDisabled,
  className,
  icon,
  ...props
}) => {
  return (
    <Root disabled={isDisabled} className={className} {...props}>
      {icon}
    </Root>
  );
};

const Root = styled.button`
  background-color: initial;
  display: flex;
  align-items: center;
  justify-content: center;
`;
