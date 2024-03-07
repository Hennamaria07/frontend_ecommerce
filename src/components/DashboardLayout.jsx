import React from 'react'
import SideBar from './SideBar'

const DashboardLayout = () => {
    return (
        <>
            <div className="p-4 sm:ml-64 customSignupHeight dark:bg-cyan-950">
                <SideBar />
                <div className="p-4 border-2 pt-[117.6px] border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                        <div className="flex justify-center items-center  p-2 h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <div className='w-3/5'>
                                <p className="text-md font-bold text-gray-600 dark:text-zinc-300">
                                    hello
                                </p>
                                <p className="text-lg font-bold text-gray-800 dark:text-white">
                                    <span className="flex-1 ms-3 whitespace-nowrap">1</span>
                                    <span className="text-sm font-bold text-green-700 ">profit</span>
                                </p>
                            </div>
                            <div>
                                {/* <img src={data.icon} alt="icon" /> */}
                                icon
                            </div>
                        </div>
                        <div className="flex justify-center items-center  p-2 h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <div className='w-3/5'>
                                <p className="text-md font-bold text-gray-600 dark:text-zinc-300">
                                    hello
                                </p>
                                <p className="text-lg font-bold text-gray-800 dark:text-white">
                                    <span className="flex-1 ms-3 whitespace-nowrap">1</span>
                                    <span className="text-sm font-bold text-green-700 ">profit</span>
                                </p>
                            </div>
                            <div>
                                icon
                            </div>
                        </div>
                        <div className="flex justify-center items-center  p-2 h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <div className='w-3/5'>
                                <p className="text-md font-bold text-gray-600 dark:text-zinc-300">
                                    hello
                                </p>
                                <p className="text-lg font-bold text-gray-800 dark:text-white">
                                    <span className="flex-1 ms-3 whitespace-nowrap">1</span>
                                    <span className="text-sm font-bold text-green-700 ">profit</span>
                                </p>
                            </div>
                            <div>
                                icon
                            </div>
                        </div>
                        <div className="flex justify-center items-center  p-2 h-24 rounded bg-gray-50 dark:bg-gray-800">
                            <div className='w-3/5'>
                                <p className="text-md font-bold text-gray-600 dark:text-zinc-300">
                                    title
                                </p>
                                <p className="text-lg font-bold text-gray-800 dark:text-white">
                                    <span className="flex-1 ms-3 whitespace-nowrap">1</span>
                                    <span className="text-sm font-bold text-green-700 ">profit</span>
                                </p>
                            </div>
                            <div>
                                {/* <img src={data.icon} alt="icon" /> */}
                                icon
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-4 h-60 mb-4 rounded-lg  dark:bg-gray-800  bg-gray-50">
                        <div>
                            <p className="text-md text-zinc-300">
                                Welcome back,
                            </p>
                            <h1 className='font-bold text-4xl text-white'>Mark Johnson</h1>
                            <p className="text-md pt-4 text-zinc-300">
                                Glad to see you again!
                            </p>
                            <p className="text-md text-zinc-300">
                                Ask me anything.
                            </p>
                            <p className='flex font-bold text-white pt-1 text-md'>Tap to record <svg className="py-1 ms-2 w-5 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="h-80 bg-gray-50  dark:bg-gray-800 p-4 overflow-hidden">
                            <div>
                                <p className="text-lg font-bold text-gray-800 dark:text-zinc-100">
                                    Satisfaction Rate
                                </p>
                                <p className='text-md dark:text-zinc-300'>From all projects</p>
                            </div>
                            <div className="flex justify-center items-center pb-5" style={{ width: '100%', height: '100%' }}>
                                {/* <Bar data={data} options={options} style={{width: "100%", height: "100%"}} /> */}
                                {/* {<PolarArea data={data} options={options} className='pb-4' style={{ width: '100%', height: '100%' }} />} */}
                            </div>
                        </div>
                        <div className="h-80p-4 overflow-hidden dark:bg-gray-800  bg-gray-50">
                            <div>
                                <p className="text-lg font-bold text-gray-800 dark:text-zinc-100">
                                    Referral Tracking
                                </p>
                            </div>
                            <div className="flex justify-center items-center  pb-5" style={{ width: '100%', height: '100%' }}>
                                {/* {<Line data={data2} options={options2} className='pb-4' style={{ width: '100%', height: '100%' }} />} */}
                            </div>
                        </div>
                        <div className="h-80 bg-gray-50  dark:bg-gray-800 p-4 overflow-hidden">
                            <div>
                                <p className="text-lg font-bold text-gray-800 dark:text-zinc-100">
                                    Sales Overview
                                </p>
                                <p className='text-md dark:text-zinc-300'><span className='text-green-500 font-bold'>(+5%) more</span> in 2021</p>
                            </div>
                            <div className="flex justify-center items-center  pb-5" style={{ width: '100%', height: '100%' }}>
                                {/* {<Line data={data2} options={options2} className='pb-4' style={{ width: '100%', height: '100%' }} />} */}
                            </div>
                        </div>
                        <div className="flex items-center justify-center rounded  h-80 bg-gray-50  dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                    </div>
                    <div className=" p-4  mb-4 rounded bg-gray-50 dark:bg-gray-800">
                        <h1 className='font-bold text-2xl text-gray-800 dark:text-white'>Projects</h1>
                        <p className='text-md dark:text-zinc-300'><span className='text-green-500 font-bold'>30 done</span> this month.</p>


                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                                <div>
                                    <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Position
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Neil Sims</div>
                                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            React Developer
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="Jese image" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Bonnie Green</div>
                                                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Designer
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-2.jpg" alt="Jese image" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Jese Leos</div>
                                                <div className="font-normal text-gray-500">jese@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            Vue JS Developer
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-2" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="Jese image" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Thomas Lean</div>
                                                <div className="font-normal text-gray-500">thomes@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            UI/UX Engineer
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <td className="w-4 p-4">
                                            <div className="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <label htmlFor="checkbox-table-search-3" className="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Jese image" />
                                            <div className="ps-3">
                                                <div className="text-base font-semibold">Leslie Livingston</div>
                                                <div className="font-normal text-gray-500">leslie@flowbite.com</div>
                                            </div>
                                        </th>
                                        <td className="px-6 py-4">
                                            SEO Specialist
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                frghbtr
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>

                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                        <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                            <p className="text-2xl text-gray-400 dark:text-gray-500">
                                <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout
