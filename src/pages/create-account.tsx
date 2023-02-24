import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { createAccount } from "@/api/slice";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, LayoutComeIn } from "@/components";
import { CreateAccountForm, CreateAccountFormValues } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/token";
import { setUser } from "@/redux/user";

export default function CreateAccount() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleCreateAccount = async ({
    username,
    email,
    password,
  }: CreateAccountFormValues) => {
    try {
      const { user, token } = await createAccount(username, email, password);
      dispatch(setUser(user));
      dispatch(setToken(token));
      router.push("/");
    } catch (error) {
      console.warn("Errors )))");
    }
  };

  return (
    <>
      <Head>
        <title>Create Account</title>
      </Head>
      <Layout>
        <LayoutComeIn>
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
