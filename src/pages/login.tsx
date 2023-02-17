import Head from "next/head";
import React from "react";
import styled from "styled-components";

import { Layout } from "@/components";
import { LoginForm, LoginFormValues } from "@/components";
import { Tabs } from "@/ui";

export default function Login() {
  const handleLogin = ({ email, password }: LoginFormValues) => {
    alert(email + " " + password);
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <Main>
          <WrapTabs>
            <Tabs activeIndex={1} />
          </WrapTabs>
          <LoginForm onConfirm={handleLogin} />
        </Main>
      </Layout>
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
