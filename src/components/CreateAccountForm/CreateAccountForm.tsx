import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Button, Input } from "@/ui";
import {
  checkIsEmail,
  checkPasswordPolicy,
  checkStringIsEmpty,
} from "@/utils/logic-functions";

type Props = {
  onConfirm: ({ username, email, password }: CreateAccountFormValues) => void;
};

export type CreateAccountFormValues = {
  username: string;
  email: string;
  password: string;
};

export const CreateAccountForm: FC<Props> = ({ onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<CreateAccountFormValues> = ({
    username,
    email,
    password,
  }: CreateAccountFormValues) => {
    onConfirm({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Create account</Title>
      <Description>
        You need to enter your name and email. We will send you a temporary
        password by email
      </Description>
      <WrapInput>
        <Input
          placeholder="Username"
          type="string"
          {...register("username", {
            required: "Field can't be empty",
            validate: checkStringIsEmpty,
          })}
          isError={!!errors.username}
          errorMessage={errors.username?.message}
          isSuccess={isValid}
        />
        <Input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "Field can't be empty",
            validate: checkIsEmail,
          })}
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          isSuccess={isValid}
        />
        <Input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Field can't be empty",
            validate: checkPasswordPolicy,
          })}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          isSuccess={isValid}
        />
      </WrapInput>
      <StyledButton text="Send password" type="submit" variant="primary" />
    </form>
  );
};

const Title = styled.h3`
  ${TYPOGRAPHY.THICCCBOI_Bold_44px};
  margin-bottom: 16px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  }
`;

const Description = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_14px};
  line-height: 24px;
  margin-bottom: 32px;
`;

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-bottom: 48px;
`;

const StyledButton = styled(Button)`
  max-width: 200px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
