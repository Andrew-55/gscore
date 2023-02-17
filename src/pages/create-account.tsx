import Head from "next/head";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, LayoutComeIn } from "@/components";
import { CreateAccountForm, CreateAccountFormValues } from "@/components";

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
        <LayoutComeIn namePage="CREATE_ACCOUNT">
          <>
            <CreateAccountForm onConfirm={handleCreateAccount} />
            <Qustion>
              Have an account?
              <StyledLink href="/login">Go to the next step</StyledLink>
            </Qustion>
          </>
        </LayoutComeIn>
      </Layout>
    </>
  );
}

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
