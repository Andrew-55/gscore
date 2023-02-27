import Head from "next/head";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { getSubscribeSelf } from "@/api";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, SubscriptionsNo, Codes, Cards } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/user";
import { Button } from "@/ui";

import { MY_SUBSCRIPTIONS } from "../stoge";

function Subscriptions() {
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const [isCodesVisible, setIsCodesVisible] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const nodeRef = React.useRef(null);
  const token = useAppSelector(getToken);

  const countCards = MY_SUBSCRIPTIONS.length;
  const hasCards = countCards > 0;

  const handleViewCodes = (currentCard: number) => {
    setCurrentCard(currentCard);
    setIsCodesVisible((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Subscriptions</title>
      </Head>
      <Layout>
        <Main>
          <WrapTitle>
            <Title>My subscriptions</Title>

            {hasCards && (
              <StyledButtonTitle
                text="Upgrade"
                variant="primary"
                onClick={() => setIsUpdateOn((prev) => !prev)}
                isDisabled={!isCodesVisible}
              />
            )}
          </WrapTitle>

          {hasCards ? (
            <>
              <Cards onViewCodes={handleViewCodes} />

              <CSSTransition
                nodeRef={nodeRef}
                in={isCodesVisible}
                classNames="burger__menu"
                timeout={1000}
                unmountOnExit
              >
                <div ref={nodeRef}>
                  <Codes id={currentCard} isUpdateOn={isUpdateOn} />
                </div>
              </CSSTransition>
            </>
          ) : (
            <SubscriptionsNo />
          )}
        </Main>
      </Layout>
    </>
  );
}

export default withAuth(Subscriptions);

const Main = styled.div`
  padding: 32px 86px 120px 86px;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 24px 16px 60px 16px;
    row-gap: 32px;
  }
`;

const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Title = styled.h1`
  ${TYPOGRAPHY.THICCCBOI_Bold_54px};

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  }
`;

const StyledButtonTitle = styled(Button)`
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
