import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Button, Input } from "@/ui";
import { checkPasswordPolicy } from "@/utils/logic-functions";

type Props = {
  onConfirm: ({
    currentPassword,
    newPassword,
  }: ChangePasswordFormValues) => void;
};

export type ChangePasswordFormValues = {
  currentPassword: string;
  newPassword: string;
};

export const ChangePasswordForm: FC<Props> = ({ onConfirm }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
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
      <WrapInput>
        <Input
          placeholder="Current Password"
          type="password"
          {...register("currentPassword", {
            required: "Field can't be empty",
            validate: checkPasswordPolicy,
          })}
          isError={!!errors.currentPassword}
          errorMessage={errors.currentPassword?.message}
          isSuccess={isValid}
          autoFocus
        />
        <Input
          placeholder="New Password"
          type="password"
          {...register("newPassword", {
            required: "Field can't be empty",
            minLength: {
              value: 6,
              message: "Password must be minimum 6 characters",
            },
            validate: (value: string) => {
              checkPasswordPolicy(value);
              if (watch("currentPassword") === value) {
                return "The password must be different from the existing one";
              }
            },
          })}
          isError={!!errors.newPassword}
          errorMessage={errors.newPassword?.message}
          isSuccess={isValid}
        />
      </WrapInput>
      <StyledButton text="Save" type="submit" variant="primary" />
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
