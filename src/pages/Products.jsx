import React from 'react'
import { Footer, Header, ProductLists } from '../components'

const Products = () => {
  return (
   <>
   <Header />
   <section className='dark:bg-[#121212ed]'>
    <ProductLists />
   </section>
   <Footer />
   </>
  )
}

export default Products
