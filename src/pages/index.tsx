import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";

import { getProducts } from "@/api/slice";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard } from "@/components";
import { Layout } from "@/components";
import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/token";
import { PricingCardType } from "@/types";

export default function Home() {
  const [pricingCards, setPricingCards] = useState<PricingCardType[]>([]);
  const router = useRouter();
  const toren = useAppSelector(getToken);
  const hasPricingCards = !!pricingCards;

  if (toren === "") {
    router.push("/login");
  }

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts(toren);
        const prcd = products.map((product) => {
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
        setPricingCards(prcd);
      } catch (error) {}
    }
    fetchProducts();
  }, [toren]);

  const handleClickButton = (id: number) => {
    router.push(`checkout/products/${id}`);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Main>
          <Title>Get started with Gscore today!</Title>

          {hasPricingCards && (
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
          )}

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
