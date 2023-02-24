import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgArrowRight } from "@/assets/svg";
import { Card } from "@/components";
import { SubscriptionType } from "@/types";
import { ButtonIcon } from "@/ui";
import { useSwitchComponent } from "@/utils/hooks";

interface Props {
  subscriptions: SubscriptionType[];
  onViewCodes: () => void;
  onChangeSubscribe: (id: number) => void;
}

export const Cards: FC<Props> = ({
  subscriptions,
  onViewCodes,
  onChangeSubscribe,
}) => {
  const [currentCard, setCurrentCard] = useState(0);
  const newRef = React.useRef(null);

  const countCards = subscriptions.length;
  const isDisabledButtonLeft = currentCard === 0;
  const isDisabledButtonRigth = currentCard === countCards - 1;

  const handleCurrentCardRigth = () => {
    const newCurrentCard = currentCard + 1;
    setCurrentCard(newCurrentCard);
    onChangeSubscribe(subscriptions[newCurrentCard].id);
  };

  const handleCurrentCardLeft = () => {
    const newCurrentCard = currentCard - 1;
    setCurrentCard(newCurrentCard);
    onChangeSubscribe(subscriptions[newCurrentCard].id);
  };

  const handleMove = (isMoveLeft: boolean) => {
    if (isMoveLeft && currentCard < countCards - 1) {
      handleCurrentCardRigth();
    }

    if (!isMoveLeft && currentCard > 0) {
      handleCurrentCardLeft();
    }
  };

  useSwitchComponent(newRef, handleMove);

  return (
    <>
      <WrapCard $currentCard={currentCard} ref={newRef}>
        {subscriptions.map((subscription, index) => (
          <Card
            key={subscription.id}
            id={subscription.id}
            name={subscription.product.name}
            status={subscription.status}
            currentPeriodEnd={subscription.currentPeriodEnd}
            price={subscription.product.prices
              .reduce(
                (accumulator, currentValue) =>
                  accumulator + Number(currentValue.price),
                0
              )
              .toString()}
            isDisabled={index !== currentCard}
            onViewCodes={onViewCodes}
          />
        ))}
      </WrapCard>
      <SwitchCard>
        <StyledButtonIcon
          icon={<StyledSvgArrowLeft />}
          isDisabled={isDisabledButtonLeft}
          onClick={handleCurrentCardLeft}
        />
        <SwitchCardInfo>
          {currentCard + 1}
          <span>/{countCards}</span>
        </SwitchCardInfo>
        <StyledButtonIcon
          icon={<SvgArrowRight />}
          isDisabled={isDisabledButtonRigth}
          onClick={handleCurrentCardRigth}
        />
      </SwitchCard>
    </>
  );
};

const WrapCard = styled.ul<{ $currentCard: number }>`
  --widthCard: -648px;
  cursor: pointer;
  display: flex;
  column-gap: 28px;
  margin-right: -86px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
    --widthCard: -338px;
  }

  ${({ $currentCard }) =>
    css`
      transform: translateX(calc(var(--widthCard) * ${$currentCard}));
      transition: transform 0.5s linear;
    `}
`;

const SwitchCard = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  padding: 10px;
  justify-content: center;
  border: 1px solid ${COLORS.color_500};

  &:hover,
  &:focus {
    border: 1px solid ${COLORS.red_400};
    stroke: ${COLORS.primary_01};
    transition: all 0.3s ease-out;
  }
  &:focus {
    box-shadow: 0 0 0 4px ${COLORS.btn_border_primary};
  }
  &:active {
    border: 1px solid ${COLORS.red_400};
    stroke: ${COLORS.red_400};
  }

  &:disabled {
    border: 1px solid ${COLORS.color_700};
    stroke: ${COLORS.color_700};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const StyledSvgArrowLeft = styled(SvgArrowRight)`
  transform: scale(-1, 1);
`;

const SwitchCardInfo = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  & > span {
    color: ${COLORS.color_700};
  }
`;
