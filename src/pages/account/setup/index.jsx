import React from 'react'
import { AccountSetup } from '@/components/templates/account'
import { FormProvider } from '@/context/FormContext'
import { Typography } from '@/components/elements'
import Image from 'next/image'

const Setup = () => {
    return (
        <FormProvider>
            <section className=' flex tabletM:flex-col'>
                <div className='relative h-screen w-1/2 tabletM:h-[80px] tabletM:w-full'>
                    <div className=' absolute left-1/2 top-1/2 text-center w-full transform -translate-x-1/2 -translate-y-1/2 z-20'>
                        <Typography variants={3}>
                            <span className='text-5xl tabletM:text-3xl mobileXL:text-xl font-bold text-white-50'>Setup Address</span>
                        </Typography>
                    </div>
                    <div className='absolute top-0 left-0 w-full h-full tabletM:h[70px] bg-[#00000088] z-10'></div>
                    <Image src='/images/setup.svg' fill={true} priority={true} style={{ objectFit: 'contain' }} />
                </div>

                <div className='bg-white-100 h-screen w-1/2 tabletM:w-full tabletM:h-max'>
                    <div className='flex justify-center items-center'>
                        <AccountSetup />
                    </div>

                </div>
            </section>

        </FormProvider>
    )
}

export default Setup