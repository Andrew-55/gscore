import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
