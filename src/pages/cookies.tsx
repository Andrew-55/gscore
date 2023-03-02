import axios from "axios";
import Head from "next/head";
import { FC } from "react";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Layout } from "@/components";

type Pizza = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

interface Props {
  pizza: Pizza[];
}

const Cookies: FC<Props> = ({ pizza }) => {
  return (
    <>
      <Head>
        <title>Cookies</title>
      </Head>
      <Layout>
        <Main>
          <Title>Very Big Cookies</Title>
          <Content>
            {pizza.map((item) => (
              <StyledPizza key={item.id}>
                <TitlePizza>{item.title}</TitlePizza>
                <StyledImg
                  src={item.imageUrl}
                  alt="pizza"
                  width={100}
                  height={100}
                />
                <PizzaInfo>
                  <span>⭐{item.rating}</span>
                  <span>{item.price}р</span>
                </PizzaInfo>
              </StyledPizza>
            ))}
          </Content>
        </Main>
      </Layout>
    </>
  );
};

export default Cookies;

export const getStaticProps = async () => {
  const { data } = await axios.get<Pizza[]>(
    `https://6353c277e64783fa82783516.mockapi.io/items`
  );

  return {
    props: { pizza: data },
  };
};

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

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  ${TYPOGRAPHY.THICCCBOI_Bold_28px};

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_20px};
  }
`;

const StyledPizza = styled.div`
  flex: 0 0 auto;
  max-width: 300px;
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  border: 1px solid ${COLORS.color_600};
  border-radius: 25px;
`;

const PizzaInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitlePizza = styled.h3`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const StyledImg = styled.img`
  border-radius: 20px;
`;
