import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button, Checkbox, Input } from "@/ui";

type Props = {};

type FormValues = {
  username: string;
  email: string;
  animals: string[];
};

export const TestForm: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      username: "",
      email: "",
      animals: [],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = ({
    username,
    email,
    animals,
  }) => {
    alert(`${username}  ${email}  ${animals}`);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TitleBlock>TestForm</TitleBlock>
      <Input
        {...register("username", {
          required: "Name not entered",
          minLength: {
            value: 3,
            message: "Name has length  min 3 characters",
          },
        })}
        type="text"
        maxLength={15}
        placeholder="Please, enter your name"
        autoFocus
        isError={!!errors.username}
        isSuccess={isValid}
      />
      <Input
        {...register("email", {
          required: "Email not entered",
        })}
        type="email"
        placeholder="Please, enter your email"
        autoFocus
        isError={!!errors.email}
        isSuccess={isValid}
      />
      <Checkbox
        text="Cat"
        value="Cat"
        {...register("animals", {
          required: "Please choose minimum one animal",
        })}
      />
      <Checkbox
        text="Dog"
        value="Dog"
        {...register("animals", {
          required: "Please choose minimum one animal",
        })}
      />
      <Checkbox
        text="Fox"
        value="Fox"
        {...register("animals", {
          required: "Please choose minimum one animal",
        })}
      />

      {errors.animals && <ErrorMessage>{errors.animals.message}</ErrorMessage>}
      <Button type="submit" variant="primary" text="OK" />
    </Form>
  );
};

const Form = styled.form`
  background-color: ${COLORS.color_700};
  padding: 30px;
  max-width: 600px;
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
`;

const TitleBlock = styled.h1`
  color: ${COLORS.color_200};
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 30px;
`;

const ErrorMessage = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_14px}
  color: ${COLORS.red_300};
`;
