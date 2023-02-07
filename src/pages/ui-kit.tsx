import styled from "styled-components";

import { COLORS } from "@/assets/styles";
import {
  Typography,
  ExampleButton,
  LineIcons,
  ExampleInput,
  ExampleCheckbox,
  TestForm,
  Header,
} from "@/components";

export default function UiKit() {
  return (
    <Main>
      <Header username="Alex" />
      <Header />
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
