import React from 'react'
import { BestDeals, Catagories, Footer, Header, MainCarousel, Services, TodaysDeal } from '../components'

const Hero = () => {
  return (
    <>
    <Header />
    <section className='dark:bg-[#121212ed]'>
    <MainCarousel />
    <TodaysDeal />
    <Catagories />
    <BestDeals />
    <Services />
    </section>
    <Footer />
    </>
  )
}

export default Hero