import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Checkout, Layout, CheckoutItemType } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import {
  getPricingCurrentCard,
  getUpgradeSubcriptionId,
  removeUpgradeSubscriptionId,
} from "@/redux/ducks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function CheckoutProduct() {
  const [checkoutCard, setCheckoutCard] = useState<CheckoutItemType>();
  const [subscribeId, setSubscribeId] = useState<number>();
  const checkoutItem = useAppSelector(getPricingCurrentCard());
  const upgradeSubcriptionsId = useAppSelector(getUpgradeSubcriptionId());
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (checkoutItem) {
      setCheckoutCard(checkoutItem);
    }
  }, [checkoutItem]);

  useEffect(() => {
    if (upgradeSubcriptionsId) {
      setSubscribeId(upgradeSubcriptionsId);
    }
    return () => {
      dispatch(removeUpgradeSubscriptionId());
    };
  }, [upgradeSubcriptionsId, dispatch]);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <Content>
          {checkoutCard && (
            <Checkout
              id={checkoutCard.id}
              name={checkoutCard.name}
              price={checkoutCard.price}
              subscribeId={subscribeId}
            />
          )}
        </Content>
      </Layout>
    </>
  );
}

export default withAuth(CheckoutProduct);

const Content = styled.div`
  max-width: 652px;
  padding: 32px 16px;
  margin-left: auto;
  margin-right: auto;
`;
