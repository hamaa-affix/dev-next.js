import { useCallback, useEffect, useState } from "react";
import Head from 'next/head'
import { MainDocument } from "../components/MainDocument/MainDocument"
import { Footer } from "../components/Footer/index";
import styles from '../styles/Home.module.css'
import { Header } from 'src/components/Header/index';


export default function Home() {
  // useCallback ->　再レンダリングする際に再生成することがなくなる。コンポーネントのパフォーマンスを維持してくれる。
  // const handleClick = useCallback((e) => {
  //   console.log(e);
  //   e.preventDefault();
  //   alert(1234);
  // }, []);
  const handlClick = (e) => {
    setCount(count => count +1);
  }

  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true);

  const handlAdd = () => {
    console.log("test");
  }

  const handlChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handlDisplay = () => {
    setIsShow(isShow => !isShow);
  }
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

      { isShow ? <h1>{ count }</h1> : null}
      <button onClick={ handlClick }>ボタン</button>
      <button onClick={ handlDisplay }>{isShow ? "!非表示" : "表示"}</button>
      <input type="text" value={text} onChange={ handlChange }/>
      <button onClick={ handlClick } >ボタン</button>
      <MainDocument page="index" title="index" />

      <button onClick={ handlAdd() }>追加</button>
      <Footer />
    </div>
  )
}
