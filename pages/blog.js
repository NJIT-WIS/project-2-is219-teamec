import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Script from "next/script";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Blog | MyWebClass</title>
        <meta name="description" content="Discover insightful articles and tutorials on web development, programming, and more in the MyWebClass blog. Stay up to date with the latest trends and enhance your skills." />
        <meta name="keywords" content="blog, web development, programming, tutorials" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Blog | MyWebClass" />
        <meta name="twitter:description" content="Discover insightful articles and tutorials on web development, programming, and more in the MyWebClass blog. Stay up to date with the latest trends and enhance your skills." />
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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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