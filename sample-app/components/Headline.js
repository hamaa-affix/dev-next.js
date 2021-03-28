import Head from 'next/head'
import styles from '../styles/Home.module.css'

export  function Headline(props) {
  console.log("about", props.arr[0]);
  console.log("about for object", props.obj.foo);
  console.log("about for boolean", props.boolean);
  console.log("about for component", props.comp);
  return (
    <div>
      <h1 className={styles.title}>
        { props.title }
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        {props.comp}
      </p>
      <button onClick={ props.onClick}>アラート</button>
    </div>
  )
}
