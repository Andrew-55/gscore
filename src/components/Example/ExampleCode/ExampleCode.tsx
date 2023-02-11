import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Code } from "@/components/Code";

export const ExampleCode = () => {
  return (
    <Root>
      <Title>Code</Title>
      <Code
        status="ACTIVE"
        code="sl=ru&tl=en&texte=%D0..."
        origin="https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0..."
        isDisabled
      />
      <Code
        status="INACTIVE"
        code="sl=ru&tl=en&texte=%D0..."
        origin="https://translate.google.com/?sl=rru&tl=enn&ten&tu&tl=enn&ten&te&t=%D0..."
        isDisabled
      />
    </Root>
  );
};

const Root = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;
