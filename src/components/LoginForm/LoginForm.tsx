import React, { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { ERROR_MESSAGE } from "@/assets/message";
import { TYPOGRAPHY } from "@/assets/styles";
import { Button, Input } from "@/ui";
import { checkIsEmail } from "@/utils/logic-functions";

type Props = {
  onConfirm: ({ email, password }: LoginFormValues) => void;
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export const LoginForm: FC<Props> = ({ onConfirm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, [reset]);

  const onSubmit: SubmitHandler<LoginFormValues> = ({
    email,
    password,
  }: LoginFormValues) => {
    onConfirm({ email, password });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title>Log in</Title>
      <WrapInput>
        <Input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: ERROR_MESSAGE.required,
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
            required: ERROR_MESSAGE.required,
          })}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          isSuccess={isValid}
        />
      </WrapInput>
      <StyledButton text="Log in" type="submit" variant="primary" />
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
