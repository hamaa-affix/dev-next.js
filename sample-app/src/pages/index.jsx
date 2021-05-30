import Head from 'next/head'
import { MainDocument } from "../components/MainDocument/MainDocument"
import { Footer } from "../components/Footer/index";
import styles from '../styles/Home.module.css'
import { Header } from 'src/components/Header/index';
//custom Hooks
import { useCounter} from "../hooks/useCounter";
import { useInputArray } from "../hooks/useInputArray";
import { useBgLightBlue } from "../hooks/useBgLightBlue";

export default function Home() {
  const { count, isShow, handlClick, handlDisplay } = useCounter();
  const { text, array, handlChange, handlAdd } = useInputArray();
  useBgLightBlue();

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
