import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button } from "@/ui";
import { ListItem } from "@/ui/ListItem";

interface Props {
  id: number;
  name: string;
  price: string;
  sitesCount: number;
  isRed?: boolean;
  onClickButton: (id: number) => void;
}

export const PricingCard: FC<Props> = ({
  id,
  name,
  price,
  sitesCount,
  isRed,
  onClickButton,
}) => {
  const list = [
    "Special introductory pricing",
    "Unlimited Pages and Keywords",
    "Billed annually",
  ];

  list.unshift(
    sitesCount > 1
      ? `All features for ${sitesCount} sites`
      : `Single site license`
  );

  return (
    <Root $isRed={isRed}>
      <Price>${price}</Price>
      <Name>{name}</Name>
      <Description>
        Get the advanced WordPress plugin that optimizes content with GSC
        keywords at one low annual price
      </Description>
      <Content>
        <StyledUl>
          {list.map((item, index) => (
            <ListItem key={index} text={item} />
          ))}
        </StyledUl>
        <StyledButton
          text="Get Gscore"
          variant="secondary"
          onClick={() => onClickButton(id)}
        />
      </Content>
    </Root>
  );
};

const Root = styled.div<{ $isRed?: boolean }>`
  display: inline-block;
  flex: 0 0 auto;
  position: relative;
  width: 404px;
  padding: 42px 48px;
  color: ${COLORS.color_100};
  background-color: ${COLORS.color_701};
  border-radius: 12px;
  box-shadow: 0px 8px 28px ${COLORS.box_shadow_03};

  @media (max-width: 992px) {
    padding: 24px 24px;
    width: 330px;
  }

  ${({ $isRed }) =>
    $isRed &&
    css`
      background-color: ${COLORS.primary_01};
      & svg {
        stroke: ${COLORS.primary_01};
      }
    `}
`;

const Description = styled.p`
  text-align: center;
  ${TYPOGRAPHY.THICCCBOI_Medium_18px}
  line-height: 30px;
  margin-bottom: 40px;

  @media (max-width: 992px) {
    ${TYPOGRAPHY.THICCCBOI_Regular_14px};
    margin-bottom: 20px;
  }
`;

const Name = styled.h3`
  text-align: center;
  ${TYPOGRAPHY.THICCCBOI_Bold_24px};
  margin-bottom: 8px;

  @media (max-width: 992px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  }
`;

const Price = styled.p`
  text-align: center;
  ${TYPOGRAPHY.DM_Sans_Bold_54px};
  margin-bottom: 4px;

  @media (max-width: 992px) {
    ${TYPOGRAPHY.DM_Sans_Bold_34px};
  }
`;

const Content = styled.div`
  border-top: 1px solid ${COLORS.white_opacity_70};
  padding-top: 38px;
`;

const StyledUl = styled.ul`
  ${TYPOGRAPHY.THICCCBOI_Medium_18px};
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: 992px) {
    ${TYPOGRAPHY.THICCCBOI_Medium_16px};
  }
`;

const StyledButton = styled(Button)`
  max-width: 404px;
  width: 100%;
`;
