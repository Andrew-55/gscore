import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles/typography";

export default function UiKit() {
  return (
    <Main>
      <Inter78>Inter Bold 78px</Inter78>
      <Inter54>Inter Bold 54px</Inter54>
      <Inter24>Inter Semi Bold_24px</Inter24>
      <Inter18>Inter Medium 18px</Inter18>
      <Thicccboi54b>THICCCBOI Bold 54px</Thicccboi54b>
      <Thicccboi28b>THICCCBOI Bold 28px</Thicccboi28b>
      <Thicccboi16b>THICCCBOI Bold 16px</Thicccboi16b>
      <Thicccboi20sb>THICCCBOI Semi Bold_20px</Thicccboi20sb>
      <Thicccboi24m>THICCCBOI Medium 24px</Thicccboi24m>
      <Thicccboi20m>THICCCBOI Medium 20px</Thicccboi20m>
      <Thicccboi16m>THICCCBOI Medium 16px</Thicccboi16m>
      <Dmsans54b>DM Sans Bold 54px</Dmsans54b>
      <Dmsans16r>DM Sans Regular 16px</Dmsans16r>
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
`;

const Inter18 = styled.p`
  ${TYPOGRAPHY.Inter_Medium_18px};
`;

const Inter24 = styled.p`
  ${TYPOGRAPHY.Inter_Semi_Bold_24px};
`;
const Inter54 = styled.p`
  ${TYPOGRAPHY.Inter_Bold_54px}
`;
const Inter78 = styled.p`
  ${TYPOGRAPHY.Inter_Bold_78px}
`;
const Thicccboi16m = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Medium_16px}
`;
const Thicccboi20m = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Medium_20px}
`;
const Thicccboi24m = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Medium_24px}
`;
const Thicccboi20sb = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Semi_Bold_20px}
`;
const Thicccboi16b = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px}
`;
const Thicccboi28b = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px}
`;
const Thicccboi54b = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Bold_54px}
`;
const Dmsans54b = styled.p`
  ${TYPOGRAPHY.DM_Sans_Bold_54px}
`;
const Dmsans16r = styled.p`
  ${TYPOGRAPHY.DM_Sans_Regular_16px}
`;
