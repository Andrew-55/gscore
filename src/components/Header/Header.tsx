import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { getUser, logout } from "@/redux/ducks";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";

import { HeaderDesktop } from "./components/HeaderDesktop";
import { HeaderMobile } from "./components/HeaderMobile";

export const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector(getUser);

  let isMobileSize = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  useEffect(() => {
    setIsMobile(isMobileSize);
  }, [isMobileSize]);

  const handleClickLogout = () => {
    dispatch(logout());
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
