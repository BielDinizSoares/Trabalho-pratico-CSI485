import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import './App.css'
import { Login } from './components/Login'
import { StudentView } from './pages/StudentView'

import { ProfessorView } from './pages/ProfessorView'
import { DisciplinaProfessor } from './pages/DisciplinaProfessor'
import { DisciplinaAluno } from './pages/DisciplinaAluno'


function LoginPage() {
  return (
    <>
      <Login />
    </>
  )
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/students" element={<StudentView />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/professor" element={<ProfessorView />} />
          <Route path="/disciplinaprofessor" element={<DisciplinaProfessor />} />
          <Route path="/disciplinasaluno" element={<DisciplinaAluno />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
