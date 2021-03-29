import styles from '../styles/Home.module.css'

export  function Headline(props) {
  return (
    <div>
      <h1 className={styles.title}>
        { props.title } page
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        {props.comp}
      </p>
      {console.log(props.children[1])}
      {props.children[1]}
      {props.children[2]}
      <button onClick={ props.onClick}>アラート</button>
    </div>
  )
}
