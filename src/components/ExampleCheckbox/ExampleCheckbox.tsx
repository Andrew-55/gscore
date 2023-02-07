import styled from "styled-components";

import { COLORS, TYPOGRAPHY } from "@/assets/styles";
import { Checkbox } from "@/ui";

export const ExampleCheckbox = () => {
  return (
    <Root>
      <Title>Checkboxes</Title>
      <WrapCheckbox>
        <Checkbox text="First" />
        <Checkbox text="Second" />
        <Checkbox text="Text" isChecked isDisabled />
      </WrapCheckbox>
      <WrapCheckbox>
        <Checkbox text="Some text" />
        <Checkbox />
        <Checkbox text="Some text" isDisabled />
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
  align-items: start;
  justify-items: center;
  flex-direction: column;
`;
