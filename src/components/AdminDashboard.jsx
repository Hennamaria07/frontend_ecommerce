import React, { useEffect, useState } from "react";
export default function AdminDashboard() {
    const [show, setShow] = useState(false);
    const [profile, setProfile] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menu1, setMenu1] = useState(false);
    const [menu2, setMenu2] = useState(false);
    const [menu3, setMenu3] = useState(false);
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }

    }, [theme])
    // console.log(user)
    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark"
        setTheme(newTheme)
    }
    return (
        <>
            <div className="w-full h-full bg-gray-200 dark:bg-[#121212ed]">
                <div className="flex flex-no-wrap">
                    {/* Sidebar starts */}
                    <div className="absolute lg:relative w-64 h-screen shadow bg-[#8CB9BD] dark:bg-[#043E44] hidden lg:block">
                        <div className="h-16 w-full flex items-center px-8">
                            <h1 className="text-xl  text-black  dark:text-white">Admin Panel</h1>
                        </div>
                        <ul aria-orientation="vertical" className=" py-6">
                            <li className="pl-6 cursor-pointer text-black text-sm leading-3 tracking-normal pb-4 pt-5  dark:text-white">
                                <div className="flex items-center">
                                    <div>
                                        <span class="material-symbols-outlined">
                                            dashboard
                                        </span>
                                    </div>
                                    <span className="ml-2">Dashboard</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer text-black dark:text-white text-sm leading-3 tracking-normal mt-4 mb-4 py-2">
                                <div className="flex items-center">
                                    <span class="material-symbols-outlined">
                                        shopping_bag
                                    </span>
                                    <span className="ml-2">Products</span>
                                </div>
                            </li>
                            <li className="pl-6 cursor-pointer  text-black  dark:text-white text-sm leading-3 tracking-normal mb-4 py-2">
                                <div className="flex items-center">
                                    <span class="material-symbols-outlined">
                                        group
                                    </span>
                                    <span className="ml-2">Users</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={show ? "w-full h-full absolute z-40  transform  translate-x-0 " : "   w-full h-full absolute z-40  transform -translate-x-full"} id="mobile-nav">
                        <div className="bg-gray-800 opacity-50 absolute h-full w-full lg:hidden" onClick={() => setShow(!show)} />
                        <div className="absolute z-40 sm:relative w-64 md:w-96 shadow pb-4  bg-[#8CB9BD] dark:bg-[#043E44]   lg:hidden transition duration-150 ease-in-out h-full">
                            <div className="flex flex-col justify-between h-full w-full">
                                <div>
                                    <div className="flex items-center justify-between px-8">
                                        <div className="h-16 w-full flex items-center">
                                            <h1 className="text-xl  text-black  dark:text-white">Admin Panel</h1>
                                        </div>
                                        <div id="closeSideBar" className="flex text-black  dark:text-white items-center justify-center h-10 w-10" onClick={() => setShow(!show)}>
                                            <span class="material-symbols-outlined">
                                                close
                                            </span>
                                        </div>
                                    </div>
                                    <ul aria-orientation="vertical" className=" py-6">
                                        <li className="pl-6 cursor-pointer text-black text-sm leading-3 tracking-normal pb-4 pt-5 ">
                                            <div className="flex items-center">
                                                <div className="w-6 text-black  dark:text-white h-6 md:w-8 md:h-8">
                                                    <span class="material-symbols-outlined">
                                                        dashboard
                                                    </span>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-black  dark:text-white text-base">Dashboard</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-4 mb-4 py-2 ">
                                            <div className="flex items-center">
                                                <div className="w-6 text-black  dark:text-white h-6 md:w-8 md:h-8">
                                                    <span class="material-symbols-outlined">
                                                        shopping_bag
                                                    </span>
                                                </div>
                                                <span className="ml-2 xl:text-base md:text-2xl text-black  dark:text-white text-base">Products</span>
                                            </div>
                                        </li>
                                        <li className="pl-6 cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mb-4 py-2 ">
                                            <div className="flex items-center">
                                                <div className="w-6 text-black  dark:text-white h-6 md:w-8 md:h-8">
                                                    <span class="material-symbols-outlined">
                                                        group
                                                    </span>
                                                </div>
                                                <span className="ml-2 xl:text-base text-black  dark:text-white md:text-2xl text-base">Users</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <div className="flex justify-center mb-4 w-full px-6">
                                        <div className="relative w-full">
                                            <div className=" text-black  dark:text-white absolute ml-4 inset-0 m-auto w-4 h-4">
                                                <span class="material-symbols-outlined">
                                                    search
                                                </span>
                                            </div>
                                            <input className="bg-gray-200 dark:bg-gray-800  focus:outline-none rounded w-full text-sm  text-black  dark:text-white pl-10 py-2" type="text" placeholder="Search" />
                                        </div>
                                    </div>
                                    <div className="border-t border-gray-300">
                                        <div className="w-full flex items-center justify-between px-6 pt-1">
                                            <div className="flex items-center">
                                                <img alt="profile-pic" src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png" className="w-8 h-8 rounded-md" />
                                                <p className="md:text-xl text-black  dark:text-white text-base leading-4 ml-2">Jane Doe</p>
                                            </div>
                                            <ul className="flex">
                                                <li onClick={handleThemeToggle} className="cursor-pointer text-black  dark:text-white pt-5 pb-3 pl-3">

                                                    {theme === "light" ? (
                                                        <span className="material-symbols-outlined">
                                                            dark_mode
                                                        </span>
                                                    ) : (
                                                        <span className="material-symbols-outlined">
                                                            light_mode
                                                        </span>
                                                    )}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Mobile responsive sidebar*/}
                    {/* Sidebar ends */}
                    <div className="w-full">
                        {/* Navigation starts */}
                        <nav className="h-16 flex items-center lg:items-stretch justify-end lg:justify-between  bg-[#8CB9BD] dark:bg-[#043E44]  shadow relative z-10">
                            <div className="hidden lg:flex w-full pr-6">
                                <div className="w-1/2 h-full hidden lg:flex items-center pl-6 pr-24">
                                    <div className="relative w-full">
                                        <div className=" text-black  dark:text-white absolute ml-4 inset-0 m-auto w-4 h-4">
                                            <span class="material-symbols-outlined">
                                                search
                                            </span>
                                        </div>
                                        <input className="border border-gray-100 focus:outline-none focus:border-indigo-700 rounded w-full text-sm text-black  dark:text-white dark:bg-gray-800 bg-gray-100 pl-12 py-2" type="text" placeholder="Search" />
                                    </div>
                                </div>
                                <div className="w-1/2 hidden lg:flex">
                                    <div className="w-full flex items-center pl-8 justify-end">
                                        <div className="h-full w-20 flex items-center justify-center">
                                            <div onClick={handleThemeToggle} className="relative text-black  dark:text-white cursor-pointer text-gray-600">

                                                {theme === "light" ? (
                                                    <span className="material-symbols-outlined">
                                                        dark_mode
                                                    </span>
                                                ) : (
                                                    <span className="material-symbols-outlined">
                                                        light_mode
                                                    </span>
                                                )}
                                                <div />
                                            </div>
                                        </div>
                                        <div className="flex items-center relative cursor-pointer" onClick={() => setProfile(!profile)}>
                                            <div className="rounded-full">
                                                {profile ? (
                                                    <ul className="p-2 w-full border-r text-black  dark:text-white dark:bg-gray-800  bg-white absolute rounded left-0 shadow mt-12 sm:mt-16 ">
                                                        <li className="flex w-full justify-between cursor-pointer items-center">
                                                            <div className="flex items-center">
                                                                <span class="material-symbols-outlined">
                                                                    expand_more
                                                                </span>
                                                                <span className="text-sm ml-2">My Profile</span>
                                                            </div>
                                                        </li>
                                                        <li className="flex w-full justify-between  text-black  dark:text-white cursor-pointer items-center mt-2">
                                                            <div className="flex items-center">
                                                                <span class="material-symbols-outlined">
                                                                    logout
                                                                </span>
                                                                <span className="text-sm ml-2">Sign out</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                    ""
                                                )}
                                                <div className="relative">
                                                    <img className="rounded-full h-10 w-10 object-cover" src="https://tuk-cdn.s3.amazonaws.com/assets/components/sidebar_layout/sl_1.png" alt="avatar" />
                                                    <div className="w-2 h-2 rounded-full bg-green-400 border border-white absolute inset-0 mb-0 mr-0 m-auto" />
                                                </div>
                                            </div>
                                            <p className=" text-black  dark:text-white text-sm mx-3">Jane Doe</p>
                                            <div className="cursor-pointer  text-black  dark:text-white">
                                                <span class="material-symbols-outlined">
                                                    expand_more
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-600 mr-8 visible lg:hidden relative" onClick={() => setShow(!show)}>
                                {show ? (
                                    " "
                                ) : (
                                    <svg aria-label="Main Menu" aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu cursor-pointer" width={30} height={30} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </nav>
                        {/* Navigation ends */}
                        {/* Remove class [ h-64 ] when adding a card block */}
                        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
                            {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                            <div className="w-full h-full rounded border-dashed border-2 border-gray-300">{/* Place your content here */}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

