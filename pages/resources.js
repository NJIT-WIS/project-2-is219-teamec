import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Resources | MyWebClass</title>
      </Head>
    <h1>Welcome to mywebclass.org!</h1>
      <p>Here you can find academic articles, downloadable guides, webinars and workshops, and success stories to help you improve your skills and achieve your goals.</p>

      <h2>Academic Articles</h2>
      <ul>
        <li>Enhancing Online Learning through Interactive Technologies: A Meta-Analysis of Experimental Studies</li>
        <li>The Impact of Student Engagement on Online Learning Outcomes: A Review of Literature</li>
        <li>Designing Effective Online Assessments: A Framework for Course Developers and Instructors</li>
      </ul>

      <h2>Downloadable Guides</h2>
      <ul>
        <li>10 Tips for Successful Online Learning: A Student's Guide to Navigating Virtual Classes</li>
        <li>Designing Engaging and Effective Online Courses: A Guide for Educators</li>
        <li>How to Build a Strong Online Learning Community: Strategies for Instructors and Students</li>
      </ul>

      <h2>Webinars and Workshops</h2>
      <ul>
        <li>Creating an Engaging and Interactive Online Classroom: Best Practices for Educators</li>
        <li>Navigating the Challenges of Online Learning: Tips and Strategies for Students and Instructors</li>
        <li>Using Technology to Enhance Student Learning: Innovative Approaches and Tools for Online Instruction</li>
      </ul>

      <h1>Success Stories</h1>
      <ul>
        <li>From Struggling Student to Online Learning Success: How One Student Overcame Adversity and Achieved Academic Excellence</li>
        <li>How One Educator Transformed Their Online Course and Increased Student Engagement: A Success Story</li>
        <li>Breaking Barriers: The Inspiring Story of a Non-Traditional Online Learner's Journey to Academic Success</li>
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
