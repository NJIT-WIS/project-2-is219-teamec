import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Navbar from '../components/navbar'
import Footer from "../components/footer";
import Image from "next/image";
import images from "../public/images";
import styles from "../styles/Home.module.css";
const { heroContent, heroWrapper, imageWrapper } = styles;

import ReactGA from "react-ga4";
ReactGA.initialize("G-50WBN19X53");

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MyWebClass.org</title>
      </Head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-50WBN19X53"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-50WBN19X53');
</script>
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
