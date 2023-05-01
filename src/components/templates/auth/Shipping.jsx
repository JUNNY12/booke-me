import React from 'react'
import { Typography, Input, Button } from '@/components/elements'

const Shipping = () => {
    return (
        <div className='flex justify-center items-center'>
            <form action="" className='w-[400px] mobileXL:w-[300px] rounded-md h-[600px] mt-8
           bg-[#ffffff88] shadow-md  shadow-black-800 p-4 mobileM:p-1
           '>
                <Typography variants={`1`} className={`text-3xl mb-6 text-white-950 text-center`}>
                    Account Setup
                </Typography>
                <div className=' mb-3'>
                    <div className=''>
                        <Typography variants={`2`} className={`text-2xl text-white-950`}>
                            Shipping Info
                        </Typography>
                    </div>
                </div>

                <div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`text`}
                            placeholder={`First Name`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`text`}
                            placeholder={`Last Name`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`text`}
                            placeholder={`Address`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`text`}
                            placeholder={`City`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`text`}
                            placeholder={`State`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='mb-3'>
                        <Input
                            required
                            type={`number`}
                            placeholder={`Zip Code`}
                            className={`bg-[#ffffff88] w-full h-[45px] rounded-tr-sm rounded-br-sm indent-4
                        placeholder:text-white-950`}
                        />
                    </div>
                    <div className='flex justify-between mb-3 items-center'>
                        <div className=''>
                            <Button className={`w-[90px] bg-white-50  p-2
                         rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold `}>
                                Prev
                            </Button>
                        </div>

                        <div className=''>
                            <Button className={`w-[90px] bg-white-50  p-2
                         rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold `}>
                                Next
                            </Button>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <Button className={`w-full bg-white-50  p-2
                         rounded-sm hover:bg-pink-600  hover:text-white-50 font-semibold `}>
                            Submit
                        </Button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Shipping