import styled from "styled-components";

import { COLORS } from "@/assets/styles";
import {
  Typography,
  ExampleButton,
  LineIcons,
  ExampleInput,
  ExampleCheckbox,
  TestForm,
} from "@/components";

export default function UiKit() {
  return (
    <Main>
      <Typography />
      <ExampleButton />
      <LineIcons />
      <ExampleInput />
      <ExampleCheckbox />
      <TestForm />
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
  background-color: ${COLORS.color_800};
`;
