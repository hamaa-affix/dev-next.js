import Head from 'next/head'
import { MainDocument } from "../components/MainDocument"
import { Footer } from "../components/Footer";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainDocument page="index" title="index" />

      <Footer />
    </div>
  )
}
