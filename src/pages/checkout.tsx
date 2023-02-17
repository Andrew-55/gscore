import Head from "next/head";
import React from "react";

import { Checkout, Layout, LayoutComeIn } from "@/components";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <LayoutComeIn namePage="CHECKOUT">
          <Checkout />
        </LayoutComeIn>
      </Layout>
    </>
  );
}
