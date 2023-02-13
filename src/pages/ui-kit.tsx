import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
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
  Footer,
  HeaderMobile,
  ExampleTabs,
  ExampleCard,
} from "@/components";
import { ExampleCode } from "@/components/Example/ExampleCode";

export default function UiKit() {
  const [isMobile, setIsMobile] = useState(false);

  let mobile = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile, setIsMobile]);

  return (
    <Main>
      {isMobile ? <HeaderMobile username="Alex" /> : <Header username="Alex" />}
      <ExampleCode />
      <ExampleTabs />
      <ExampleCard />
      <Footer />
      <Typography />
      <ExampleButton />
      <LineIcons />
      <ExampleInput />
      <ExampleCheckbox />
      {/* <TestForm /> */}
    </Main>
  );
}

const Main = styled.main`
  padding: 0 20px;
  background-color: ${COLORS.color_800};
`;
