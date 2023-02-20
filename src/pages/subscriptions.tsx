import Head from "next/head";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { CSSTransition } from "react-transition-group";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgArrowRight } from "@/assets/svg";
import { Layout, Card, Code } from "@/components";
import { Button, ButtonIcon } from "@/ui";
import { useSwitchComponent } from "@/utils/hooks";

import { MY_SUBSCRIPTIONS } from "../stoge";

export default function Subscriptions() {
  const [updateDisabled, setUpdateDisabled] = useState(true);
  const [isCodesVisible, setIsCodesVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const nodeRef = React.useRef(null);
  const newRef = React.useRef(null);

  const countCard = MY_SUBSCRIPTIONS.length;
  let isMobileSize = useMediaQuery({ query: "(max-width: 768px)" });
  let widthCard = isMobileSize ? 318 : 620;
  let valueMove = `${-(widthCard + 28) * currentCard}px`;

  const handleMove = (moveLeft: boolean) => {
    if (moveLeft && currentCard < countCard - 1) {
      setCurrentCard((prev) => prev + 1);
    }

    if (!moveLeft && currentCard > 0) {
      setCurrentCard((prev) => prev - 1);
    }
  };

  useSwitchComponent(newRef, handleMove);

  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <Layout>
        <Main>
          <WrapTitle>
            <Title>My subscriptions</Title>
            <StyledButton
              text="Upgrade"
              variant="primary"
              onClick={() => setUpdateDisabled((prev) => !prev)}
              isDisabled={!isCodesVisible}
            />
          </WrapTitle>
          <WrapCard $valueMove={valueMove} ref={newRef}>
            {MY_SUBSCRIPTIONS.map((subscription, index) => (
              <Card
                key={subscription.id}
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
                onClick={() => setIsCodesVisible((prev) => !prev)}
              />
            ))}
          </WrapCard>
          <SwitchCard>
            <StyledButtonIcon
              icon={<StyledSvgArrowLeft />}
              isDisabled={currentCard === 0}
              onClick={() => setCurrentCard(currentCard - 1)}
            />
            <SwitchCardInfo>
              {currentCard + 1}
              <span>/{countCard}</span>
            </SwitchCardInfo>
            <StyledButtonIcon
              icon={<SvgArrowRight />}
              isDisabled={currentCard === countCard - 1}
              onClick={() => setCurrentCard(currentCard + 1)}
            />
          </SwitchCard>

          <CSSTransition
            nodeRef={nodeRef}
            in={isCodesVisible}
            classNames="burger__menu"
            timeout={1000}
            unmountOnExit
          >
            <WrapCode ref={nodeRef}>
              {MY_SUBSCRIPTIONS[currentCard].codes.map((code) => (
                <Code
                  key={code.id}
                  code={code.code}
                  status={code.status}
                  origin={code.origin || ""}
                  isDisabled={updateDisabled}
                />
              ))}
            </WrapCode>
          </CSSTransition>
        </Main>
      </Layout>
    </>
  );
}

const Main = styled.main`
  padding: 32px 86px;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 24px 16px;
    row-gap: 16px;
  }
`;

const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 44px;
`;

const Title = styled.h1`
  ${TYPOGRAPHY.THICCCBOI_Bold_54px};

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  }
`;

const StyledButton = styled(Button)`
  max-width: 152px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_16px};
    padding: 4px 10px;
    max-width: fit-content;
    color: ${COLORS.primary_01};
    background-color: ${COLORS.transparent};

    &:hover,
    &:focus {
      color: ${COLORS.red_400};
      background-color: ${COLORS.transparent};
      transition: all 0.3s ease-out;
    }

    &:active {
      color: ${COLORS.red_400};
      background-color: ${COLORS.btn_border_primary};
    }
  }
`;

const WrapCard = styled.div<{ $valueMove: string }>`
  cursor: pointer;
  display: flex;
  column-gap: 28px;
  margin-right: -86px;
  ${({ $valueMove }) =>
    css`
      transform: translateX(${$valueMove});
      transition: transform 0.5s linear;
    `}
`;

const SwitchCard = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;

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

const WrapCode = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;
