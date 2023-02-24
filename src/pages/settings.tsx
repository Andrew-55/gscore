import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

import { updatePassword, updatePersonalData } from "@/api/slice";
import { TYPOGRAPHY } from "@/assets/styles";
import { ChangePasswordForm, PersonalInfoForm } from "@/components";
import { Layout } from "@/components";
import { ChangePasswordFormValues } from "@/components/ChangePasswordForm/ChangePasswordForm";
import { PersonalInfoFormValues } from "@/components/PersonalInfoForm/PersonalInfoForm";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/token";
import { getUser, setUser } from "@/redux/user";
import { TabsLine } from "@/ui";

enum TABS {
  PERSONAL_INFO = "Personal Info",
  CHANGE_PASSWORD = "Change password",
}

export default function Settings() {
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
      dispatch(setUser(user));
    } catch (error) {
      console.warn(error);
    }
  };

  const handleChangePassword = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    try {
      updatePassword(token, currentPassword, newPassword);
    } catch (error) {}
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
