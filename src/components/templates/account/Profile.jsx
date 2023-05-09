import React from 'react'
import Image from 'next/image'
import { Button, Typography } from '@/components/elements'
import Link from 'next/link'
import { MdAccountCircle } from 'react-icons/md'
import { FaMoneyBillAlt, FaShippingFast } from 'react-icons/fa'
import { BsCartFill } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { useRouter } from 'next/router'

export const Profile = () => {
    const router = useRouter()
    const isPath = router.pathname

    return (
        <div className='flex flex-col justify-center tabletM:items-center tabletM:justify-center '>
           
           <div className='bg-white-50 p-4 w-full rounded-sm shadow-sm shadow-black-300 mb-6 flex flex-col justify-center items-center'>
                <div className=' relative rounded-full w-28 h-28 mb-3'>
                    <Image src={`/images/img.jpg`} fill={true} alt='user'
                        priority={true} style={{ objectFit: 'cover', borderRadius: '100%' }} />
                </div>
                <Typography variants={3} className='text-2xl font-bold mb-8'>
                    John Doe
                </Typography>

                <div className=' text-white-950 font-semibold cursor-pointer'>
                    <Button className={` bg-pink-600 text-white-50 p-2 rounded-sm w-28`}>Logout</Button>
                </div>
           </div>

            <div className='bg-white-50 w-full p-4 rounded-sm shadow-sm shadow-black-300 mb-6'>
                <div className=' text-white-950 border-b border-white-50 p-3 font-semibold cursor-pointer hover:text-pink-600'>
                    <Link href='/account' className= {`flex items-center text-lg ${isPath == '/account'? ' text-pink-600' :'text-white-950' }`}>
                        <span className='me-2'><MdAccountCircle /></span>
                        <span>Account</span>
                    </Link>
                </div>
                <div className=' text-white-950 border-b border-white-50 p-3 font-semibold cursor-pointer hover:text-pink-600'>
                    <Link href='/account/billing-address' className={` flex items-center text-lg ${isPath == '/account/billing-address'? ' text-pink-600' :' text-white-950'}`}>
                        <span className='me-2'><FaMoneyBillAlt /></span>
                        <span>Billing Address</span>
                    </Link>
                </div>
                <div className=' text-white-950 border-b border-white-50 p-3 font-semibold cursor-pointer hover:text-pink-600'>
                    <Link href='/account/shipping-address' className={` flex items-center text-lg ${isPath == '/account/shipping-address' ? ' text-pink-600' : ' text-white-950'}`}>
                        <span className='me-2'><FaShippingFast /></span>
                        <span>Shipping Address</span>
                    </Link>
                </div>
                <div className=' text-white-950 border-b border-white-50 p-3 font-semibold cursor-pointer hover:text-pink-600'>
                    <Link href='/account/orders' className={` flex items-center text-lg ${isPath == '/account/orders' ? ' text-pink-600' : ' text-white-950'}`} >
                        <span className='me-2'><BsCartFill /></span>
                        <span>Orders</span>
                    </Link>
                </div>
                <div className=' text-white-950 border-b border-white-50 p-3 font-semibold cursor-pointer hover:text-pink-600'>
                    <Link href='/account/change-password' className={` flex items-center text-lg ${isPath == '/account/change-password' ? ' text-pink-600' : ' text-white-950'}`}>
                        <span className='me-2'><AiFillLock /></span>
                        <span>Change Password</span>
                    </Link>
                </div>
            </div>

        </div>
    )
}
