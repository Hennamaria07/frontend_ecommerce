import { Breadcrumb, Button } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <section className='customHeight'>
    <Breadcrumb className='py-10 px-5' aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" >
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">404 Error</Breadcrumb.Item>
    </Breadcrumb>
        <div className='flex justify-center items-center h-full w-full'>
            <div className='grid place-items-center'>
            <h1 className='text-6xl font-semibold line-clamp-2'>404 Not Found</h1>
            <p className='pt-5 pb-10'>Your visited page not found. You may go home page.</p>
            <Link to={'/'}>
            <Button color="info">
            Back to home page
              </Button>
              </Link>
            </div>
        </div>
    </section>
    </>
  )
}

export default Error
