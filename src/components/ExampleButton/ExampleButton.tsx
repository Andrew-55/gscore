import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Button } from "@/ui";

export const ExampleButton = () => {
  return (
    <Root>
      <Title>Buttons</Title>
      <WrapButton>
        <Button text="Default" variant="primary" />
        <Button text="Some too long text entered" variant="primary" />
        <Button variant="primary" isLoading />
        <Button text="Default" variant="primary" isDisabled />
      </WrapButton>
      <WrapButton>
        <Button text="Default" variant="secondary" />
        <Button text="Some too long text entered" variant="secondary" />
        <Button variant="secondary" isLoading />
        <Button text="Default" variant="secondary" isDisabled />
      </WrapButton>
    </Root>
  );
};

const Root = styled.div`
  width: min-content;
  display: flex;
  column-gap: 30px;
  padding: 20px;
  background-color: ${COLORS.color_800};
`;

const Title = styled.h2`
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.Inter_Semi_Bold_24px}
`;

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
