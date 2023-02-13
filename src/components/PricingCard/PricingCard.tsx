import React, { FC } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button } from "@/ui";
import { ListItem } from "@/ui/ListItem";

interface Props {
  name: string;
  price: string;
  sitesCount: number;
  isActive?: boolean;
}

export const PricingCard: FC<Props> = ({
  name,
  price,
  sitesCount,
  isActive,
}) => {
  const colorCurrent = isActive ? COLORS.primary_01 : COLORS.color_701;
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
    <Root $isActive={isActive}>
      <Price>${price}</Price>
      <Name>{name}</Name>
      <Description>
        Get the advanced WordPress plugin that optimizes content with GSC
        keywords at one low annual price
      </Description>
      <Content>
        <StyledUl>
          {list.map((item, index) => (
            <ListItem key={index} text={item} colorIcon={colorCurrent} />
          ))}
        </StyledUl>
        <StyledButton text="Get Gscore" variant="secondary" />
      </Content>
    </Root>
  );
};

const Root = styled.div<{ $isActive?: boolean }>`
  position: relative;
  max-width: 404px;
  width: 100%;
  padding: 42px 48px;
  text-align: center;
  color: ${COLORS.color_100};
  background-color: ${COLORS.color_701};
  border-radius: 12px;
  box-shadow: 0px 8px 28px ${COLORS.box_shadow_03};

  @media (max-width: 768px) {
    padding: 24px 24px;
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${COLORS.primary_01};
    `}
`;

const Description = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Medium_18px}
  line-height: 30px;
  margin-bottom: 40px;
`;

const Name = styled.h3`
  ${TYPOGRAPHY.THICCCBOI_Bold_24px};
  margin-bottom: 8px;
`;

const Price = styled.p`
  ${TYPOGRAPHY.DM_Sans_Bold_54px};
  margin-bottom: 4px;
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
`;

const StyledButton = styled(Button)`
  max-width: 404px;
  width: 100%;
`;
