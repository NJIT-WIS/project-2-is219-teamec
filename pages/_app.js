import '../styles/global.css'
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
        <>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
        <Script
                        id='google-analytics'
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-50WBN19X53', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                />
            <Component {...pageProps} />
        </>
  )
}
