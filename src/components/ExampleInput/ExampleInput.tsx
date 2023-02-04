import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Input } from "@/ui";

export const ExampleInput = () => {
  return (
    <Root>
      <Title>Inputs</Title>
      <WrapInput>
        <Input placeholder="Placeholder" />
        <Input placeholder="Placeholder" defaultValue="Some text" />
        <Input placeholder="Placeholder" defaultValue="Some text" isDisabled />
        <Input placeholder="Placeholder" defaultValue="Some text" isSusccess />
        <Input
          placeholder="Placeholder"
          defaultValue="Some text"
          isError
          errorMessage="Erron text"
        />
      </WrapInput>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  column-gap: 30px;
  padding: 20px;
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
  margin-bottom: 20px;
`;

const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 40%;
`;
