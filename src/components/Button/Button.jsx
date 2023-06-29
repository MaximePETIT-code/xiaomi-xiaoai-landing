import styles from "./Button.module.scss"

export default function Button({
  link = "#",
  children,
}){
  return(
    <a className={styles.button} href={link}>
      {children}
    </a>
  )
}
