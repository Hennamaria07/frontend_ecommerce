import { Button } from 'flowbite-react'
import './App.css'
import { Header } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './pages'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Hero />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
