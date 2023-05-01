import React from 'react'
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../elements/Button'

const Header = () => {
    const router = useRouter();

    return (
        <header className='text-white-950 px-10 py-6 tabletXS:px-4 relative bg-white-50'>
            <nav className=' flex gap-x-40 justify-between items-center'>
                <div className='text-2xl font-bold mobileXL:text-xl'>Booke</div>
                <ul className='flex text-xl tabletL:hidden'>
                    <Link href={`/`} className={` ${router.pathname == '/' ? ' text-pink-600 font-bold' : ''} `}>
                        <li className='me-8 hover:text-pink-600 text-center transition duration-500 ease-in-out'>Home</li>
                    </Link>
                    <Link href={`/store`} className={`${router.pathname == '/store' ? ' text-pink-600 font-bold' : ''} `}>
                        <li className='me-8 text-center transition duration-500 ease-in-out hover:text-pink-600'>Store</li>
                    </Link>
                    <Link href={`/blog`} className={`${router.pathname == '/blog' ? ' text-pink-600 font-bold' : ''} `}>
                        <li className='me-8 text-center transition duration-500 ease-in-out hover:text-pink-600'>Blog</li>
                    </Link>
                    <Link href={`/contact`} className={`${router.pathname == '/contact' ? ' text-pink-600 font-bold' : ''} `}>
                        <li className='me-8 text-center transition duration-500 ease-in-out hover:text-pink-600'>Contact</li>
                    </Link>
                    <Link href={`/auth/login`}>
                        <li className=' text-center'>
                            <Button className={` bg-pink-600 rounded-[20px] text-center  p-[0.15rem] pb-2 text-lg 
                            font-semibold text-white-50 w-[90px]
                            hover:bg-white-50 hover:border border-pink-600 transition ease-in-out duration-500 hover:text-white-950
                            `}>
                                Login
                            </Button>
                        </li>
                    </Link>
                </ul>

                <div className=' relative cursor-pointer tabletL:absolute right-[8 0px]'>
                        <div className='absolute top-[-10px] right-[-20px]
                         bg-pink-600 rounded-full w-[20px] h-[20px] text-white-50
                        text-xs flex justify-center items-center'>0
                        </div>
                    <AiOutlineShoppingCart className='text-2xl' />
                </div>

                <div className='text-2xl hidden tabletL:block'>
                    <AiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header