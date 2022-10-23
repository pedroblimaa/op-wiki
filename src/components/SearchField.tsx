import styles from '../styles/SearchField.module.css'

interface SearchProps {
    onChange: (event: any) => void
}

export default function SearchField({ onChange }: SearchProps) {
    return (
        <div className={styles.InputContainer}>
            <input className={styles.Input} type="text" onChange={onChange} placeholder="Search..." />
        </div>
    )
}