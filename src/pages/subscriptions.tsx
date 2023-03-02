import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, SubscriptionsNo, Codes, Cards } from "@/components";
import { CardSkeleton } from "@/components";
import { ERROR_MESSAGE } from "@/constants";
import {
  getSubscriptions,
  setCurrentSubscriptionId,
  setSubscriptions,
  setUpgradeSubscriptionId,
  getCurrentSubscriptionId,
  logout,
} from "@/redux/ducks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ErrorApi, getSubscribeSelf } from "@/services";
import { Button } from "@/ui";
import { getSubscriptionsSortById } from "@/utils/functions";
import { withAuth } from "@/utils/hocs/withAuth";

function Subscriptions() {
  const [isCodesVisible, setIsCodesVisible] = useState(false);
  const [hasCards, setHasCards] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const currentSubscribeId = useAppSelector(getCurrentSubscriptionId());

  const subscriptions = Object.values(useAppSelector(getSubscriptions()));
  const subscriptionsSort = getSubscriptionsSortById(subscriptions);

  const router = useRouter();
  const nodeRef = React.useRef(null);

  const handleClickViewCodes = () => {
    setIsCodesVisible((prev) => !prev);
  };

  const handleChangeSubscribe = (id: number) => {
    dispatch(setCurrentSubscriptionId(id));
  };

  const handleUpgradeSubscribe = () => {
    if (currentSubscribeId) {
      dispatch(setUpgradeSubscriptionId(currentSubscribeId));
      router.push("/");
    }
  };

  useEffect(() => {
    if (subscriptions && subscriptions.length > 0) {
      setHasCards(true);
    }
  }, [subscriptions]);

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const subscriptions = await getSubscribeSelf();
        dispatch(setSubscriptions(subscriptions));
      } catch (err) {
        const error = err as ErrorApi;

        if (error.response?.status === 401) {
          router.push("/login");
          dispatch(logout());
        }

        if (error.response?.status !== 401) {
          toast(ERROR_MESSAGE.somethingWrong);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchSubscriptions();
  }, [router, dispatch]);

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
                onClick={handleUpgradeSubscribe}
                isDisabled={!currentSubscribeId}
              />
            )}
          </WrapTitle>

          {isLoading ? (
            <WrapSkeleton>
              {Array.from(Array(3)).map((_, index) => (
                <StyledSkeletonCard key={index} />
              ))}
            </WrapSkeleton>
          ) : subscriptions ? (
            <>
              <Cards
                onClickViewCodes={handleClickViewCodes}
                subscriptions={subscriptionsSort}
                onChangeSubscribe={handleChangeSubscribe}
              />

              <CSSTransition
                nodeRef={nodeRef}
                in={isCodesVisible}
                classNames="burger__menu"
                timeout={500}
                unmountOnExit
              >
                <div ref={nodeRef}>
                  <Codes />
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

const WrapSkeleton = styled.div`
  display: flex;
  column-gap: 28px;
  margin-right: -86px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const StyledSkeletonCard = styled(CardSkeleton)`
  flex: 0 0 auto;
  @media (max-width: 768px) {
    width: 318px;
    height: 269px;
  }
`;
