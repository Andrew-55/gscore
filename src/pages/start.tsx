import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import {
  Checkout,
  CreateAccountForm,
  CreateAccountFormValues,
  LoginForm,
  LoginFormValues,
} from "@/components";
import { ButtonTab, Tabs } from "@/ui";

enum TAB {
  FIRST,
  SECOND,
  THIRD,
}

export default function Start() {
  const tabs = ["Create account", "Log in", "Checkout"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  const handleCreateAccount = ({
    username,
    email,
    password,
  }: CreateAccountFormValues) => {
    alert(username + " " + email + " " + password);
  };

  const handleLogin = ({ email, password }: LoginFormValues) => {
    alert(email + " " + password);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Main>
        {activeIndex === TAB.FIRST && (
          <>
            <CreateAccountForm onConfirm={handleCreateAccount} />
            <Qustion>
              Have an account?
              <StyledButtonTabs
                text="Go to the next step"
                onClick={() => setActiveIndex(1)}
              />
            </Qustion>
          </>
        )}

        {activeIndex === TAB.SECOND && <LoginForm onConfirm={handleLogin} />}

        {activeIndex === TAB.THIRD && <Checkout />}
      </Main>
    </>
  );
}

const Main = styled.div`
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

const Qustion = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 48px;
  ${TYPOGRAPHY.THICCCBOI_Regular_16px};
`;

const StyledButtonTabs = styled(ButtonTab)`
  border: none;
  color: ${COLORS.primary_01};
`;
