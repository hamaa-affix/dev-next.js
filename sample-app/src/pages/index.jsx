import Head from 'next/head'
import { MainDocument } from "../components/MainDocument"
import { Footer } from "../components/Footer";
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <MainDocument page="index" title="index" />
      <Footer />
    </div>
  )
}
