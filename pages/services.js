import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Navbar from "../components/navbar";
import Image from "next/image";
import images from '../public/images/index'
import styles from '../styles/about.module.css';
import Footer from "../components/footer";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Services | MyWebClass</title>
      </Head>

      <section>
            <Navbar/>
        </section>
    <div className={styles.about}>
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="w-full md:w-1/2 md:pr-8">
            <Image
          priority
          src={images.pd}
          width={400}
          height={200}
          objectPosition="center"
          layout = "responsive"
          alt="pd example"
        />

            <h2 className="text-2xl font-bold mb-4">Professional Development</h2>

            <p className="text-lg mb-8">
              We offer a wide range of professional development opportunities for educators and school administrators. Our workshops, seminars, and courses are designed to enhance skills and knowledge in various areas, including:
            </p>


              <h3>Curriculum design and development</h3>
              <p>This workshop involves the creation and improvement of educational programs or courses that align with specific learning objectives and meet the needs of learners. Participants in a Professional Development service focused on curriculum design and development may learn how to design and develop effective educational programs, including how to create clear learning outcomes, design assessments, and plan learning activities.</p>

              <h3>Assessment and evaluation</h3>
              <p> This workshop involves the systematic collection and analysis of data to measure the effectiveness of educational programs and inform decision-making. Participants in a Professional Development service focused on assessment and evaluation may learn how to design and use different types of assessments, interpret assessment results, and use data to inform instructional decisions and improve student learning outcomes.</p>

              <h3>Instructional strategies</h3>
              <p>This workshop involves the use of effective teaching methods and approaches to support student learning and engagement. Participants in a Professional Development service focused on instructional strategies may learn about evidence-based practices, active learning techniques, and differentiated instruction to support a variety of learners.</p>

              <h3>Technology integration</h3>
              <p>This workshop involves the intentional use of technology to enhance teaching and learning. Participants in a Professional Development service focused on technology integration may learn how to use different types of technology tools and platforms to engage learners, create interactive learning experiences, and support online or hybrid learning environments.</p>

              <h3>Leadership development</h3>
              <p>This workshop involves the development of skills and strategies to lead and support educational programs or organizations effectively. Participants in a Professional Development service focused on leadership development may learn about different leadership styles, strategies for effective communication, and how to build strong teams and cultures of learning.</p>

          </div>

            <Image
          priority
          src={images.cts}
          width={400}
          height={200}
          objectPosition="center"
          layout = "responsive"
          alt="pd example"
        />

          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">Customized Training and Support</h2>

            <p className="text-lg mb-8">
              We provide customized training and support to schools and districts based on their specific needs and goals. Our team of experienced educators and consultants work closely with clients to design and implement professional development programs, technology integration plans, and other initiatives.
            </p>

            <a href="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Learn more</a>
          </div>
        </div>
      </div>


              <Link href="/contact"><button>Subscribe to Our Mailing List!</button></Link>
          </div>

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
