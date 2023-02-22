import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

import { login } from "@/api";
import { Layout, LayoutComeIn } from "@/components";
import { LoginForm, LoginFormValues } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/token";
import { setUser } from "@/redux/user";

export default function Login() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = async ({ email, password }: LoginFormValues) => {
    try {
      const { user, token } = await login(email, password);
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
        <title>Login</title>
      </Head>
      <Layout>
        <LayoutComeIn>
          <LoginForm onConfirm={handleLogin} />
        </LayoutComeIn>
      </Layout>
    </>
  );
}
