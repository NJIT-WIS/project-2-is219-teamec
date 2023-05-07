import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>MyWebClass</title>
        <meta name="description" content="MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <section>
            <Navbar/>
        </section>
      <main className={styles.container}>
        <h1>Welcome to MyWebClass</h1>
        <p>Our mission is to provide high-quality, accessible web development education to students around the world. Whether you're a complete beginner or an experienced developer looking to expand your skills, we have a course for you.</p>
        <button>Learn How to Get Involved</button>
      </main>
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