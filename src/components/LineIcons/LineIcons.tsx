import styled from "styled-components";

import { COLORS, TYPOGRAPHY, TRANSFORM } from "@/assets/styles";
import {
  SvgAdd,
  SvgArrowExternalRight,
  SvgArrowRight,
  SvgCheck,
  SvgChevronRight,
  SvgClose,
  SvgEmail,
  SvgLess,
  SvgLoadingRing,
  SvgMark,
  SvgPassword,
  SvgPhone,
  SvgSearch,
  SvgWebIcon,
} from "@/assets/svg";

export const LineIcons = () => {
  return (
    <Root>
      <Title>Line Icons</Title>
      <WrapIcon>
        <SvgArrowRight />
        <SvgArrowRight transform={TRANSFORM.mirror_left} />
        <SvgArrowExternalRight />
        <SvgArrowExternalRight transform={TRANSFORM.mirror_left} />
        <SvgChevronRight transform={TRANSFORM.mirror_left} />
        <SvgChevronRight />
        <SvgChevronRight
          width={10}
          height={16}
          transform={TRANSFORM.rotate90deg}
        />
        <SvgClose />
        <SvgAdd />
        <SvgLess />
        <SvgSearch />
        <SvgPassword />
        <SvgEmail />
        <SvgPhone />
        <SvgMark />
        <SvgWebIcon />
        <SvgCheck />
        <SvgLoadingRing />
      </WrapIcon>
    </Root>
  );
};

const Root = styled.div`
  padding: 20px;
  background-color: ${COLORS.color_800};
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;

const WrapIcon = styled.div`
  display: flex;
  column-gap: 40px;
  align-items: center;
  stroke: ${COLORS.color_100};
`;
