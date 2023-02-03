import styled from "styled-components";

import { COLORS } from "@/assets/styles/constants/colors";
import { SvgLoadingRing } from "@/assets/svg/SvgLoadingRing/SvgLoadingRing";
import { Button } from "@/ui";
import { THEMES } from "@/ui/Button/themes";

export const ExampleButton = () => {
  return (
    <Root>
      <WrapButton>
        <InitialPrimaryButton text="Default" theme={THEMES.primary} />
        <InitialPrimaryButton
          text="Some too long text"
          theme={THEMES.primary}
        />
        <InitialPrimaryButton
          theme={THEMES.primary}
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton text="Default" theme={THEMES.primary} disabled />
      </WrapButton>
      <WrapButton>
        <InitialPrimaryButton text="Default" theme={THEMES.secondary} />
        <InitialPrimaryButton
          text="Some too long text"
          theme={THEMES.secondary}
        />
        <InitialPrimaryButton
          theme={THEMES.secondary}
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton
          text="Default"
          theme={THEMES.secondary}
          disabled
        />
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

const WrapButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const InitialPrimaryButton = styled(Button)`
  width: 105px;
`;
