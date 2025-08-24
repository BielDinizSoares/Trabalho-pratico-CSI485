import { useEffect } from 'react'
import styles from './KeyButtons.module.css'

interface ButtonProps {
  title: string
  setTitle: (title: string) => void
  description: string
  setDescription: (description: string) => void
}

export function KeyButtons({ title, setTitle, description, setDescription }: ButtonProps) {
 
  useEffect(() => {
  
    console.log('KeyButtons carregado, buscar title e description')
  }, [])

  return (
    <div className={styles.keyButtons}>
      <button>
        {title} - {description}
      </button>
      <button>
        {title} - {description}
      </button>
      <button>
        {title} - {description}
      </button>
      <button>
        {title} - {description}
      </button>
    </div>
  )
}
