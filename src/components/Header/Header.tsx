import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { setToken } from "@/redux/token";
import { getUser, setUser } from "@/redux/user";

import { HeaderDesktop } from "./components/HeaderDesktop";
import { HeaderMobile } from "./components/HeaderMobile";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { username } = useAppSelector(getUser);

  let isMobileSize = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    setIsMobile(isMobileSize);
  }, [isMobileSize]);

  const handleClickLogout = () => {
    dispatch(setUser({ id: "", username: "", email: "" }));
    dispatch(setToken(""));
    router.push("/login");
  };

  return (
    <>
      {isMobile ? (
        <HeaderMobile username={username} onClickLogout={handleClickLogout} />
      ) : (
        <HeaderDesktop username={username} onClickLogout={handleClickLogout} />
      )}
    </>
  );
};
