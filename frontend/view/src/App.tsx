import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import './App.css'
import { Login } from './components/Login'
import { StudentView } from './pages/StudentView'

function Home() {
  return <h1>Bem-vindo ao App 🚀</h1>
}

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
          <Route path="/" element={<LoginPage />} />
          <Route path="/students" element={<StudentView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
