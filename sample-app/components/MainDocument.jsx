import { Headline } from "./Headline"
import { Links } from './Links';
import styles from '../styles/Main.module.css'
import { Demo } from "./demo";

export function MainDocument(props) {
  return (
      <main className={styles.main}>
        {/* childrenで渡している */}
        <Headline
          // comp={<div>これでもコンポーネントを渡せるよ</div>}
          page={props.page}
          title={props.title}
        >
          <code className={styles.code}>pages/{props.page}(children)</code>
          <Demo />
          <div>hello</div>
        </Headline>
        <Links />
      </main>
  )
}
