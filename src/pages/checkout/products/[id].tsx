import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Checkout, Layout, LayoutComeIn, CheckoutItemType } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getPricingCurrentCard } from "@/redux/pricingCard";
import {
  getUpgradeSubcriptionId,
  removeUpgradeSubscriptionId,
} from "@/redux/subscriptions";

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
        <LayoutComeIn>
          {checkoutCard && (
            <Checkout
              id={checkoutCard.id}
              name={checkoutCard.name}
              price={checkoutCard.price}
              subscribeId={subscribeId}
            />
          )}
        </LayoutComeIn>
      </Layout>
    </>
  );
}

export default withAuth(CheckoutProduct);
