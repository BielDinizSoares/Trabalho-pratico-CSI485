import { useState } from 'react'
import styles from './Header.module.css'

export function Header() {
  const [pageName, setPageName] = useState('Login')

  return (
    <header className={styles.header}>
      <h1>{pageName}</h1>
    </header>
  )
}
