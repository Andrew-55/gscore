import React, { FC, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styled from "styled-components";

import { getCodeSelf, manageCode } from "@/api/slice";
import { TYPOGRAPHY } from "@/assets/styles";
import { Code } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/token";
import { CodeType } from "@/types";
import { Button } from "@/ui";

interface Props {
  id: number;
  isUpdateOn: boolean;
}

export type CodesFormValues = {
  codeIds: string[];
};

export const Codes: FC<Props> = ({ id, isUpdateOn }) => {
  const [codes, setCodes] = useState<CodeType[]>();
  const token = useAppSelector(getToken);

  const { register, handleSubmit } = useForm({
    defaultValues: { codeIds: [""] },
  });

  useEffect(() => {
    async function fetchCodes() {
      try {
        const codes = await getCodeSelf(token);
        const codesSubscribe = codes.filter((code) => code.subscribeId === id);

        setCodes(codesSubscribe);
      } catch (error) {}
    }
    fetchCodes();
  }, [token, id]);

  const onSubmit: SubmitHandler<CodesFormValues> = async ({
    codeIds,
  }: CodesFormValues) => {
    if (codeIds.length > 0) {
      const codesIds = codeIds.map((id) => Number(id));
      console.log(codeIds);
      const data = await manageCode(token, codesIds, id);
      console.log(data);
    }
  };

  return (
    <Root onSubmit={handleSubmit(onSubmit)}>
      <WrapCode>
        {codes?.map((code) => (
          <li key={code.id}>
            <Code
              register={register}
              id={code.id}
              code={code.code}
              status={code.status}
              origin={code.origin || ""}
              isDisabled={!isUpdateOn}
            />
          </li>
        ))}
      </WrapCode>

      {isUpdateOn && (
        <>
          <CodesInfo>Select the domains you want to keep</CodesInfo>
          <StyledButton text="Confirm" variant="primary" type="submit" />
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
