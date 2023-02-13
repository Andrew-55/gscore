import React, { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

import { COLORS } from "@/assets/styles";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { HeaderMobile } from "../HeaderMobile";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  let mobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile, setIsMobile]);

  return (
    <Wrap>
      {isMobile ? <HeaderMobile username="Alex" /> : <Header username="Alex" />}
      <Content>{children}</Content>
      <Footer />
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${COLORS.color_100};
  background-color: ${COLORS.color_800};
`;

const Content = styled.main`
  height: 100%;
`;
