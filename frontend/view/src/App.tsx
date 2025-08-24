import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import './App.css'
import { Login } from './components/Login'

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
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
