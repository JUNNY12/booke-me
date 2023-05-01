import { Button } from '@/components/elements/Button'
import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai"


const Explore = () => {
    return (
        <section className=' bg-bg-4 bg-cover h-[250px] relative p-10 ' >
            <div className='absolute inset-0  h-[250px] flex items-center justify-center 
             bg-black-950 bg-opacity-60 text-white-50 '>
                <div className='p-3'>
                    <p className='text-4xl text-center tabletXS:text-2xl'>Browse through our complete Library</p>

                    <div className='mt-4 text-center'>
                        <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                            w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                            rounded-[20px] hover:bg-white-50`}>
                            <span className='me-3'>Browse Collection</span>
                            <span><AiOutlineArrowRight /></span>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Explore 