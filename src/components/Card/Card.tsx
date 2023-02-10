import dayjs from "dayjs";
import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button, Status, StatusType } from "@/ui";

interface Props {
  title: string;
  status: StatusType;
  typeLicense: string;
  price: string;
  validUntil: Date;
  isDisabled?: boolean;
}

export const Card: FC<Props> = ({
  title,
  status,
  typeLicense,
  price,
  validUntil,
  isDisabled,
}) => {
  const dateString = `${dayjs(validUntil).format("DD.MM.YYYY")}`;

  return (
    <Root $isDisabled={isDisabled}>
      <Header>
        <Title>{title}</Title>
        <Status status={status} />
      </Header>
      <Content>
        <License>
          <span>{typeLicense}</span>
          <span>${price}</span>
        </License>
        <Valid>valid until {dateString}</Valid>
        <StyledButton text="View" variant="secondary" isDisabled={isDisabled} />
      </Content>
    </Root>
  );
};

const Root = styled.div<{ $isDisabled?: boolean }>`
  max-width: 620px;
  width: 100%;
  background-color: ${COLORS.color_700};
  border-radius: 12px;
  box-shadow: 0px 24px 65px ${COLORS.card_box_shadow};

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      opacity: 0.6;
    `}

  @media (max-width: 768px) {
    max-width: 318px;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_22px}
  display: flex;
  justify-content: space-between;
  padding: 42px 64px 32px 32px;
  border-bottom: 1px solid ${COLORS.color_500};

  @media (max-width: 768px) {
    padding: 32px 24px 24px 16px;
    ${TYPOGRAPHY.THICCCBOI_Semi_Bold_20px}
  }
`;

const Title = styled.h3`
  color: ${COLORS.color_100};
`;

const Content = styled.div`
  padding: 32px 81px 48px 32px;

  @media (max-width: 768px) {
    padding: 24px 50px 32px 16px;
  }
`;

const License = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_24px}

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Medium_18px}
    line-height: 30px;
    margin-bottom: 4px;
  }
`;

const Valid = styled.p`
  color: ${COLORS.color_500};
  ${TYPOGRAPHY.THICCCBOI_Medium_16px};
  margin-bottom: 32px;
  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const StyledButton = styled(Button)`
  max-width: 120px;
`;
