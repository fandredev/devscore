import type { AppProps } from "next/app"
import { GlobalStyle } from "../styles/global"
import NProgress from "nprogress"
import Router from "next/router"
import Head from "next/head"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
