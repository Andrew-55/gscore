import React, { FC } from "react";
import styled from "styled-components";

import { OPACITY } from "@/assets/styles";
import { Tabs } from "@/ui";

enum PAGES {
  CREATE_ACCOUNT = 0,
  LOGIN = 1,
  CHECKOUT = 2,
}

type Props = {
  children: React.ReactNode;
  namePage: keyof typeof PAGES;
};

export const LayoutComeIn: FC<Props> = ({ children, namePage }) => {
  const tabs = [
    { title: "Create account", url: "/create-account" },
    { title: "Log in", url: "/login" },
    { title: "Checkout", url: "/checkout" },
  ];

  return (
    <Root>
      <WrapTabs>
        <Tabs activeIndex={PAGES[namePage]} tabs={tabs} />
      </WrapTabs>
      <Children>{children}</Children>
    </Root>
  );
};

const Root = styled.div`
  max-width: 652px;
  padding: 32px 16px;
  margin-left: auto;
  margin-right: auto;
`;

const WrapTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Children = styled.div`
  animation: ${OPACITY} 0.3s ease-out;
`;
