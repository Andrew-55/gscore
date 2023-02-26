import Head from "next/head";
import React, { useEffect, useState } from "react";

import { Checkout, Layout, LayoutComeIn } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppSelector } from "@/redux/hooks";
import { getPricingCurrentCard } from "@/redux/pricingCard";
import { CheckoutItemType } from "@/types";

export default withAuth(function CheckoutProduct() {
  const [checkoutCard, setCheckoutCard] = useState<CheckoutItemType>();
  const checkoutItem = useAppSelector(getPricingCurrentCard());

  useEffect(() => {
    if (checkoutItem) {
      setCheckoutCard(checkoutItem);
    }
  }, [checkoutItem]);

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
            />
          )}
        </LayoutComeIn>
      </Layout>
    </>
  );
});
