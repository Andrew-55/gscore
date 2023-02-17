import Head from "next/head";
import React from "react";

import { Layout, LayoutComeIn } from "@/components";
import { LoginForm, LoginFormValues } from "@/components";

export default function Login() {
  const handleLogin = ({ email, password }: LoginFormValues) => {
    console.warn(email + " " + password);
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
