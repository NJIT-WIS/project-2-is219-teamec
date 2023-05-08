import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Navbar from "../components/navbar";

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Services | MyWebClass</title>
      </Head>

      <section>
            <Navbar/>
        </section>

      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

        <div className="flex flex-col md:flex-row justify-center items-center mb-16">
          <div className="w-full md:w-1/2 md:pr-8">
            <img src="/professional-development.jpg" alt="Professional Development" className="w-full h-auto mb-8" />

            <h2 className="text-2xl font-bold mb-4">Professional Development</h2>

            <p className="text-lg mb-8">
              We offer a wide range of professional development opportunities for educators and school administrators. Our workshops, seminars, and courses are designed to enhance skills and knowledge in various areas, including:
            </p>

            <ul className="list-disc pl-8 mb-8">
              <li>Curriculum design and development</li>
              <li>Assessment and evaluation</li>
              <li>Instructional strategies</li>
              <li>Technology integration</li>
              <li>Leadership development</li>
            </ul>

            <a href="/professional-development" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Learn more</a>
          </div>

          <div className="w-full md:w-1/2 md:pl-8">
            <img src="/customized-training.jpg" alt="Customized Training and Support" className="w-full h-auto mb-8" />

            <h2 className="text-2xl font-bold mb-4">Customized Training and Support</h2>

            <p className="text-lg mb-8">
              We provide customized training and support to schools and districts based on their specific needs and goals. Our team of experienced educators and consultants work closely with clients to design and implement professional development programs, technology integration plans, and other initiatives.
            </p>

            <a href="/contact" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ease-in-out">Learn more</a>
          </div>
        </div>
      </div>
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
