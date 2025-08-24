import styles from './Header.module.css'

interface HeaderProps {
  pageName: string
}

export function Header({ pageName }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{pageName}</h1>
      
    </header>
  )
}
