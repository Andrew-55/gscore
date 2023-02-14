import * as EmailValidator from "email-validator";

export const checkStringIsEmpty = (string: string) => {
  return string.trim().length ? undefined : "Field can't be empty";
};

export const checkIsEmail = (string: string) => {
  return EmailValidator.validate(string) ? undefined : "Email isn't valid";
};

export const checkPasswordLength = (password: string) => {
  return password.length >= 6
    ? undefined
    : "Password must have at least 6 characters";
};
