import styled from "styled-components";

import { Button } from "@/ui";
import { VARIANT } from "@/ui/Button/Button";

export const ExampleButton = () => {
  return (
    <Root>
      <InitialPrimaryButton text="Default" variant={VARIANT.PRIMARY} />
      <InitialPrimaryButton
        text="Default"
        variant={VARIANT.PRIMARY}
        isActive={true}
      />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
`;

const InitialPrimaryButton = styled(Button)`
  max-width: 200px;
`;
