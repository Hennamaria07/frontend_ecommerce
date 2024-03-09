import React from 'react'

const Seller = () => {
    return (
        <>
            <section className='dark:bg-gray-800 pt-[150px] min-h-[100vh] sm:px-32 px-12 pb-5 text-gray-900 dark:text-gray-50'>
                <div>
                    <h1 className='text-center sm:text-4xl pb-2 text-2xl font-bold line-clamp-4'>Become a Seller<span className='sm:inline hidden'> of Go Shopper</span></h1>
                    <h3 className='text-lg font-semibold'>Join Our Seller Community!</h3>
                    <p className='text-justify'>
                        Are you looking to expand your reach and showcase your products to a wider audience? Our e-commerce platform offers you the perfect opportunity to do just that! Becoming a seller with us is straightforward but requires approval to ensure a seamless fit within our community and standards.
                    </p>
                    <div className='py-5'>
                        <h3 className='text-lg font-semibold'>Here’s how to start your journey as a seller:</h3>
                        <ul className='grid gap-5 px-5 pt-5 text-justify'>
                            <li className='list-decimal'>
                                <span className='font-semibold'>Click on 'Send a Request':</span> By clicking this button, you express your interest in becoming a seller. This action sends a notification to our admin team, who are responsible for reviewing and approving new sellers.
                            </li>
                            <li className='list-decimal'>
                                <span className='font-semibold'>Wait for Approval:</span> Once your request has been sent, our admin team will review your application. We look for potential sellers who align with our values and commitment to quality and service. This process ensures that our marketplace remains a trusted environment for both buyers and sellers.
                            </li>
                            <li className='list-decimal'>
                                <span className='font-semibold'>Check Your Inbox:</span> Keep an eye on your email inbox. We will contact you with the next steps once your request has been reviewed. Approval times can vary, but we strive to respond as quickly as possible.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold'>Important to Note:</h3>
                        <ul className='grid gap-5 pt-5 px-5 text-justify'>
                            <li className='list-disc'>
                                The approval process is essential to maintain the quality of our marketplace and ensure that all sellers meet our guidelines.
                            </li>
                            <li className='list-disc'>
                                During the wait, consider preparing the details about your products, business model, and any questions you may have about selling on our platform.
                            </li>
                            <li className='list-disc'>
                                If you have any concerns or questions while waiting for approval, our support team is here to assist you. Feel free to reach out to us.
                            </li>
                        </ul>
                    </div>
                    {/* <div className='text-justify tracking-widest font-semibold py-5'>
       We’re excited about the possibility of having you as a part of our seller community! Your unique products are what make our platform diverse and vibrant. We thank you for your interest and patience throughout the approval process.
       </div> */}
                    <div className='grid py-5 place-items-center'>
                        <button className='bg-[#043E44] w-[200px] p-2 text-slate-200 rounded-md'>
                            Send a Request
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seller
