import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import { ErrorApi } from "@/api";
import { getSubscribeSelf } from "@/api";
import { ERROR_MESSAGE } from "@/assets/message";
import { SkeletonCard } from "@/assets/skeletons/SkeletonCard";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout, SubscriptionsNo, Codes, Cards } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { CodeType } from "@/redux/codes";
import { useAppDispatch } from "@/redux/hooks";
import { ProductType } from "@/redux/pricingCard";
import { logout } from "@/redux/user";
import { Button } from "@/ui";

export type SubscriptionType = {
  id: number;
  userId: number;
  productId: number;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  status: string;
  product: ProductType;
  codes: CodeType[];
};

function Subscriptions() {
  const [isUpdateOn, setIsUpdateOn] = useState(false);
  const [isCodesVisible, setIsCodesVisible] = useState(false);
  const [subscriptions, setSubscriptions] = useState<SubscriptionType[]>();
  const [currentSubscribeId, setCurrentSubscribeId] = useState<number>();
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const nodeRef = React.useRef(null);

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
        const subscriptions = await getSubscribeSelf();
        setSubscriptions(subscriptions);
        setCurrentSubscribeId(subscriptions[0].id);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const error = err as ErrorApi;

        if (error.response?.status === 401) {
          router.push("/login");
          dispatch(logout());
        }

        if (error.response?.status !== 401) {
          toast(ERROR_MESSAGE.somethingWrong);
        }
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
            <WrapSkeleton>
              <StyledSkeletonCard />
              <StyledSkeletonCard />
              <StyledSkeletonCard />
            </WrapSkeleton>
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

const StyledSkeletonCard = styled(SkeletonCard)`
  flex: 0 0 auto;
  @media (max-width: 768px) {
    width: 318px;
    height: 269px;
  }
`;
