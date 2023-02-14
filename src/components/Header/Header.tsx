import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { HeaderDesktop } from "./components/HeaderDesktop";
import { HeaderMobile } from "./components/HeaderMobile";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const username = "Alex";

  let isMobileSize = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(isMobileSize);
  }, [isMobileSize]);

  return (
    <>
      {isMobile ? (
        <HeaderMobile username={username} />
      ) : (
        <HeaderDesktop username={username} />
      )}
    </>
  );
};
