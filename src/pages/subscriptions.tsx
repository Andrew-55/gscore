import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { getSubscribeSelf } from "@/api/slice";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, SubscriptionsNo, Codes, Cards } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/user";
import { SubscriptionType } from "@/types";
import { Button } from "@/ui";

export default withAuth(function Subscriptions() {
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const [isCodesVisible, setIsCodesVisible] = useState(false);
  const [subscriptions, setSubscriptions] = useState<SubscriptionType[]>();
  const [currentSubscribeId, setCurrentSubscribeId] = useState<number>();
  const nodeRef = React.useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const token = useAppSelector(getToken);

  const hasCards = subscriptions && subscriptions.length > 0;

  const handleViewCodes = () => {
    setCurrentSubscribeId(currentSubscribeId);
    setIsCodesVisible((prev) => !prev);
  };

  const handleChangeSubscribe = (id: number) => {
    setCurrentSubscribeId(id);
  };

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        setIsLoading(true);
        const subscriptions = await getSubscribeSelf(token);
        setSubscriptions(subscriptions);
        setCurrentSubscribeId(subscriptions[0].id);
        setIsLoading(false);
      } catch (error) {}
    }
    fetchSubscriptions();
  }, [token]);

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
              <Cards
                onViewCodes={handleViewCodes}
                subscriptions={subscriptions}
                onChangeSubscribe={handleChangeSubscribe}
              />

              {currentSubscribeId && (
                <CSSTransition
                  nodeRef={nodeRef}
                  in={isCodesVisible}
                  classNames="burger__menu"
                  timeout={1000}
                  unmountOnExit
                >
                  <div ref={nodeRef}>
                    <Codes id={currentSubscribeId} isUpdateOn={isUpdateOn} />
                  </div>
                </CSSTransition>
              )}
            </>
          ) : isLoading ? (
            <div>` LOADING.....`</div>
          ) : (
            <SubscriptionsNo />
          )}
        </Main>
      </Layout>
    </>
  );
});

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
