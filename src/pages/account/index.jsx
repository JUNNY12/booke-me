import React from 'react'
import { AccountLayout } from '@/components/layouts'
import { Input, Typography, Button } from '@/components/elements'
import { sayGreetings } from '@/utils'

const Account = () => {
  return (
    <AccountLayout>
        <Typography variants={3} className='text-2xl font-bold mb-6'>
            Account
        </Typography>

        <div>
            <Typography variants={3} className='text-xl italic mb-3'>
                {sayGreetings()}
                <span> John Doe, </span>
            </Typography>
        </div>

        <div>
            <Typography variants={3} className='text-xl mb-8'>
                Welcome to your account dashboard. Here you can manage your account settings.
            </Typography>
        </div>

        <div>
            <form action="" className=' flex flex-col'>
                <Input
                placeholder='change display name'
                name='displayName'
                type='text'
                className=' bg-white-100 rounded-sm p-3 mb-4 w-[250px] font-semibold '
                />

                <Button className={` bg-pink-600 text-white-50 w-[125px] p-2 rounded-sm font-semibold`}>Save Changes</Button>
            </form>
        </div>
    </AccountLayout>
  )
}

export default Account