import React, { FC } from "react";
import styled from "styled-components";

import { OPACITY } from "@/assets/styles";
import { Tabs } from "@/ui";

type Props = {
  children: React.ReactNode;
};

export const LayoutComeIn: FC<Props> = ({ children }) => {
  const tabs = [
    { title: "Create account", url: "/create-account" },
    { title: "Log in", url: "/login" },
    { title: "Checkout", url: "/checkout" },
  ];

  return (
    <Root>
      <WrapTabs>
        <Tabs tabs={tabs} />
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
