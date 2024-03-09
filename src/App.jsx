import './App.css'
import { Header, Footer, Login, Error, SignUp, Seller} from './components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Faq, Hero, Products } from './pages'
import ProductedRouter from './utils/ProductedRouter'
import { useSelector } from 'react-redux'

function App() {
const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
console.log(isAuthenticated);
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/products' element={<Products />} />
      <Route path='/seller/request' element={<ProductedRouter isAuthenticated={isAuthenticated}> <Seller /></ProductedRouter>} />
      <Route path='*' element={<Error />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
