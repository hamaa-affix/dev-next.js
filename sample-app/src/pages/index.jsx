import { useCallback, useEffect } from "react";
import Head from 'next/head'
import { MainDocument } from "../components/MainDocument/MainDocument"
import { Footer } from "../components/Footer/index";
import styles from '../styles/Home.module.css'
import { Header } from 'src/components/Header/index';


export default function Home() {
  // useCallback ->　再レンダリングする際に再生成することがなくなる。コンポーネントのパフォーマンスを維持してくれる。
  const handleClick = useCallback((e) => {
    console.log(e);
    e.preventDefault();
    alert(1234);
  }, []);

  useEffect(() => {
    //DOM要素に直接アクセスするのは避けるべきである。今回は学習の為例外
    //マウント時の処理
    document.body.style.backgroundColor = "lightblue";

    //アンマウント時の処理
    return () => {
      document.body.style.backgroundColor = "";
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>index page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <button onClick={handleClick}>ボタン</button> */}
      <Header />
      <MainDocument page="index" title="index" />
      <Footer />
    </div>
  )
}
