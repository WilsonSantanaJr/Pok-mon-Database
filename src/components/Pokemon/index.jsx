import styles from './styles.module.css'

export const Pokemon = ({ name }) => {
  return <h2 className={styles.name}>{name}</h2>
}