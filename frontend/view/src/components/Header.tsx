import styles from './Header.module.css'
import { Sidebar } from './Sidebar'

interface HeaderProps {
  pageName: string
}

export function Header({ pageName }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1>{pageName}</h1>
      <Sidebar />
    </header>
  )
}
