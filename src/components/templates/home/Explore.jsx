import { Button } from '@/components/elements/Button'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"
import { Container } from '@/components/modules/Container'
import Typography from '@/components/elements/Typography'


const Explore = () => {
    return (
        // <section className=' bg-bg-4 bg-cover h-[250px] relative p-10 ' >
        //     <div className='absolute inset-0  h-[250px] flex items-center justify-center 
        //      bg-black-950 bg-opacity-60 text-white-50 '>
        //         <Container>
        //             <p className='text-4xl text-center tabletXS:text-2xl'>Browse through our complete Library</p>

        //             <div className='mt-4 text-center'>
        //                 <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
        //                     w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
        //                     rounded-[20px] hover:bg-white-50`}>
        //                     <span className='me-3'>Browse Collection</span>
        //                     <span><AiOutlineArrowRight /></span>
        //                 </Button>
        //             </div>
        //         </Container>
        //     </div>

        // </section>
        <div className="h-[250px] bg-bg-3 bg-cover relative">
            <div className="absolute inset-0  h-[250px] bg-black-950 bg-opacity-60">
                <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                    <Typography variants={1} className=' text-5xl mobileXL:text-3xl mb-6'>
                        Indulge Your Passion for Reading
                    </Typography>
                    <p className="text-2xl mobileXL:text-lg italic max-w-[600px] mb-4">
                        Immerse yourself in a world of literature with our carefully
                        curated selection of books,
                        designed to cater to every interest and taste
                    </p>

                    <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                                     w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                                     rounded-[20px] hover:bg-white-50`}>
                        <span className='me-3'>See More</span>
                        <span><AiOutlineArrowRight /></span>
                    </Button>
                </Container>
            </div>
        </div>
    )
}

export default Explore 