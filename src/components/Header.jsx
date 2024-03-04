import { Avatar, Button, Dropdown, Navbar } from 'flowbite-react'
import React from 'react';

const customTheme = {
  color: {
    dark: "bg-gray-900 text-white dark:bg-gray-700",
    light: "border border-gray-200 bg-slate-200 text-gray-900",
    auto: "border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
  },
};


const Header = () => {
  return (
    <>
    <header>
      <nav>
        <div className='bg-[#043E44] h-14 flex justify-evenly items-center px-5 text-white'>
       <div className='me-auto' >
        <p>logo</p>
       </div>
<div className="flex justify-center">
<div className="relative text-gray-600">
      <input type="search" className="bg-purple-white shadow rounded border-0 p-2 w-[200px] sm:w-[400px]" placeholder="search here..." />
  <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
    <span className="material-symbols-outlined">
search
</span>
  </button>
</div>
</div>
<div className='ms-auto hidden md:flex'>
<button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Become a seller</button>
</div>
        </div>
    <Navbar fluid className='bg-[#8CB9BD]'>
    <Dropdown color='light' label="All Categories">
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Separated link</Dropdown.Item>
    </Dropdown>

      <div className="flex md:order-2">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined">
favorite
</span>
<span className="material-symbols-outlined pe-4">
garden_cart
</span>
</div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" className='text-gray-900'>
          Home
        </Navbar.Link>
        <Navbar.Link href="#" className='text-gray-900'>Best Seller</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-900'>Products</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-900'>Sales</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-900'>FAQ</Navbar.Link>
        <Navbar.Link href="#" className='text-gray-900 md:hidden block'>Become a seller</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    
    </nav>
    </header>
    </>
  )
}

export default Header
