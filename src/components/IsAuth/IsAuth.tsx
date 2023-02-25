import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import { useAppSelector } from "@/redux/hooks";
import { getToken } from "@/redux/user";

type Props = {
  children: React.ReactNode;
};

export const IsAuth: FC<Props> = ({ children }) => {
  const token = useAppSelector(getToken);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);

  return <>{children}</>;
};
