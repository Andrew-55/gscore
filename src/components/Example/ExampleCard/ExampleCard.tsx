import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Card } from "@/components/Card";

export const ExampleCard = () => {
  return (
    <Root>
      <Title>Cards</Title>
      <Card
        name="Single site license"
        status="ACTIVE"
        price="77"
        currentPeriodEnd="15.11.2023"
      />
      <Card
        name="Single site license"
        status="ACTIVE"
        isDisabled
        price="77"
        currentPeriodEnd="15.11.2023"
      />
    </Root>
  );
};

const Root = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;
