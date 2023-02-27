import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";

import { ErrorApi, login } from "@/api";
import { ERROR_MESSAGE } from "@/assets/message";
import { Layout, LayoutComeIn } from "@/components";
import { LoginForm, LoginFormValues } from "@/components";
import { useAppDispatch } from "@/redux/hooks";
import { setUserState } from "@/redux/user";

export default function Login() {
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
        <LayoutComeIn>
          <LoginForm onConfirm={handleLogin} />
        </LayoutComeIn>
      </Layout>
    </>
  );
}
