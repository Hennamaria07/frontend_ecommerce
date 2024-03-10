import React from 'react'
import { BestDeals, Catagories, MainCarousel, TodaysDeal } from '../components'

const Hero = () => {
  return (
    <>
    <section className='dark:bg-[#121212ed]'>
    <MainCarousel />
    {/* <BestDeals /> */}
    <TodaysDeal />
    <Catagories />
    </section>
    </>
  )
}

export default Hero