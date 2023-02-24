import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

import { TYPOGRAPHY } from "@/assets/styles";
import { Button } from "@/ui";

export const SubscriptionsNo = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <Root>
      <Info>No active subscriptions</Info>
      <Description>
        You can subscribe right now by clicking on the button below
      </Description>
      <StyledButton text="Get Gscore" variant="primary" onClick={handleClick} />
    </Root>
  );
};

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
