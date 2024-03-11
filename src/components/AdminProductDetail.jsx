import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Flip, ToastContainer, toast } from 'react-toastify'
import instance from '../utils/axios'
import AdinNavbar from './AdinNavbar'

const reviews = { href: '#', average: 4, totalCount: 117 }

const AdminProductDetail = () => {
    const [product, setProduct] = useState(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    //   console.log(image);
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {
            try {
                // console.log(id);
                const res = await instance.get(`/api/v1/product/detail/${id}`, { withCredentials: true });
                if (res.data.success) {
                    setProduct(res.data.product);
                }
            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        getProduct()
        // console.log(product.images);
    }, [id])
    return (
        <>
            {/* <h1>{product?.name}</h1> */}
            <section className="w-full h-full">
                <AdinNavbar />
                <div className="w-full absolute top-0 z-100  min-h-[100vh] pt-[64px] lg:ps-[256px]">
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
                    <div className="p-5 w-full h-full bg-white dark:bg-[#121212ed]">


                        <div>

                            <div className=" mx-auto px-4 sm:px-6 lg:px-8 md:h-[81.6vh] overflow-hidden ">
                                <div className="flex flex-col md:flex-row -mx-4">
                                    <div className="md:flex-1 px-4">

                                        <div>
                                            <div className="h-[300px] md:h-80 md:w-full w-[80%] md:mx-0 mx-auto rounded-lg bg-gray-100 mb-4">
                                                {/* Show selected image */}
                                                {product?.images && (
                                                    <img src={product.images[selectedImageIndex].url} alt={`Product Image ${selectedImageIndex + 1}`} className="w-full max-h-full rounded-lg" />
                                                )}
                                            </div>
                                            <div className="flex -mx-2 mb-4">
                                                {/* Thumbnails or selectors for images */}
                                                {product?.images.map((_, index) => (
                                                    <div key={index} className="flex-1 px-2">
                                                        <button
                                                            onClick={() => setSelectedImageIndex(index)}
                                                            className={`focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center ${selectedImageIndex === index ? "ring-2 ring-indigo-300 ring-inset" : ""
                                                                }`}
                                                        >
                                                            <img src={product.images[index].url} alt={`Thumbnail ${index + 1}`} className="w-full h-full rounded-lg" />
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                    <div className="md:flex-1 px-4  text-black  dark:text-white">
                                        <h2 className="mb-2 leading-tight tracking-tight font-bold  text-black  dark:text-white text-2xl md:text-3xl">
                                            {product?.name}
                                        </h2>
                                        <p className="  text-black  dark:text-white text-sm">
                                            By <a href="#" className="  text-black  dark:text-white hover:underline">{product?.brand}</a>
                                        </p>
                                        <div className="flex items-center space-x-4 my-4">
                                        <span className="text-2xl font-bold text-[#043E44] dark:text-[#8CB9BD]">$599</span> <span className="text-xl font-medium line-through text-gray-400 dark:text-gray-300">$30</span>

                                        </div>
                                        <p className="  text-black  dark:text-white">
                                            {product?.description}
                                        </p>
                                        <div className="flex   text-black  dark:text-white py-4 space-x-4">
                                            Stock: {product?.stock}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminProductDetail
