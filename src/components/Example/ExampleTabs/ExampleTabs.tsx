import React, { useState } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { TabsLine, Tabs } from "@/ui";

enum TAB {
  FIRST,
  SECOND,
  THIRD,
}

export const ExampleTabs = () => {
  const tabs = ["Profile", "Subscriptions", "Change password"];
  const [activeIndex, setActiveIndex] = useState(0);

  const tabsTwo = ["Create account", "Log in", "Checkout"];
  const [activeIndexTwo, setActiveIndexTwo] = useState(0);

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  const handleClickTabTwo = (index: number) => {
    setActiveIndexTwo(index);
  };

  return (
    <Root>
      <Title>Tabs</Title>
      <WrapTab>
        <TabsLine
          tabs={tabs}
          activeIndex={activeIndex}
          onClickTab={handleClickTab}
        />
        {activeIndex === TAB.FIRST && <StyledDiv>Profile</StyledDiv>}
        {activeIndex === TAB.SECOND && <StyledDiv>Subscriptions</StyledDiv>}
        {activeIndex === TAB.THIRD && <StyledDiv>Change password</StyledDiv>}
      </WrapTab>
      <WrapTab>
        <Tabs
          tabs={tabsTwo}
          activeIndex={activeIndexTwo}
          onClickTab={handleClickTabTwo}
        />
        {activeIndexTwo === TAB.FIRST && <StyledDiv>Create account</StyledDiv>}
        {activeIndexTwo === TAB.SECOND && <StyledDiv>Log in</StyledDiv>}
        {activeIndexTwo === TAB.THIRD && <StyledDiv>Checkout</StyledDiv>}
      </WrapTab>
    </Root>
  );
};

const Root = styled.ul`
  padding: 40px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Bold_28px}
  margin-bottom: 30px;
`;

const StyledDiv = styled.div`
  margin-top: 20px;
  color: ${COLORS.color_100};
`;

const WrapTab = styled.div`
  padding: 30px;
  border: 1px dashed ${COLORS.color_600};
  margin-bottom: 20px;
`;
