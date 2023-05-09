import React from 'react'
import { AccountLayout } from '@/components/layouts'
import { Typography } from '@/components/elements'

const Orders = () => {
  return (
   <AccountLayout>
         <Typography variants={3} className='text-2xl font-bold mb-8'>
            Orders
        </Typography>
    </AccountLayout>
  )
}

export default Orders