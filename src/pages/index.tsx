import Head from "next/head";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard } from "@/components";
import { Layout } from "@/components";

export default function Home() {
  //такой ответ придет с сервера
  const products = [
    {
      id: 1,
      sitesCount: 1,
      name: "One cite",
      prices: [
        {
          id: 1,
          isActive: true,
          productId: 1,
          price: "46",
        },
      ],
    },
    {
      id: 2,
      sitesCount: 3,
      name: "Three cites",
      prices: [
        {
          id: 2,
          isActive: true,
          productId: 2,
          price: "85",
        },
      ],
    },
    {
      id: 3,
      sitesCount: 7,
      name: "Seven sites",
      prices: [
        {
          id: 3,
          isActive: true,
          productId: 3,
          price: "107",
        },
      ],
    },
  ];

  const pricingCards = products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      sitesCount: product.sitesCount,
      price: product.prices
        .reduce(
          (accumulator, currentValue) =>
            accumulator + Number(currentValue.price),
          0
        )
        .toString(),
    };
  });

  const handleClickButton = (id: number) => {
    console.warn(id);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Main>
          <Title>Get started with Gscore today!</Title>

          <WrapPricingCard horizontal hideScrollbars={false}>
            {pricingCards.map((card) => {
              return (
                <PricingCard
                  key={card.id}
                  id={card.id}
                  name={card.name}
                  sitesCount={card.sitesCount}
                  price={card.price}
                  onClickButton={handleClickButton}
                />
              );
            })}
          </WrapPricingCard>

          <Question>
            <p>Have more than 10 sites?</p>
            <StyledLink
              href="https://www.purrweb.com/"
              target="_blank"
              rel="noreferrer"
            >
              Contact us
            </StyledLink>
          </Question>
        </Main>
      </Layout>
    </>
  );
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

const WrapPricingCard = styled(ScrollContainer)`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  column-gap: 20px;
  margin-bottom: 32px;
  padding-top: 50px;
  padding-bottom: 20px;

  @media (max-width: 768px) {
    padding-top: 0px;
  }

  & > div:nth-child(2) {
    background-color: ${COLORS.primary_01};
    margin-top: -50px;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }

    & svg {
      stroke: ${COLORS.primary_01};
    }
  }
`;

const Question = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Regular_18px};

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
`;

const StyledLink = styled.a`
  border-bottom: 1px solid ${COLORS.transparent};
  color: ${COLORS.primary_01};

  &:hover,
  &:focus {
    color: ${COLORS.red_400};
  }
`;
