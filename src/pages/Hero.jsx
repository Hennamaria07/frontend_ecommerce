import React from 'react'
import { BestDeals, Catagories, MainCarousel, Services, TodaysDeal } from '../components'

const Hero = () => {
  return (
    <>
    <section className='dark:bg-[#121212ed]'>
    <MainCarousel />
    <TodaysDeal />
    <Catagories />
    <BestDeals />
    <Services />
    </section>
    </>
  )
}

export default Hero