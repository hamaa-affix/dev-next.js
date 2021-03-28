import Head from 'next/head'
import { Headline } from "../components/Headline";
import { Footer } from "../components/Footer";
import { Links } from '../components/Links';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Headline
          title="About Page"
          page="about"
          number={ 1 }
          arr={["hi", "mike"]}
          obj={{foo: "hello", bar: "mami"}}
          // 真偽値を渡すときはプロパティ名を記述するだけでdefaultでtruetyを渡してくれる
          boolean
          //componentを渡す
          comp={<code className={styles.code}>pages/about.js</code>}
        />
        <Links />
      </main>

      <Footer />
    </div>
  )
}
