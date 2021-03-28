import Head from 'next/head'
import { Headline } from "../components/Headline"
import { Links } from '../components/Links';
import { Footer } from "../components/Footer";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline
          title="Index Page"
          page="index"
          arr={["hi", "mike"]}
          obj={{foo: "hello", bar: "mami"}}
          comp={<code className={styles.code}>pages/index.js</code>}
          onClick={ () => alert("クリック") }
        />
        <Links />
      </main>

      <Footer />

    </div>
  )
}
