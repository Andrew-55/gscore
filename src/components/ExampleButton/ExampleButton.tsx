import styled from "styled-components";

import { COLORS } from "@/assets/styles/constants/colors";
import { SvgLoadingRing } from "@/assets/svg/SvgLoadingRing/SvgLoadingRing";
import { Button } from "@/ui";
import { VARIANT } from "@/ui/Button/Button";

export const ExampleButton = () => {
  return (
    <Root>
      <WrapButton>
        <InitialPrimaryButton text="Default" variant={VARIANT.PRIMARY} />
        <InitialPrimaryButton
          text="Some too long text entered"
          variant={VARIANT.PRIMARY}
          isActive={true}
        />
        <InitialPrimaryButton
          variant={VARIANT.PRIMARY}
          isLoading={true}
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton
          text="Default"
          variant={VARIANT.PRIMARY}
          disabled={true}
        />
      </WrapButton>
      <WrapButton>
        <InitialPrimaryButton text="Default" variant={VARIANT.SECONDARY} />
        <InitialPrimaryButton
          text="Some too long text entered"
          variant={VARIANT.SECONDARY}
          isActive={true}
        />
        <InitialPrimaryButton
          variant={VARIANT.SECONDARY}
          isLoading={true}
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton
          text="Default"
          variant={VARIANT.SECONDARY}
          disabled={true}
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
