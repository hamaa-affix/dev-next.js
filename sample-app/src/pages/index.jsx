import { useCallback, useEffect, useState } from "react";
import Head from 'next/head'
import { MainDocument } from "../components/MainDocument/MainDocument"
import { Footer } from "../components/Footer/index";
import styles from '../styles/Home.module.css'
import { Header } from 'src/components/Header/index';


export default function Home() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("")
  const [isShow, setIsShow] = useState(true);
  const [array, setArray] = useState([]);
  // useCallback ->　再レンダリングする際に再生成することがなくなる。コンポーネントのパフォーマンスを維持してくれる。
  const handlClick = useCallback((e) => {
    setCount(prevCount => prevCount +1);
  }, [count]);

  const handlChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handlDisplay = useCallback(() => {
    setIsShow(prevIsShow => !prevIsShow);
  }, []);

  const handlAdd = useCallback(() => {
    setArray( (prevArray) => {
      if (prevArray.some( item => item === text )) {
        alert("同じ要素のものがあります");
        return prevArray;
      }
      const newArray = [...prevArray, text]
      return newArray;
    })
  }, [text]);

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
      <Header />

      { isShow ? <h1>{ count }</h1> : null}
      <button onClick={ handlClick }>ボタン</button>
      <button onClick={ handlDisplay }>{isShow ? "!非表示" : "表示"}</button>
      <input type="text" value={text} onChange={ handlChange }/>

      <button onClick={handlAdd }>追加</button>
      <ul>
        {array.map( item => {
          return(
            <li key={item}>{item}</li>
          );
        })}
      </ul>
      <MainDocument page="index" title="index" />
      <Footer />
    </div>
  )
}
