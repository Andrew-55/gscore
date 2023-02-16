import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard } from "@/components/PricingCard";

export const ExamplePricingCard = () => {
  const handleClickButton = (id: number) => {
    console.warn(id);
  };

  return (
    <Root>
      <Title>Pricing Card</Title>
      <WrapCard>
        <PricingCard
          id={1}
          name="Single site license"
          price="77"
          sitesCount={1}
          onClickButton={handleClickButton}
        />
        <PricingCard
          id={2}
          name="3 Site license"
          price="117"
          sitesCount={3}
          isRed
          onClickButton={handleClickButton}
        />
        <PricingCard
          id={3}
          name="10 Site license"
          price="167"
          sitesCount={10}
          onClickButton={handleClickButton}
        />
      </WrapCard>
    </Root>
  );
};

const Root = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;

const WrapCard = styled.div`
  display: flex;
  gap: 20px;
`;
