import React, { FC } from "react";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";
import { SvgCheck } from "@/assets/svg";

interface Props {
  text: string;
  colorIcon: string;
}

export const ListItem: FC<Props> = ({ text, colorIcon }) => {
  return (
    <Root>
      <WrapIcon>
        <SvgCheck stroke={colorIcon} width={14} height={10} strokeWidth={3.5} />
      </WrapIcon>
      {text}
    </Root>
  );
};

const Root = styled.li`
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  justify-items: start;
  column-gap: 14px;
`;

const WrapIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 100%;
  background-color: ${COLORS.color_100};
  display: flex;
  justify-content: center;
  align-items: center;
`;
