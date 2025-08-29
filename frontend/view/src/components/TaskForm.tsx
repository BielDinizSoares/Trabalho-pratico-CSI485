import { useState } from 'react'
import styles from './TaskForm.module.css'

interface Task {
  title: string
  description: string
}

interface TaskFormProps {
  onAddTask: (task: Task) => void
}

export function TaskForm({ onAddTask }: TaskFormProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    onAddTask({ title, description })
    setTitle('')
    setDescription('')
    setIsOpen(false)
  }

  return (
    <div>
      {/* Botão principal */}
      <button className={styles.openButton} onClick={() => setIsOpen(true)}>
        + Nova Tarefa
      </button>

      {/* Modal */}
      {isOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Descrição"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className={styles.actions}>
                <button type="submit">Salvar</button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={styles.cancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
