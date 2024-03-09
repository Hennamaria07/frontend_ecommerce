import React from 'react'
import { BestDeals, MainCarousel, TodaysDeal } from '../components'

const Hero = () => {
  return (
    <>
    <section className='dark:bg-[#121212ed]'>
    <MainCarousel />
    {/* <BestDeals /> */}
    <TodaysDeal />
    </section>
    </>
  )
}

export default Hero