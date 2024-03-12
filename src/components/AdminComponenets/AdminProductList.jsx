import React, { useEffect, useState } from 'react'
import AdinNavbar from './AdinNavbar'
import { Table } from 'flowbite-react';
import instance from '../../utils/axios'
import { Flip, ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getProductLists } from '../../redux/features/productSlice';
import { NavLink } from 'react-router-dom';
import AdminDeleteProduct from './AdminDeleteProduct';

const AdminProductList = () => {
  const [products, setProducts] = useState(null);
  const dispatch = useDispatch()
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await instance.get('/api/v1/product/all');
        if(res.data.success) {
          setProducts(res.data.product);
          // console.log(products);
          dispatch(getProductLists({products}))
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    getProducts();
  }, [products])
  return (
    <>
     <section className="w-full h-full  text-black  dark:text-white bg-white dark:bg-[#121212ed]">
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
                  <AdinNavbar />
                    <div className="lg:w-[calc(100vw-256px)] absolute top-0 z-100 lg:left-[256px]  pt-[64px]">
                      <div className="p-5">
                      <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell ></Table.HeadCell>
          <Table.HeadCell></Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products && products.map((product) => (
            <Table.Row key={product._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white">
              {product.name}
            </Table.Cell>
            <Table.Cell className='capitalize'>{product.category}</Table.Cell>
            <Table.Cell>{product.actualPrice}</Table.Cell>
            <Table.Cell>
              <NavLink to={`/admin/product/${product._id}`} className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                View
              </NavLink>
            </Table.Cell>
            <Table.Cell>
             <NavLink to={`/admin/product/edit/${product._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
             </NavLink>
            </Table.Cell>
            <Table.Cell>
              <NavLink className="font-medium text-red-600 hover:underline dark:text-red-500">
                <AdminDeleteProduct id={product._id}/>
              </NavLink>
            </Table.Cell>
          </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
                      </div>
                </div>
            </section>
    </>
  )
}

export default AdminProductList
