import Head from "next/head";
import React from "react";

import { Layout, LayoutComeIn } from "@/components";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <LayoutComeIn>{}</LayoutComeIn>
      </Layout>
    </>
  );
}
