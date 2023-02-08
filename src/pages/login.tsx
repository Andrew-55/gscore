import styled from "styled-components";

import { COLORS } from "@/assets/styles";

export default function Login() {
  return (
    <Main>
      <h1>Log in</h1>
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
  color: ${COLORS.color_800};
`;
