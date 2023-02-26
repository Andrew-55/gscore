import { useRouter } from "next/router";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ErrorApi } from "@/api";
import { getUser } from "@/api/slice";
import { useAppSelector } from "@/redux/hooks";
import { getToken, logout } from "@/redux/user";

export const withAuth = (Component: React.ComponentType) => {
  const Wrapper = () => {
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();
    const token = useAppSelector(getToken);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
      if (!token) {
        router.push("/login");
      } else {
        fetchUser();
      }

      async function fetchUser() {
        try {
          const user = await getUser(token);
          if (user) {
            setIsAuth(true);
          }
        } catch (err) {
          const error = err as ErrorApi;
          if (error.response?.status === 401) {
            dispatch(logout());
            router.push("/login");
          }
        }
      }
      fetchUser();
    }, [token, router, dispatch]);

    return isAuth ? <Component /> : null;
  };
  return Wrapper;
};
