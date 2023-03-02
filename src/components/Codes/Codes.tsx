import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Code } from "@/components";
import { ERROR_MESSAGE } from "@/constants";
import {
  getCodesByIdSubscribe,
  setCodesToStore,
  getCurrentSubscriptionId,
  logout,
} from "@/redux/ducks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ErrorApi, ErrorApiData, getCodeSelf, manageCode } from "@/services";
import { Button } from "@/ui";

export type CodesFormValues = {
  codeIds: string[];
};

export const Codes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isChangeCodes, setIsChangeCodes] = useState(false);
  let currentSubscribeId = useAppSelector(getCurrentSubscriptionId());
  let codesSubscribe = useAppSelector(
    getCodesByIdSubscribe(currentSubscribeId)
  );
  codesSubscribe.sort((a, b) => (a.id > b.id ? 1 : -1));

  const codesHold = codesSubscribe.filter((code) => code.status === "HOLD");
  const hasCodesHold = codesHold.length > 0;

  const dispatch = useAppDispatch();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: { codeIds: [""] },
  });

  useEffect(() => {
    async function fetchCodes() {
      try {
        setIsLoading(true);
        const codes = await getCodeSelf();
        dispatch(setCodesToStore(codes));
        setIsChangeCodes(false);
      } catch (err) {
        const error = err as ErrorApi;

        if (error.response?.status === 401) {
          router.push("/login");
          dispatch(logout());
        }

        if (error.response?.status !== 401) {
          toast(ERROR_MESSAGE.somethingWrong);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCodes();
  }, [dispatch, router, isChangeCodes, hasCodesHold]);

  const handleActiveCode = () => {
    setIsChangeCodes(true);
  };

  const onSubmit: SubmitHandler<CodesFormValues> = async ({
    codeIds,
  }: CodesFormValues) => {
    if (codeIds.length > 0 && currentSubscribeId) {
      const codesIds = codeIds.map((id) => Number(id));

      try {
        setIsLoading(true);
        const codes = await manageCode(codesIds, currentSubscribeId);
        if (codes) {
          setIsChangeCodes(true);
        }
        reset();
      } catch (err) {
        const error = err as ErrorApi;

        if (error.response?.status === 400) {
          const data = error.response?.data as ErrorApiData;

          toast(data.message || ERROR_MESSAGE.numberNotMatchAvailable);
        }
        if (error.response?.status === 401) {
          router.push("/login");
          dispatch(logout());
          toast(ERROR_MESSAGE.needLogin);
        }
        if (error.response?.status === 404 || error.response?.status === 409) {
          toast(ERROR_MESSAGE.somethingWrong);
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      <WrapCode>
        {codesSubscribe.map((code) => (
          <li key={code.id}>
            <Code
              register={register}
              code={code}
              isDisabled={!hasCodesHold}
              onActiveCode={handleActiveCode}
            />
          </li>
        ))}
      </WrapCode>

      {hasCodesHold && (
        <>
          <CodesInfo>Select the domains you want to keep</CodesInfo>
          <StyledButton
            text="Confirm"
            variant="primary"
            type="submit"
            isLoading={isLoading}
          />
        </>
      )}
    </Root>
  );
};

const Root = styled.form`
  display: grid;
  grid-template-areas:
    "codes codes"
    "info button";
  grid-template-columns: 1fr 152px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-areas:
      "info"
      "codes"
      "button";
    grid-template-columns: 1fr;
  }
`;

const WrapCode = styled.ul`
  grid-area: codes;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  margin-bottom: 56px;

  @media (max-width: 768px) {
    row-gap: 24px;
    margin-bottom: 32px;
  }
`;

const CodesInfo = styled.span`
  display: block;
  ${TYPOGRAPHY.THICCCBOI_Bold_20px};
  grid-area: info;

  @media (max-width: 768px) {
    margin-bottom: 28px;
    max-width: 60%;
  }
`;

const StyledButton = styled(Button)`
  max-width: 152px;
  grid-area: button;

  @media (max-width: 768px) {
    justify-self: end;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
