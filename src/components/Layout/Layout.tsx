import React, { FC } from "react";
import styled from "styled-components";

import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Root>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Root>
  );
};

const Root = styled.div`
  height: 100vh;
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  flex-grow: 1;
  flex-shrink: 1;
`;
