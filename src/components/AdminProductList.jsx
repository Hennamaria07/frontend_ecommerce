import React from 'react'
import AdinNavbar from './AdinNavbar'
import { Table } from 'flowbite-react'

const AdminProductList = () => {
  return (
    <>
     <section className="w-full h-full  text-black  dark:text-white bg-white dark:bg-[#121212ed]">
                  <AdinNavbar />
                    <div className="w-full absolute top-0 z-100  pt-[64px] lg:ps-[256px]">
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                View
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                View
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                View
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-red-600 hover:underline dark:text-red-500">
                Delete
              </a>
            </Table.Cell>
          </Table.Row>
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
