import { Carousel } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import instance from '../utils/axios';
import { Flip, ToastContainer, toast } from 'react-toastify';


const MainCarousel = () => {
  const [products, setProducts] = useState('');
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await instance.get('/api/v1/product/all');
        if(res.data.success) {
          setProducts(res.data.product);
          // console.log(res.data);
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    getAllProducts()
  }, []);
  console.log(`products---> ${products}`);
  // console.log(products.images[0].url)
  {products && products.map((product) => console.log(product.images[0].url))}
    return (
        <>
        <ToastContainer 
             position="top-center"
             autoClose={2000}
             hideProgressBar={false}
             newestOnTop={false}
             closeOnClick
             rtl={false}
             pauseOnFocusLoss
             draggable
             pauseOnHover
             theme="dark"
             transition={Flip}
            />
           <div className="pt-[117.6px] h-[100vh] overflow-hidden">
      <Carousel leftControl=" " className='rounded-none' rightControl=" ">
      {products === '' ? (<h1>Loading....</h1>) : products.map((product, index) => (
  <div key={index} className='carousel-bg w-full h-full p-5' style={{ 
    backgroundImage: `url(${product.images[0]?.url || "https://flowbite.com/docs/images/carousel/carousel-2.svg"})` 
  }}>
    <div className='md:w-[50%] text-center text-neutral-950 h-full flex items-center'>
      <div className="product-details">
        <p className='text-xl'>{product.name}</p>
        <h1 className='text-2xl'>{product.description}</h1>
      </div>
    </div>
  </div>
))}
        {/* <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." /> */}
      </Carousel>
    </div>
        </>
    )
}

export default MainCarousel
