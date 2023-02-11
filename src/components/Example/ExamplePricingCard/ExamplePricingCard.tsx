import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard } from "@/components/PricingCard";

export const ExamplePricingCard = () => {
  return (
    <Root>
      <Title>Pricing Card</Title>
      <PricingCard name="Single site license" price="77" sitesCount={1} />
      <PricingCard name="3 Site license" price="117" sitesCount={3} isActive />
      <PricingCard name="10 Site license" price="167" sitesCount={10} />
    </Root>
  );
};

const Root = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;
