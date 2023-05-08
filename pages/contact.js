import Head from 'next/head'
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Footer from "../components/footer";
import Navbar from '../components/navbar'
import axios from 'axios';
import styles from "../styles/contact.module.css"
import Script from "next/script";
import Subscribe from "../components/subscribe";

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        await axios.post('/api/sendMail', { name, email, message });
        alert('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } catch (error) {
        console.log(error);
        alert('Message failed to send.');
      }
    };

  return (
    <Layout home>
      <Head>
        <title>Contact | MyWebClass</title>
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
        <Subscribe/>
        <Footer/>
    </Layout>
  )
}