import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Checkbox } from "@/ui";

export const ExampleCheckbox = () => {
  return (
    <Root>
      <Title>Checkboxes</Title>
      <WrapCheckbox>
        <StyledCheckbox />
        <StyledCheckbox />
        <StyledCheckbox isChecked isDisabled />
      </WrapCheckbox>
      <WrapCheckbox>
        <StyledCheckbox />
        <StyledCheckbox />
        <StyledCheckbox isDisabled />
      </WrapCheckbox>
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
`;

const WrapCheckbox = styled.div`
  display: flex;
  row-gap: 15px;
  align-items: center;
  justify-items: center;
  flex-direction: column;
`;

const StyledCheckbox = styled(Checkbox)`
  min-width: 28px;
  min-height: 28px;
`;
