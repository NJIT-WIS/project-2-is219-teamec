import Head from 'next/head'
import images from '../public/images/index'
import Image from "next/image";
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const { heroContent, heroWrapper, imageWrapper } = styles;
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>MyWebClass</title>
        <meta name="description" content="MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-50WBN19X53"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)};
  gtag('js', new Date());

  gtag('config', 'G-50WBN19X53');
</script>
        <section>
            <Navbar/>
        </section>
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
         <Footer/>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}