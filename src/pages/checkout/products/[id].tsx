import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { getProduct } from "@/api/slice";
import { Checkout, Layout, LayoutComeIn } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/token";
import { CheckoutItemType } from "@/types";

export default function CheckoutProduct() {
  const [checkoutItem, setCheckoutItem] = useState<CheckoutItemType>();
  const router = useRouter();
  const toren = useAppSelector(getToken);
  const { id } = router.query;

  if (toren === "") {
    router.push("/login");
  }

  useEffect(() => {
    async function fetchProduct() {
      try {
        const product = await getProduct(toren, Number(id));

        if (product) {
          const checkoutItem = (() => {
            return {
              id: product.id,
              name: product.name,
              price: product.prices
                .reduce(
                  (accumulator, currentValue) =>
                    accumulator + Number(currentValue.price),
                  0
                )
                .toString(),
            };
          })();
          setCheckoutItem(checkoutItem);
        }
      } catch (error) {}
    }
    fetchProduct();
  }, [toren, id]);

  console.log(id);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <LayoutComeIn>
          {checkoutItem && (
            <Checkout
              id={checkoutItem.id}
              name={checkoutItem.name}
              price={checkoutItem.price}
            />
          )}
        </LayoutComeIn>
      </Layout>
    </>
  );
}
