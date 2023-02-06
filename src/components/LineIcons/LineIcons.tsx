import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
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
        <SvgArrowLeft />
        <SvgArrowExternalRight />
        <SvgArrowExternalLeft />
        <SvgChevronLeft />
        <SvgChevronRight />
        <SvgChevronDown />
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
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;

const WrapIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 40px;
  row-gap: 20px;
  align-items: center;
`;

const SvgArrowLeft = styled(SvgArrowRight)`
  transform: scale(-1, 1);
`;

const SvgArrowExternalLeft = styled(SvgArrowExternalRight)`
  transform: scale(-1, 1);
`;

const SvgChevronLeft = styled(SvgChevronRight)`
  transform: scale(-1, 1);
`;

const SvgChevronDown = styled(SvgChevronRight)`
  width: 10px;
  height: 16px;
  transform: rotate(90deg);
`;
