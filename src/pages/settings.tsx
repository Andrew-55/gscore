import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { ErrorApi } from "@/api";
import { updatePassword, updatePersonalData } from "@/api/slice";
import { ERROR_MESSAGE } from "@/assets/message";
import { TYPOGRAPHY } from "@/assets/styles";
import { ChangePasswordForm, PersonalInfoForm, Layout } from "@/components";
import { ChangePasswordFormValues } from "@/components/ChangePasswordForm/ChangePasswordForm";
import { PersonalInfoFormValues } from "@/components/PersonalInfoForm/PersonalInfoForm";
import { withAuth } from "@/hoc/withAuth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getUser, updateUser, getToken } from "@/redux/user";
import { TabsLine } from "@/ui";

enum TABS {
  PERSONAL_INFO = "Personal Info",
  CHANGE_PASSWORD = "Change password",
}

function Settings() {
  const tabs = ["Personal Info", "Change password"];
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const token = useAppSelector(getToken);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  if (token === "") {
    router.push("/login");
  }

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  const handleChangePersonalInfo = async ({
    username,
    email,
  }: PersonalInfoFormValues) => {
    try {
      const user = await updatePersonalData(token, email, username);
      dispatch(updateUser(user));
    } catch (err) {
      const error = err as ErrorApi;

      if (error) {
        toast(ERROR_MESSAGE.somethingWrong);
      }
    }
  };

  const handleChangePassword = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    try {
      updatePassword(token, currentPassword, newPassword);
    } catch (err) {
      const error = err as ErrorApi;
      if (error.response?.status === 400) {
        toast(ERROR_MESSAGE.wrongtPassword);
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
