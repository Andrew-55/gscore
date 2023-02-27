import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { ERROR_MESSAGE } from "@/assets/message";
import { TYPOGRAPHY } from "@/assets/styles";
import { Button, Input } from "@/ui";
import { checkIsEmail, checkStringIsEmpty } from "@/utils/functions";

type Props = {
  username: string;
  email: string;
  onConfirm: ({ username, email }: PersonalInfoFormValues) => void;
};

export type PersonalInfoFormValues = {
  username: string;
  email: string;
};

export const PersonalInfoForm: FC<Props> = ({ username, email, onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: username,
      email: email,
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<PersonalInfoFormValues> = ({
    username,
    email,
  }: PersonalInfoFormValues) => {
    onConfirm({ username, email });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Personal Info</Title>
      <WrapInput>
        <Input
          placeholder="Username"
          type="text"
          {...register("username", {
            required: ERROR_MESSAGE.required,
            maxLength: {
              value: 25,
              message: ERROR_MESSAGE.usernameMaxLength,
            },
            validate: checkStringIsEmpty,
          })}
          isError={!!errors.username}
          errorMessage={errors.username?.message}
          isSuccess={isValid}
          autoFocus
        />

        <Input
          placeholder="Email"
          type="email"
          {...register("email", {
            validate: checkIsEmail,
          })}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
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
