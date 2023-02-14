import React, { useState } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { ChangePasswordForm, PersonalInfoForm } from "@/components";
import { Layout } from "@/components";
import { ChangePasswordFormValues } from "@/components/ChangePasswordForm/ChangePasswordForm";
import { PersonalInfoFormValues } from "@/components/PersonalInfoForm/PersonalInfoForm";
import { TabsLine } from "@/ui";

enum TAB {
  FIRST,
  SECOND,
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
    alert(username + email);
  };

  const handleChangePassword = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    alert(currentPassword + " " + newPassword);
  };

  return (
    <Layout>
      <Main>
        <Title>Settings</Title>
        <TabsLine
          tabs={tabs}
          activeIndex={activeIndex}
          onClickTab={handleClickTab}
        />
        <WrapForm>
          {activeIndex === TAB.FIRST && (
            <PersonalInfoForm
              username="Alex"
              email="alex@test.ru"
              onConfirm={handleChangePersonalInfo}
            />
          )}
          {activeIndex === TAB.SECOND && (
            <ChangePasswordForm onConfirm={handleChangePassword} />
          )}
        </WrapForm>
      </Main>
    </Layout>
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
