import Head from "next/head";
import React, { useState } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { ChangePasswordForm, IsAuth, PersonalInfoForm } from "@/components";
import { Layout } from "@/components";
import { ChangePasswordFormValues } from "@/components/ChangePasswordForm/ChangePasswordForm";
import { PersonalInfoFormValues } from "@/components/PersonalInfoForm/PersonalInfoForm";
import { TabsLine } from "@/ui";

enum TABS {
  PERSONAL_INFO = "Personal Info",
  CHANGE_PASSWORD = "Change password",
}

export default function Settings() {
  const tabs = ["Personal Info", "Change password"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickTab = (index: number) => {
    setActiveIndex(index);
  };

  const handleChangePersonalInfo = ({
    username,
    email,
  }: PersonalInfoFormValues) => {
    console.warn(username + email);
  };

  const handleChangePassword = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    console.warn(currentPassword + " " + newPassword);
  };

  return (
    <>
      <Head>
        <title>Settings</title>
      </Head>
      <Layout>
        <IsAuth>
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
                  username="Alex"
                  email="alex@test.ru"
                  onConfirm={handleChangePersonalInfo}
                />
              )}

              {tabs[activeIndex] === TABS.CHANGE_PASSWORD && (
                <ChangePasswordForm onConfirm={handleChangePassword} />
              )}
            </WrapForm>
          </Main>
        </IsAuth>
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
