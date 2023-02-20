import React, { FC } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Code } from "@/components";
import { MY_SUBSCRIPTIONS } from "@/stoge";
import { Button } from "@/ui";

interface Props {
  id: number;
  updateOn: boolean;
}

export const Codes: FC<Props> = ({ id, updateOn }) => {
  const codes = MY_SUBSCRIPTIONS[id];

  return (
    <Root>
      <WrapCode>
        {codes.codes.map((code) => (
          <li key={code.id}>
            <Code
              code={code.code}
              status={code.status}
              origin={code.origin || ""}
              isDisabled={!updateOn}
            />
          </li>
        ))}
      </WrapCode>
      {updateOn && <CodesInfo>Select the domains you want to keep</CodesInfo>}
      {updateOn && <StyledButton text="Confirm" variant="primary" />}
    </Root>
  );
};

const Root = styled.div`
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
