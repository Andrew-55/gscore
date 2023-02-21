import Head from "next/head";
import React from "react";

import { Api } from "@/api";
import { Layout, LayoutComeIn } from "@/components";
import { LoginForm, LoginFormValues } from "@/components";

export default function Login() {
  const api = new Api();

  const handleLogin = async ({ email, password }: LoginFormValues) => {
    try {
      const response = await api.login(email, password);
      console.warn(response);
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
