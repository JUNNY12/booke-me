import React from 'react'
import { AccountSetup } from '@/components/templates/account'
import { FormProvider } from '@/context/FormContext'
import { Typography } from '@/components/elements'

const Setup = () => {
  return (
    <FormProvider>
      <div className='bg-pink-400 h-screen '>
        <Typography variants={1} className={`text-center pt-8 text-3xl text-white-950 mobileXL:text-2xl`}>
          Set up your account
        </Typography>
        <div className='flex justify-center items-center'>
          <AccountSetup />
        </div>

      </div>

    </FormProvider>
  )
}

export default Setup