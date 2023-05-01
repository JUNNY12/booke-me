import React from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button } from '../elements/Button';

const SideBar = ({ setShowSideBar, showSideBar }) => {
    const router = useRouter();

    const handleCloseSideBar = () => {
        setShowSideBar(prev => !prev)
      
    }


    return (
        <div className='sidebar bg-white-100 z-40 fixed h-full rounded-tl-md w-[180px] top-0 right-0'>
            <div role='button' title='Close Sidebar' className='text-2xl absolute left-4 top-4'
                onClick={handleCloseSideBar}
            >
                <AiOutlineClose />
            </div>

            <ul className='flex text-xl flex-col pt-40'>
                <Link href={`/`} className={` ${router.pathname == '/' ? ' text-pink-600 font-bold' : ''} `}>
                    <li className='me-8 my-2 hover:text-pink-600 ms-6 transition duration-500 ease-in-out'>Home</li>
                </Link>
                <Link href={`/store`} className={`${router.pathname == '/store' ? ' text-pink-600 font-bold' : ''} `}>
                    <li className='me-8 my-2 ms-6 transition duration-500 ease-in-out hover:text-pink-600'>Store</li>
                </Link>
                <Link href={`/blog`} className={`${router.pathname == '/blog' ? ' text-pink-600 font-bold' : ''} `}>
                    <li className='me-8 my-2 ms-6 transition duration-500 ease-in-out hover:text-pink-600'>Blog</li>
                </Link>
                <Link href={`/contact`} className={`${router.pathname == '/contact' ? ' text-pink-600 font-bold' : ''} `}>
                    <li className='me-8 my-2 ms-6 transition duration-500 ease-in-out hover:text-pink-600'>Contact</li>
                </Link>
                <Link href={`/auth/login`}>
                    <li className=' ms-6 absolute bottom-2 ' >
                        <Button className={` bg-pink-600 rounded-[20px] text-center  p-[0.15rem] pb-2 text-lg 
                            font-semibold text-white-50 w-[150px]
                            hover:bg-white-50 hover:border border-pink-600 transition ease-in-out duration-500 hover:text-white-950
                            `}>
                            Login
                        </Button>
                    </li>
                </Link>
            </ul>

        </div>
    )
}

export default SideBar