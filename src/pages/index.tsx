import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { toast } from "react-toastify";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard, Layout, PricingCardSkeleton } from "@/components";
import { ERROR_MESSAGE } from "@/constants";
import {
  getPricingCards,
  getProductIdUpgradeSubcription,
  setCurrentCardId,
  setPricingCardsToStore,
} from "@/redux/ducks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getProducts, ErrorApi } from "@/services";
import { getProductPrice } from "@/utils/functions";
import { withAuth } from "@/utils/hocs/withAuth";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasPricingCards, sethasPricingCards] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const pricingCards = useAppSelector(getPricingCards());
  const upgradeProductId = useAppSelector(getProductIdUpgradeSubcription);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [dispatch, router]);

  const handleClickButton = (id: number) => {
    if (id === upgradeProductId) {
      toast(ERROR_MESSAGE.sameProduct);
    } else {
      dispatch(setCurrentCardId(id));
      router.push(`checkout/products/${id}`);
    }
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Layout>
        <Main>
          <Title>Get started with Gscore today!</Title>

          {isLoading ? (
            <WrapPricingCard horizontal hideScrollbars={false}>
              {Array.from(Array(3)).map((_, index) => (
                <StyledSkeletonPricingCard key={index} />
              ))}
            </WrapPricingCard>
          ) : (
            hasPricingCards && (
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
            )
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

export default withAuth(Home);

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
  justify-content: center;
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

const StyledSkeletonPricingCard = styled(PricingCardSkeleton)`
  flex: 0 0 auto;
  @media (max-width: 992px) {
    width: 330px;
    height: 480px;
  }
`;
