import React, { useEffect, useState } from 'react'
import AdinNavbar from './AdinNavbar'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import instance from '../../utils/axios';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const BannerView = () => {
    const show = useSelector(state => state.mode.show);
    const [banner, setBanner] = useState(null);
    const {id} = useParams();
    console.log(id);
    useEffect(() => {
        const getBanner = async() => {
            try {
                const res = await instance.get(`/api/v1/banner/${id}`, {withCredentials: true});
                if(res.data.success) {
                    setBanner(res.data.banner);
                    console.log(res.data.message);
                }
            } catch (error) {
               console.log(error.response.data.message)
            }
        }
        getBanner();
}, [id]);
    return (
        <>
            <section className="w-full h-full min-h-[100vh] lg:bg-white lg:dark:bg-[#121212ed]">
                <AdinNavbar />
                <div className={`${show ? 'w-[calc(100vw-256px)] relative top-0 z-8 pt-[64px] left-[256px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent min-h-[100vh]' : 'lg:w-[calc(100vw-256px)] w-full absolute top-0 z-100 lg:left-[256px] pt-[64px] bg-white dark:bg-[#121212ed] lg:bg-transparent lg:dark:bg-transparent min-h-[100vh]'}`}>
                    <div className="p-5 ">
                    {/* <Breadcrumb aria-label="Default breadcrumb example">
      <Link to={'/admin'}>
      <Breadcrumb.Item >
        Dashbord
      </Breadcrumb.Item>
      </Link>
      <Link to={'/admin/banner'}>
      <Breadcrumb.Item >
        Banner
      </Breadcrumb.Item>
      </Link>
    </Breadcrumb> */}
    <Breadcrumb aria-label="Default breadcrumb example">
    
      <Breadcrumb.Item >
      <Link to={'/admin'}>Dashbord
      </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
      <Link to={'/admin/banner'}>Banner
      </Link>
      </Breadcrumb.Item>
    </Breadcrumb>
                   <div className='flex justify-center pt-5 items-center w-full h-full'>

                        <img class="h-[70vh] max-w-full" src={banner?.image?.url} alt="image description" />
                   </div>


                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerView
