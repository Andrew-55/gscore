import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { updatePassword, updatePersonalData, ErrorApi } from "@/api";
import { ERROR_MESSAGE } from "@/assets/message";
import { TYPOGRAPHY } from "@/assets/styles";
import {
  ChangePasswordForm,
  PersonalInfoForm,
  Layout,
  PersonalInfoFormValues,
  ChangePasswordFormValues,
} from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUser, logout, updateUser } from "@/redux/user";
import { TabsLine } from "@/ui";

enum TABS {
  PERSONAL_INFO = "Personal Info",
  CHANGE_PASSWORD = "Change password",
}

function Settings() {
  const tabs = ["Personal Info", "Change password"];
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  const handleChangePersonalInfo = async ({
    username,
    email,
  }: PersonalInfoFormValues) => {
    try {
      const user = await updatePersonalData(email, username);
      dispatch(updateUser(user));
    } catch (err) {
      const error = err as ErrorApi;

      if (error.response?.status === 401) {
        router.push("/login");
        dispatch(logout());
      }

      if (error.response?.status !== 401) {
        toast(ERROR_MESSAGE.somethingWrong);
      }
    }
  };

  const handleChangePassword = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    try {
      updatePassword(currentPassword, newPassword);
    } catch (err) {
      const error = err as ErrorApi;

      if (error.response?.status === 400) {
        toast(ERROR_MESSAGE.wrongtPassword);
      }

      if (error.response?.status === 401) {
        router.push("/login");
        dispatch(logout());
      }
    }
  };

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Layout>
        <Main>
          <Title>Settings</Title>
          <TabsLine
            tabs={tabs}
            activeIndex={activeIndex}
            onClickTab={handleClickTab}
          />
          <WrapForm>
            {tabs[activeIndex] === TABS.PERSONAL_INFO && (
              <PersonalInfoForm
                username={user.username}
                email={user.email}
                onConfirm={handleChangePersonalInfo}
              />
            )}

            {tabs[activeIndex] === TABS.CHANGE_PASSWORD && (
              <ChangePasswordForm onConfirm={handleChangePassword} />
            )}
          </WrapForm>
        </Main>
      </Layout>
    </>
  );
}

export default withAuth(Settings);

const Main = styled.main`
  padding: 32px 86px;
  display: flex;
  flex-direction: column;
  row-gap: 48px;

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`;

const Title = styled.h1`
  ${TYPOGRAPHY.THICCCBOI_Bold_54px};
  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  }
`;

const WrapForm = styled.div`
  max-width: 512px;
`;
