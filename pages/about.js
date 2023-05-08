import Head from 'next/head'
import { getSortedPostsData } from '../lib/posts'
import Layout, { siteTitle } from '../components/layout'
import styles from '../styles/about.module.css';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Link from 'next/link';
import Script from "next/script";


export default function AboutPage () {
  return (
    <>
      <Layout>
      <Head>
        <title>About | MyWebClass</title>
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
      </Head>
        <section>
            <Navbar/>
        </section>
      <div className={styles.about}>
        <h1>About</h1>
          <p>
          MyWebClass is an online platform that offers courses and tutorials on web development, programming, and other related topics. Our mission is to provide accessible and high-quality education to individuals who want to learn new skills and advance their careers.
        </p>
        <p>
          Our team consists of experienced instructors and developers who are passionate about teaching and sharing their knowledge. We believe that anyone can learn to code, regardless of their background or previous experience.
        </p>
        <p>
          Whether you're a beginner or an advanced learner, we have courses that cater to your needs. Our courses cover a wide range of topics, from HTML and CSS to JavaScript, React, and more. We also offer personalized support and feedback to help you succeed.
        </p>
        <p>
          Thank you for choosing MyWebClass as your learning partner. We look forward to helping you achieve your goals and reach new heights in your career!
        </p>
          <div className={styles.button}>
              <Link href="/contact"><button>Volunteer with us now.</button></Link>
          </div>

      </div>
      <Footer/>
    </Layout>
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
