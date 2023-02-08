import Link from "next/link";
import React, { FC, useState } from "react";
import styled, { css } from "styled-components";

import { COLORS, TYPOGRAPHY, Z_INDEX } from "@/assets/styles";
import {
  SvgChevronRight,
  SvgClose,
  SvgLogoIcon,
  SvgLogout,
  SvgSettings,
  SvgTextLogo,
} from "@/assets/svg";
import { ButtonIcon } from "@/ui";

interface Props {
  username?: string;
  onClose: () => void;
}

export const MobileBurgerMenu: FC<Props> = ({ username, onClose }) => {
  const [isSettings, setIsSettings] = useState(false);

  return (
    <Root>
      <MobilePopUp>
        <WrapLogo>
          <ButtonIcon icon={<SvgClose />} onClick={onClose} />
          <Logo>
            <SvgLogoIcon width={32} height={32} />
            <SvgTextLogo width={88} height={17} />
          </Logo>
        </WrapLogo>
        <WrapLink>
          <Link href="/subscriptions">My subscriptions</Link>
        </WrapLink>
        <Settings>
          <StyledButtonIcon
            text={username}
            icon={<StyledSvgChevron $isSettings={isSettings} strokeWidth={3} />}
            onClick={() => setIsSettings((prev) => !prev)}
          />
          {isSettings && (
            <SettingsContent>
              <Link href="/settings">
                <Wrap>
                  <SvgSettings
                    width={20}
                    height={20}
                    stroke={COLORS.color_500}
                  />
                  Settings
                </Wrap>
              </Link>
              <Link href="/login">
                <Wrap>
                  <SvgLogout width={20} height={20} stroke={COLORS.color_500} />
                  Logout
                </Wrap>
              </Link>
            </SettingsContent>
          )}
        </Settings>
      </MobilePopUp>
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${COLORS.black1};
  z-index: ${Z_INDEX.headerPopUp};
`;

const MobilePopUp = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: 0;
  width: 70%;
  height: 100%;
  padding: 28px 24px;
  background-color: ${COLORS.color_701};
  color: ${COLORS.color_100};
  ${TYPOGRAPHY.THICCCBOI_Medium_16px}
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const WrapLogo = styled.div`
  display: flex;
  column-gap: 32px;
  margin-bottom: 48px;
`;

const WrapLink = styled.div`
  margin-bottom: 20px;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  width: 100%;
`;

const Settings = styled.div`
  padding: 20px 0;
  border-top: 1px solid ${COLORS.color_700};
  border-bottom: 1px solid ${COLORS.color_700};
`;

const SettingsContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  margin-top: 28px;
  color: ${COLORS.color_500};
  stroke: ${COLORS.color_500};
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const StyledSvgChevron = styled(SvgChevronRight)<{ $isSettings?: boolean }>`
  transform: rotate(90deg);
  height: 14px;
  width: 7px;
  ${({ $isSettings }) =>
    $isSettings &&
    css`
      transform: rotate(-90deg);
    `}
`;
