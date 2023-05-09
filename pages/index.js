import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Navbar from '../components/navbar';
import Footer from "../components/footer";
import Image from "next/image";
import images from "../public/images";
import styles from "../styles/Home.module.css";
const { heroContent, heroWrapper, imageWrapper } = styles;
import Script from "next/script";

import ReactGA from "react-ga4";
ReactGA.initialize("G-50WBN19X53");

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>MyWebClass.org</title>
        <meta name="description" content="Learn web development with MyWebClass! Our online courses cover HTML, CSS, JavaScript, React, and more. Start your journey to becoming a web developer today and enroll in our comprehensive and engaging courses." />
        <meta name="keywords" content="web development, HTML, CSS, JavaScript, React" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="MyWebClass" />
        <meta name="twitter:description" content="MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!" />
          <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-50WBN19X53"/>
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
          <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KNBPD4C');`,
    }}
          />
      </Head>
        <noscript
    dangerouslySetInnerHTML={{
      __html: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KNBPD4C"\n' +
          'height="0" width="0" style="display:none;visibility:hidden"></iframe>',
    }}
  />
            <Navbar/>
        <section className={utilStyles.headingMd}>
            <div className={heroWrapper}>
      <div className={imageWrapper}>
        <Image
          priority
          src={images.hero}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="hero image example"
        />
      </div>

      <div className={heroContent}>
        <main className={styles.container}>
            <h1>MyWebClass</h1>
            <p>MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!</p>
            <Link href="/services"><button>Learn How to Get Involved</button></Link>
      </main>
      </div>
    </div>
        </section>
        <Footer/>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
