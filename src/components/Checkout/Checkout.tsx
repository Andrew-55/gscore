import { useRouter } from "next/router";
import React, { FC } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { changeSubscribe, ErrorApi } from "@/api";
import { buySubscribe } from "@/api";
import { ERROR_MESSAGE } from "@/assets/message";
import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgShoppingBasket } from "@/assets/svg";
import { useAppDispatch } from "@/redux/hooks";
import { removeUpgradeSubscriptionId } from "@/redux/subscriptions";
import { Button } from "@/ui";

export type CheckoutItemType = {
  id: number;
  name: string;
  price: string;
  subscribeId?: number | undefined;
};

export const Checkout: FC<CheckoutItemType> = ({
  id,
  name,
  price,
  subscribeId,
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlePurchase = async () => {
    try {
      const data = await buySubscribe(id);
      if (data) {
        router.push("/subscriptions");
      }
    } catch (err) {
      const error = err as ErrorApi;

      if (error) {
        toast(ERROR_MESSAGE.somethingWrong);
      }
    }
  };

  const handleUpgrade = async () => {
    if (subscribeId) {
      try {
        const data = await changeSubscribe(id, subscribeId);
        if (data) {
          dispatch(removeUpgradeSubscriptionId());
          router.push("/subscriptions");
        }
      } catch (err) {
        const error = err as ErrorApi;

        if (error.response?.status == 409) {
          toast(ERROR_MESSAGE.sameProduct);
        }
      }
    }
  };
  return (
    <Root>
      <Title>Checkout</Title>
      <Package>
        <PackageHeader>
          <span>Package name</span>
          <span>Price</span>
        </PackageHeader>
        <Line />
        <License>
          <span>{name}</span>
          <WrapPrice>
            <span>${price}</span>
            <SvgShoppingBasket />
          </WrapPrice>
        </License>
      </Package>
      <Total>
        <span>Total:</span>
        <span>${price}</span>
      </Total>
      {!!subscribeId ? (
        <StyledButton
          text="Upgrade"
          variant="primary"
          onClick={handleUpgrade}
        />
      ) : (
        <StyledButton
          text="Purchase"
          variant="primary"
          onClick={handlePurchase}
        />
      )}
    </Root>
  );
};

const Root = styled.div``;

const Title = styled.h3`
  ${TYPOGRAPHY.THICCCBOI_Bold_44px};
  margin-bottom: 32px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  }
`;

const Package = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Regular_24px}
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  border-radius: 12px;
  background-color: ${COLORS.color_701};
  margin-bottom: 24px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Regular_18px};
    padding: 32px 20px;
    row-gap: 24px;
  }
`;

const PackageHeader = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_24px}
  display: grid;
  grid-template-columns: 1fr 90px;
  column-gap: 10px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_18px};
  }
`;

const Line = styled.div`
  height: 1px;
  background-color: ${COLORS.color_500};
  margin-left: -32px;
  margin-right: -32px;

  @media (max-width: 768px) {
    margin-left: -20px;
    margin-right: -20px;
  }
`;

const License = styled.div`
  display: grid;
  grid-template-columns: 1fr 90px;
  column-gap: 10px;
`;

const WrapPrice = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const Total = styled.div`
  ${TYPOGRAPHY.THICCCBOI_Bold_28px};
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    ${TYPOGRAPHY.THICCCBOI_Bold_22px};
  }
`;

const StyledButton = styled(Button)`
  max-width: 200px;

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;
