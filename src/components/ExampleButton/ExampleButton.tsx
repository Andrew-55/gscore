import styled from "styled-components";

import { COLORS } from "@/assets/styles/constants/colors";
import { SvgLoadingRing } from "@/assets/svg/SvgLoadingRing/SvgLoadingRing";
import { Button } from "@/ui";

export const ExampleButton = () => {
  return (
    <Root>
      <WrapButton>
        <InitialPrimaryButton text="Default" variant="primary" />
        <InitialPrimaryButton
          text="Some too long text entered"
          variant="primary_active"
        />
        <InitialPrimaryButton
          variant="primary_loading"
          isLoading={true}
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton
          text="Default"
          variant="primary"
          disabled={true}
        />
      </WrapButton>
      <WrapButton>
        <InitialPrimaryButton text="Default" variant="secondary" />
        <InitialPrimaryButton
          text="Some too long text entered"
          variant="secondary_active"
        />
        <InitialPrimaryButton
          variant="secondary_loading"
          icon={<SvgLoadingRing width={18} height={18} />}
        />
        <InitialPrimaryButton
          text="Default"
          variant="secondary"
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
