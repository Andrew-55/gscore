import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout } from "@/components";
import { CreateAccountForm, CreateAccountFormValues } from "@/components";
import { Tabs } from "@/ui";

export default function CreateAccount() {
  const handleCreateAccount = ({
    username,
    email,
    password,
  }: CreateAccountFormValues) => {
    alert(username + " " + email + " " + password);
  };

  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <Layout>
        <Main>
          <WrapTabs>
            <Tabs activeIndex={0} />
          </WrapTabs>
          <>
            <CreateAccountForm onConfirm={handleCreateAccount} />
            <Qustion>
              Have an account?
              <StyledLink href="/login">Go to the next step</StyledLink>
            </Qustion>
          </>
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

const Qustion = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 48px;
  ${TYPOGRAPHY.THICCCBOI_Regular_16px};
`;

const StyledLink = styled(Link)`
  color: ${COLORS.primary_01};
  &:hover,
  &:focus {
    color: ${COLORS.red_400};
    transition: all 0.3s ease-out;
  }

  &:active {
    color: ${COLORS.red_400};
  }
`;
