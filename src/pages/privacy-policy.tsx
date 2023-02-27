import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Layout } from "@/components";

interface Props {
  title: string;
  content: string;
}

const PrivacyPolicy: FC<Props> = ({ title, content }) => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Layout>
        <Main>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </Main>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;

export async function getStaticProps() {
  const title = "Privacy policy";
  const content =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium impedit repudiandae reiciendis fuga quisquam perferendis quis possimus exercitationem quo nobis velit dolores qui id fugiat perspiciatis, vel repellat! Qui, eius.";

  return {
    props: { title, content },
  };
}

const Main = styled.main`
  padding: 16px 86px;

  @media (max-width: 1200px) {
    padding: 16px 32px;
  }

  @media (max-width: 768px) {
    padding: 16px 16px;
  }
`;

const Title = styled.h1`
  ${TYPOGRAPHY.THICCCBOI_Bold_44px};
  margin-bottom: 48px;
  text-align: center;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  }
`;

const Content = styled.article`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px};

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_20px};
  }
`;
