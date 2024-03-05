import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const customDotListStyle = {
    color: "#043E44"
}
const MainCarousel = () => {
    return (
        <>
            <Carousel 
            className='customHeight'
            responsive={responsive}
            showDots={true}
            autoPlay={true}
            infinite={true}
            >
                <div className='customCarouselHeight'>
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" className='w-full h-full' alt="product image" />
                </div>
                <div className='customCarouselHeight'>
                    <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" className='w-full h-full' alt="" />
                </div>
                <div className='customCarouselHeight'>Item 3</div>
                <div className='customCarouselHeight'>Item 4</div>
            </Carousel>
        </>
    )
}

export default MainCarousel
