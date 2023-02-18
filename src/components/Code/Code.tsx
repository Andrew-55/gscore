import React, { FC } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button, Checkbox, InputLabel, Status } from "@/ui";

interface Props {
  status: string;
  code?: string;
  origin?: string;
  isDisabled?: boolean;
}

export const Code: FC<Props> = ({ status, code, isDisabled, origin }) => {
  return (
    <Root>
      <WrapCheckbox>
        <Checkbox value={code || ""} isDisabled={isDisabled} />
      </WrapCheckbox>
      <Wrap>
        <LicenseCode
          label="License code"
          value={code}
          isDisabled={isDisabled}
          isCopy
        />
        <Domain label="Domain" value={origin} isDisabled={isDisabled} />
      </Wrap>
      {status === "INACTIVE" && (
        <StyledButton text="Activate" variant="secondary" />
      )}
      <StatusInfo>
        <StatusInfoTitle>Status</StatusInfoTitle>
        <WrapStatus>
          <Status status={status} />
        </WrapStatus>
      </StatusInfo>
    </Root>
  );
};

const Root = styled.div`
  max-width: 1268px;
  display: flex;
  align-items: flex-start;
  background-color: ${COLORS.color_701};
  padding: 24px 50px 32px 32px;
  border-radius: 12px;

  @media (max-width: 992px) {
    padding: 34px 20px;
    display: grid;
    justify-content: start;
    align-items: center;
    row-gap: 24px;
    grid-template-areas:
      "checkbox status button"
      "wrap wrap wrap";
    grid-template-columns: 28px 130px 1fr;
  }
`;

const WrapCheckbox = styled.div`
  margin-top: 50px;

  @media (max-width: 992px) {
    margin-top: 0;
    grid-area: checkbox;
  }
`;

const Wrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 296px 1fr;
  column-gap: 28px;
  margin-left: 48px;

  @media (max-width: 1200px) {
    grid-template-columns: 200px 1fr;
    margin-left: 30px;
  }
  @media (max-width: 992px) {
    grid-area: wrap;
    margin-left: 0;
    grid-template-columns: 296px 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 24px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 111px;
  margin-top: 35px;
  margin-left: 56px;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-top: 0;
    margin-right: 0;
    grid-area: button;
  }
`;

const StatusInfo = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_16px};
  color: ${COLORS.color_500};
  margin-left: 56px;
  min-width: 100px;

  @media (max-width: 992px) {
    margin-left: 20px;
    grid-area: status;
  }
`;

const StatusInfoTitle = styled.h3`
  margin-bottom: 32px;
  @media (max-width: 992px) {
    display: none;
  }
`;

const WrapStatus = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_22px}
`;

const LicenseCode = styled(InputLabel)`
  width: 100%;
`;

const Domain = styled(InputLabel)`
  width: 100%;
`;
