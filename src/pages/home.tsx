import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { PricingCard } from "@/components";

export default function Home() {
  return (
    <Main>
      <Title>Get started with Gscore today!</Title>
      <WrapPricingCard>
        <PricingCard name="Single site license" price="77" sitesCount={1} />
        <PricingCard
          name="3 Site license"
          price="117"
          sitesCount={3}
          isActive
        />
        <PricingCard name="10 Site license" price="167" sitesCount={10} />
      </WrapPricingCard>
      <Question>Have more than 10 sites?</Question>
      <StyledLink
        href="https://www.purrweb.com/"
        target="_blank"
        rel="noreferrer"
      >
        Contact us
      </StyledLink>
    </Main>
  );
}

const Main = styled.main`
  padding: 16px 86px;
  text-align: center;
`;

const Title = styled.h1`
  ${TYPOGRAPHY.THICCCBOI_Bold_44px};
  margin-bottom: 48px;
`;

const WrapPricingCard = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 32px;
  justify-content: space-around;
`;

const Question = styled.p`
  ${TYPOGRAPHY.THICCCBOI_Regular_18px};
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
  margin-left: 20%;
  ${TYPOGRAPHY.THICCCBOI_Regular_18px};
  color: ${COLORS.primary_01};
`;
