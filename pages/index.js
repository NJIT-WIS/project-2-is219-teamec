import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>MyWebClass - Learn Web Development Online</title>
        <meta name="description" content="MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={styles.container}>
        <h1>Welcome to MyWebClass</h1>
        <p>Our mission is to provide high-quality, accessible web development education to students around the world. Whether you're a complete beginner or an experienced developer looking to expand your skills, we have a course for you.</p>
        <button>Learn How to Get Involved</button>
      </main>
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
