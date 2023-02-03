import styled from "styled-components";

import { Typography } from "@/components";

export default function UiKit() {
  return (
    <Main>
      <Typography />
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
`;
