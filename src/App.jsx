import './App.css'
import { Header, Footer, Login, Error, SignUp } from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Faq, Hero } from './pages'

function App() {

  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='*' element={<Error />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
