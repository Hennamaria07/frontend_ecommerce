import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Err, Faq, Hero, LoginLayout, Products, SellerPage, SignupLayout, Admin } from './pages'
import ProductedRouter from './utils/ProductedRouter'
import { useSelector } from 'react-redux'
import { AdminProductAdd, AdminProductDetail, AdminProductEdit, AdminProductList, Banner, BannerView } from './components'
import AdminProductedRouter from './utils/AdminProductedRouter'

function App() {
const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
const role = useSelector(state => state.auth.user?.role)
// console.log(role);
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
      <Route path='/admin' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <Admin /></AdminProductedRouter>} />
      <Route path='/admin/products' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <AdminProductList /></AdminProductedRouter>} />
      <Route path='/admin/product/:id' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <AdminProductDetail /></AdminProductedRouter>} />
      <Route path='/admin/product/edit/:id' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <AdminProductEdit /></AdminProductedRouter>} />
      <Route path='/admin/add-product' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <AdminProductAdd /></AdminProductedRouter>} />
      <Route path='/admin/banner' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <Banner /></AdminProductedRouter>} />
      <Route path='/admin/banner/:id' element={<AdminProductedRouter isAuthenticated={isAuthenticated} role={role}> <BannerView /></AdminProductedRouter>} />
      <Route path='*' element={<Err />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
