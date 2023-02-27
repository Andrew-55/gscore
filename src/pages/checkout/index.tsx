import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Layout, LayoutComeIn } from "@/components";
import { withAuth } from "@/hoc/withAuth";
import { useAppSelector } from "@/redux/hooks";
import { getCurrentCartId } from "@/redux/pricingCard";
import { Button } from "@/ui";

function CheckoutPage() {
  const curretnCardId = useAppSelector(getCurrentCartId());
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    if (curretnCardId) {
      router.push(`/checkout/products/${curretnCardId}`);
    }
  }, [curretnCardId, router]);

  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <Layout>
        <LayoutComeIn>
          <Root>
            <Info>{`You didn't choose a product`}</Info>
            <Description>
              You can choose right now by clicking on the button below
            </Description>
            <StyledButton
              text="Get Gscore"
              variant="primary"
              onClick={handleClick}
            />
          </Root>
        </LayoutComeIn>
      </Layout>
    </>
  );
}

export default withAuth(CheckoutPage);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 32px;
`;

const Info = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px}
  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_20px}
  }
`;

const Description = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_18px}
  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Regular_16px}
  }
`;

const StyledButton = styled(Button)`
  max-width: 164px;
  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
