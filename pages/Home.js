import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { getSortedPostsData } from '../lib/posts'
import Navbar from "../components/navbar";
import Footer from "../components/footer";


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
          <div className="hero-image">
              <div className="hero-text">
                  <h1>MyWebClass</h1>
                  <p>MyWebClass offers online courses in web development, including HTML, CSS, JavaScript, React, and more. Enroll today and start your journey to becoming a web developer!</p>
                  <button>Learn How to Get Involved</button>
              </div>
          </div>
      </main>
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