import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";

import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/user";

export const withAuth = (Component: React.ComponentType) => {
  const Wrapper = () => {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const token = useAppSelector(getToken);

    useLayoutEffect(() => {
      if (token) {
        setIsAuth(true);
      } else {
        router.push("/login");
      }
    }, [token, router]);

    return isAuth ? <Component /> : null;
  };
  return Wrapper;
};
