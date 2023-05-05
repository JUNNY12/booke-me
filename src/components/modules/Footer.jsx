import React from 'react'
import { AiFillLinkedin, AiFillTwitterSquare, AiFillInstagram, AiFillFacebook } from "react-icons/ai"
import { useRouter } from 'next/router'
import { Button, Input } from '../elements'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

    const router = useRouter()

    const changeBg = router.pathname === '/cart' || router.pathname === '/store' || router.pathname === '/blog'
    return (
        <footer className={`px-8  relative py-16 mt-16 flex justify-center flex-col items-center bg-white-100 ${changeBg && ' bg-white-50'}`}>
            <ul className='flex mobileXL:flex-col'>
                <li className=' me-8 mobileXL:mb-4 mobileM:text-xl cursor-pointer text-center text-white-950 text-2xl
         hover:text-pink-600 transition duration-500 ease-in-out'>
                    Home
                </li>
                <li className=' me-8 mobileXL:mb-4 mobileM:text-xl cursor-pointer text-center text-white-950 text-2xl
         hover:text-pink-600 transition duration-500 ease-in-out'>
                    Blog
                </li>
                <li className=' me-8 mobileXL:mb-4 mobileM:text-xl cursor-pointer text-center text-white-950 text-2xl
         hover:text-pink-600 transition duration-500 ease-in-out'>
                    Store
                </li>
                <li className=' me-8 mobileXL:mb-4 mobileM:text-xl cursor-pointer text-center text-white-950 text-2xl
         hover:text-pink-600 transition duration-500 ease-in-out'>
                    Contact
                </li>
            </ul>

            <div>
                <div>
                    <p className='text-white-950 text-xl text-center mt-4 mb-2 mobileM:font-semibold'>
                        Subscribe to our newsletter
                    </p>
                </div>
                <form action="" className=' inline-flex flex-col'>
                    <Input placeholder='Enter your email' className='w-[400px] text-white-950 placeholder:text-white-950 bg-white-300 p-2 mobileM:w-[300px] mobileS:w-[250px] mt-2 rounded-sm' />
                    <Button className='bg-pink-600 text-white-50 mt-4 font-bold
                    hover:text-pink-600 hover:bg-white-50 hover:border hover:border-pink-600 transition duration-500 ease-in-out w-[400px]
                    mobileM:w-[300px] p-2 rounded-sm  mobileS:w-[250px]'>Subscribe</Button>
                </form>
            </div>

            <div className='flex items-center mt-8'>
                <div className='me-6 text-3xl hover:text-pink-600 transition duration-500 ease-in-out text-white-950 cursor-pointer'>
                    <AiFillFacebook />
                </div>
                <div className='me-6 text-3xl hover:text-pink-600 transition duration-500 ease-in-out text-white-950 cursor-pointer'>
                    <AiFillInstagram />
                </div>
                <div className='me-6 text-3xl hover:text-pink-600 transition duration-500 ease-in-out text-white-950 cursor-pointer'>
                    <AiFillTwitterSquare />
                </div>
                <div className='me-6 text-3xl hover:text-pink-600 transition duration-500 ease-in-out text-white-950 cursor-pointer'>
                    <AiFillLinkedin />
                </div>
            </div>

            <div>
                <p className=' text-white-950 text-xl text-center mt-8 mobileM:text-base mobileM:font-semibold'>
                    &copy; {year} Booke. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer