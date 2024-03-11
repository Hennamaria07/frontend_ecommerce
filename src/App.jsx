import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Err, Faq, Hero, LoginLayout, Products, SellerPage, SignupLayout, Admin } from './pages'
import ProductedRouter from './utils/ProductedRouter'
import { useSelector } from 'react-redux'
import { AdminProductList } from './components'

function App() {
const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
console.log(isAuthenticated);
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Hero />}/>
      <Route path='/faq' element={<Faq />}/>
      <Route path='/login' element={<LoginLayout />} />
      <Route path='/signup' element={<SignupLayout />} />
      <Route path='/products' element={<Products />} />
      <Route path='/seller/request' element={<ProductedRouter isAuthenticated={isAuthenticated}> <SellerPage /></ProductedRouter>} />
      <Route path='/admin' element={<ProductedRouter isAuthenticated={isAuthenticated}> <Admin /></ProductedRouter>} />
      <Route path='/admin/products' element={<ProductedRouter isAuthenticated={isAuthenticated}> <AdminProductList /></ProductedRouter>} />
      <Route path='*' element={<Err />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
