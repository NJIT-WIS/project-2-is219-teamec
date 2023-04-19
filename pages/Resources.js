 import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
    <h1>Welcome to mywebclass.org!</h1>
      <p>Here you can find academic articles, downloadable guides, webinars and workshops, and success stories to help you improve your skills and achieve your goals.</p>

      <h2>Academic Articles</h2>
      <ul>
        <li>Article 1</li>
        <li>Article 2</li>
        <li>Article 3</li>
      </ul>

      <h2>Downloadable Guides</h2>
      <ul>
        <li>Guide 1</li>
        <li>Guide 2</li>
        <li>Guide 3</li>
      </ul>

      <h2>Webinars and Workshops</h2>
      <ul>
        <li>Webinar 1</li>
        <li>Webinar 2</li>
        <li>Webinar 3</li>
      </ul>

      <h1>Success Stories</h1>
      <ul>
        <li>Story 1</li>
        <li>Story 2</li>
        <li>Story 3</li>
      </ul>

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