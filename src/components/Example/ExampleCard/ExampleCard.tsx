import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Card } from "@/components/Card";

export const ExampleCard = () => {
  const title = "Gscore";

  return (
    <Root>
      <Title>Cards</Title>
      <Card
        title={title}
        status="active"
        typeLicense="Single site license"
        price="77"
        validUntil={new Date(2023, 11, 15)}
      />
      <Card
        title={title}
        status="active"
        typeLicense="Single site license"
        price="77"
        validUntil={new Date(2023, 11, 15)}
        isDisabled
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
