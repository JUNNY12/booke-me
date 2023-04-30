import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter();
    
    return (
        <header className='text-white-950 px-10 py-6 bg-white-50'>
            <nav className=' flex gap-x-40 justify-between items-center'>
                <div className='text-2xl font-bold'>Book-Me</div>
                <ul className='flex text-xl '>
                    <Link href={`/`} className={` ${router.pathname== '/' ? ' text-pink-800 font-bold' : ''} `}>
                        <li className='me-8 text-center'>Home</li>
                    </Link>
                    <Link href={`/store`} className={`${router.pathname == '/store'? ' text-pink-800 font-bold' : ''} `}>
                        <li className='me-8'>Book Store</li>
                    </Link>
                    <Link href={`/blog`} className={`${router.pathname == '/blog'? ' text-pink-800 font-bold' : ''} `}>
                        <li className='me-8'>Blog</li>
                    </Link>
                    <Link href={`/contact`} className={`${router.pathname == '/contact'? ' text-pink-800 font-bold' : ''} `}>
                        <li>Contact</li>
                    </Link>
                </ul>

                <div>
                    <AiOutlineShoppingCart className='text-2xl' />
                </div>
            </nav>
        </header>
    )
}

export default Header