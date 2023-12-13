import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

// global stylesheet
import "@/styles/globals.css";
// import { Provider } from "react-redux";
// import { persistor, store } from "@/redux/store";
// import { PersistGate } from "redux-persist/integration/react";

// global app theme provider

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): JSX.Element {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    // <Provider store={store}>
    // <PersistGate persistor={persistor}>
    <div className="app">{getLayout(<Component {...pageProps} />)}</div>
    // </PersistGate>
    // </Provider>
  );
}
