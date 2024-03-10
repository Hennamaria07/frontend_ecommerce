import React from 'react'
import { BestDeals, Catagories, MainCarousel, TodaysDeal } from '../components'

const Hero = () => {
  return (
    <>
    <section className='dark:bg-[#121212ed]'>
    <MainCarousel />
    <TodaysDeal />
    <Catagories />
    <BestDeals />
    </section>
    </>
  )
}

export default Hero