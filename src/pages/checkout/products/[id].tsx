import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { Checkout, IsAuth, Layout, LayoutComeIn } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { getPricingCardById } from "@/redux/pricingCard";
import { CheckoutItemType } from "@/types";

export default function CheckoutProduct() {
  const [checkoutCard, setCheckoutCard] = useState<CheckoutItemType>();
  const router = useRouter();
  const { id } = router.query;
  const checkoutItem = useAppSelector(getPricingCardById(Number(id)));

  useEffect(() => {
    if (checkoutItem) {
      setCheckoutCard(checkoutItem);
    }
  }, [checkoutItem, id]);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <IsAuth>
          <LayoutComeIn>
            {checkoutCard && (
              <Checkout
                id={checkoutCard.id}
                name={checkoutCard.name}
                price={checkoutCard.price}
              />
            )}
          </LayoutComeIn>
        </IsAuth>
      </Layout>
    </>
  );
}
