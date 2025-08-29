import { useState } from 'react'
import styles from './Sidebar.module.css'

export function Sidebar() {
  const [menuLateralAberto, setMenuLateralAberto] = useState(false)

  const abrirMenu = () => setMenuLateralAberto(true)
  const fecharMenu = () => setMenuLateralAberto(false)

  return (
    <>
     
      {!menuLateralAberto && (
        <button className={styles.botaoMenu} onClick={abrirMenu}>
          Abrir Menu
        </button>
      )}

     
      <aside className={`${styles.sidebar} ${menuLateralAberto ? styles.aberto : ''}`}>
        {menuLateralAberto && (
          <>
           
            <button className={styles.botaoMenu} onClick={fecharMenu}>
              Fechar Menu
            </button>

          
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </>
        )}
      </aside>
    </>
  )
}
