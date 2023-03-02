import * as EmailValidator from "email-validator";

import { ERROR_MESSAGE } from "@/constants";

export const checkStringIsEmpty = (string: string) => {
  return string.trim().length ? undefined : ERROR_MESSAGE.required;
};

export const checkIsEmail = (string: string) => {
  return EmailValidator.validate(string) ? undefined : ERROR_MESSAGE.email;
};

export const checkPasswordLength = (password: string) => {
  return password.length >= 6 ? undefined : ERROR_MESSAGE.passwordLength;
};
