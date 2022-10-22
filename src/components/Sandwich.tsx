import styles from '../styles/Sandwich.module.css'

interface SandwichProps {
  onClick: () => void,
}

export default function Sandwich({onClick}: SandwichProps) {
  return (
    <button className={styles.SandwichButton} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}
