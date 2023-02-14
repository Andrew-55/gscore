import Head from "next/head";
import styled from "styled-components";

import { Layout } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gscore</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Root>
          <h1>Home</h1>
        </Root>
      </Layout>
    </>
  );
}

const Root = styled.div`
  padding: 30px 86px;
`;
