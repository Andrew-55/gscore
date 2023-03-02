import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { ERROR_MESSAGE } from "@/constants";
import { Button, Input } from "@/ui";
import { checkPasswordLength } from "@/utils/functions";

type Props = {
  isLoading?: boolean;
  onConfirm: ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => void;
};

export type ChangePasswordFormValues = {
  currentPassword: string;
  newPassword: string;
};

export const ChangePasswordForm: FC<Props> = ({ onConfirm, isLoading }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<ChangePasswordFormValues> = ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => {
    onConfirm({ currentPassword, newPassword });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Change password</Title>
      <StyledInput type="text" autoComplete="username" />
      <WrapInput>
        <Input
          placeholder="Current Password"
          type="password"
          autoComplete="current-password"
          {...register("currentPassword", {
            required: ERROR_MESSAGE.required,
            validate: checkPasswordLength,
          })}
          isError={!!errors.currentPassword}
          errorMessage={errors.currentPassword?.message}
          isSuccess={isValid}
        />

        <Input
          placeholder="New Password"
          type="password"
          autoComplete="new-password"
          {...register("newPassword", {
            required: ERROR_MESSAGE.required,
            validate: (value: string) => {
              if (watch("currentPassword") === value) {
                return ERROR_MESSAGE.passwordNotDifferent;
              }
              return checkPasswordLength(value);
            },
          })}
          isError={!!errors.newPassword}
          errorMessage={errors.newPassword?.message}
          isSuccess={isValid}
        />
      </WrapInput>
      <StyledButton
        text="Save"
        type="submit"
        variant="primary"
        isLoading={isLoading}
        isDisabled={isLoading}
      />
    </Form>
  );
};

const Form = styled.form``;

const Title = styled.h3`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  }
`;

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 48px;
`;

const StyledButton = styled(Button)`
  max-width: 160px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const StyledInput = styled.input`
  display: none;
`;
