import styles from './KeyButtonsList.module.css'

interface Item {
  title: string
  description: string
}

interface KeyButtonsListProps {
  items: Item[]
}

export function KeyButtonsList({ items }: KeyButtonsListProps) {
  return (
    <div className={styles.keyButtonsList}>
      {items.map((item, index) => (
        <div key={index} className={styles.keyButton}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}