import React from 'react'
import { Typography } from '@/components/elements'


const BookCategory = () => {
    return (
        <div>
            <div className=' bg-white-50  h-[235px] rounded-md w-[220px] tabletS:w-full tabletS:mb-8 p-4 mt-8'>
                <Typography variants={3} className={` text-xl text-white-950 mb-3`}>
                    Book Category
                </Typography>

                <div className=' text-xl text-white-950'>
                    <ul>
                        <li className='mb-2'>
                            Drama
                        </li>
                        <li className='mb-2'>
                            Fiction
                        </li>
                        <li className='mb-2'>
                            History
                        </li>
                        <li className='mb-2'>
                            Horror
                        </li>
                        <li className='mb-2'>
                            Kids
                        </li>
                    </ul>

                </div>

            </div>
        </div>
    )
}

export default BookCategory