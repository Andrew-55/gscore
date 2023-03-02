import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { SvgShoppingBasket } from "@/assets/svg";
import { ERROR_MESSAGE } from "@/constants";
import { removeUpgradeSubscriptionId } from "@/redux/ducks";
import { useAppDispatch } from "@/redux/hooks";
import { changeSubscribe, ErrorApi, buySubscribe } from "@/services";
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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const hasSubscribeId = typeof subscribeId === "number";

  const handlePurchase = async () => {
    try {
      setIsLoading(true);
      const data = await buySubscribe(id);
      if (data) {
        setIsLoading(false);
        router.push("/subscriptions");
      }
    } catch (err) {
      setIsLoading(false);
      const error = err as ErrorApi;
      if (error) {
        toast(ERROR_MESSAGE.somethingWrong);
      }
    }
  };

  const handleUpgrade = async () => {
    if (hasSubscribeId) {
      try {
        setIsLoading(true);
        const data = await changeSubscribe(id, subscribeId);
        if (data) {
          dispatch(removeUpgradeSubscriptionId());
          router.push("/subscriptions");
        }
      } catch (err) {
        setIsLoading(false);
        const error = err as ErrorApi;
        if (error.response?.status == 409) {
          toast(ERROR_MESSAGE.sameProduct);
        }
      }
    }
  };

  return (
    <div>
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

      {hasSubscribeId ? (
        <StyledButton
          text="Upgrade"
          variant="primary"
          onClick={handleUpgrade}
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      ) : (
        <StyledButton
          text="Purchase"
          variant="primary"
          onClick={handlePurchase}
          isLoading={isLoading}
          isDisabled={isLoading}
        />
      )}
    </div>
  );
};

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
