import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { ErrorApi, login } from "@/services";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, LoginForm, LoginFormValues } from "@/components";
import { ERROR_MESSAGE } from "@/constants";
import { setUserState } from "@/redux/ducks";
import { useAppDispatch } from "@/redux/hooks";
import { Tabs } from "@/ui";

export default function Login() {
  const tabs = [
    { title: "Create account", url: "/create-account" },
    { title: "Log in", url: "/login" },
  ];

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async ({ email, password }: LoginFormValues) => {
    try {
      const userInfo = await login(email, password);
      if (userInfo) {
        dispatch(setUserState(userInfo));
        router.push("/");
      }
    } catch (err) {
      const error = err as ErrorApi;
      if (error.response?.status === 400 || error.response?.status === 404) {
        toast(ERROR_MESSAGE.wrongtEmailPassword);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <Content>
          <WrapTabs>
            <Tabs tabs={tabs} />
          </WrapTabs>
          <LoginForm onConfirm={handleLogin} />
          <Qustion>
            {`Don't have an account?`}
            <StyledLink href="/create-account">
              Go to the creating account
            </StyledLink>
          </Qustion>
        </Content>
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

const Content = styled.div`
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
