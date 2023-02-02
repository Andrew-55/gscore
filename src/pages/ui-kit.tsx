import styled from "styled-components";

import { Typography } from "@/components";
import { ExampleButton } from "@/components/ExampleButton/ExampleButton";

export default function UiKit() {
  return (
    <Main>
      <Typography />
      <ExampleButton />
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
`;
