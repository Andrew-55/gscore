import styled from "styled-components";

import { Typography, ExampleButton, LineIcons } from "@/components";

export default function UiKit() {
  return (
    <Main>
      <Typography />
      <ExampleButton />
      <LineIcons />
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
`;
