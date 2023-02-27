import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { toast } from "react-toastify";
import styled from "styled-components";

import { ErrorApi } from "@/api";
import { getProducts } from "@/api";
import { ERROR_MESSAGE } from "@/assets/message";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard, Layout } from "@/components";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  getPricingCards,
  setCurrentCardId,
  setPricingCardsToStore,
} from "@/redux/pricingCard";
import { ProductType } from "@/redux/pricingCard";
import { getToken } from "@/redux/user";
import { getProductPrice } from "@/utils/functions";

interface Props {
  productsMock: ProductType[];
}

const Home: FC<Props> = ({ productsMock }) => {
  const [hasPricingCards, sethasPricingCards] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pricingCards = useAppSelector(getPricingCards());
  const token = useAppSelector(getToken);

  const pricingCardsMock = productsMock.map((product) => {
    return {
      id: product.id,
      name: product.name,
      sitesCount: product.sitesCount,
      price: getProductPrice(product.prices),
    };
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        const pricingCards = products.map((product) => {
          return {
            id: product.id,
            name: product.name,
            sitesCount: product.sitesCount,
            price: getProductPrice(product.prices),
          };
        });

        dispatch(setPricingCardsToStore(pricingCards));
        sethasPricingCards(true);
      } catch (err) {
        const error = err as ErrorApi;

        if (error.response?.status === 401) {
          router.push("/login");
          toast(ERROR_MESSAGE.needLogin);
        }
      }
    }
    if (token) {
      fetchProducts();
    }
  }, [dispatch, token, router]);

  const handleClickButton = (id: number) => {
    dispatch(setCurrentCardId(id));
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

          {hasPricingCards ? (
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
          ) : (
            <WrapPricingCard horizontal hideScrollbars={false}>
              {pricingCardsMock.map((card) => {
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
};

export default Home;

export async function getStaticProps() {
  const productsMock = [
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

  return {
    props: { productsMock },
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
