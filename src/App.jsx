import './App.css'
import { Header, Footer, Login, Error } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Hero } from './pages'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Error />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
