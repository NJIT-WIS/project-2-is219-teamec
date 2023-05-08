import Head from 'next/head'
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout'
import Link from 'next/link'
import Footer from "../components/footer";
import Navbar from '../components/navbar'
import axios from 'axios';
import styles from "../styles/contact.module.css"

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
      </Head>
      <section>
        <Navbar/>
      </section>
        <form onSubmit={handleSubmit}>
        <div className={styles.contact}>
          <label className={styles.field}>
            Name:
            <input className={styles.input} type="text" value={name} placeholder="First and late name" onChange={(e) => setName(e.target.value)} />
          </label>
        </div>
        <br></br>
        <div className={styles.contact}>
          <label className={styles.field}>
            Email:
            <input className={styles.input} type="email" value={email} placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>
        <br></br>
        <div className={styles.contact}>
          <label className={styles.field}>
            Message:
            <textarea className={styles.input} value={message} placeholder="Enter message" onChange={(e) => setMessage(e.target.value)} />
          </label>
        </div>
        <br></br>
          <button className={styles.button} type="submit">Send Message</button>
        </form>
        <Footer/>
    </Layout>
  )
}