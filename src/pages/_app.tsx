import type { AppProps } from "next/app";

import GlobalStyles from "@/assets/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
