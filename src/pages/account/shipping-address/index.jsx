import React from 'react'
import { AccountLayout } from '@/components/layouts'
import { Typography, Input, Button } from '@/components/elements'
import { statesInNigeria } from '@/constants'

const ShippingAddress = () => {
    return (
        <AccountLayout>
            <div>
                <Typography variants={3} className='text-2xl font-bold mb-8'>
                    Shipping Address
                </Typography>
                <form action="">
                    <div className=' flex tabletS:flex-col '>
                        <div className='w-1/2 me-2 tabletS:w-full tabletS:me-0'>
                            <Input
                                placeholder='First Name'
                                name='firstName'
                                type='text'
                                className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                            />
                        </div>

                        <div className='w-1/2 tabletS:w-full tabletS:mt-6'>
                            <Input
                                placeholder='Last Name'
                                name='lastName'
                                type='text'
                                className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                            />
                        </div>
                    </div>
                    <div className='w-full mt-6'>
                        <Input
                            placeholder='Phone Number'
                            name='phoneNumber'
                            type='number'
                            className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                        />
                    </div>
                    <div className='w-full mt-6'>
                        <Input
                            placeholder='Email'
                            name='email'
                            type='email'
                            className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                        />
                    </div>

                    <div className='w-full mt-6'>
                        <Input
                            placeholder='Address'
                            name='address'
                            type='text'
                            className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                        />
                    </div>

                    <div className='w-full mt-6'>
                        <Input
                            placeholder='city'
                            name='city'
                            type='text'
                            className='w-full bg-white-100 rounded-sm p-3 font-semibold '
                        />
                    </div>
                    <select name="state" id="state" className='w-full mt-6 bg-white-100 rounded-sm  p-3 font-semibold '>
                        <option>select state</option>
                        {
                            statesInNigeria.map((state) => {
                                return (
                                    <option key={state} value={state}>{state}</option>
                                )
                            })
                        }
                    </select>

                    <div className='w-full my-6 mb-12'>
                        <Input
                            placeholder='Zip code'
                            name='zipCode'
                            type='number'
                            className=' w-full bg-white-100 rounded-sm p-3 font-semibold '
                        />
                    </div>

                    <Button className={` w-full rounded-md bg-pink-600 p-3 text-white-50 font-semibold`}>Save Changes</Button>

                </form>
            </div>

        </AccountLayout>
    )
}

export default ShippingAddress