import React from 'react'
import { Typography } from '@/components/elements'
import { Books } from '../home/PopularBooks'
import Image from 'next/image'
import { formatCurrency } from '@/utils'
import { Rating } from '@/components/modules'

const TopProducts = () => {
    return (
        <div>
            <div className=' bg-white-50 h-full tabletS:w-full w-[220px] rounded-md p-4 mt-8'>
                <Typography variants={3} className={` text-xl text-white-950 mb-3`}>
                    Top Products
                </Typography>

                <div>
                    {Books.slice(0 , 4).map((book) => {
                        const {id, title, price, image, rating} = book
                        return(
                            <div key={id} className='mb-4 flex'>
                                <div className=' object-cover w-[80px] h-[80px] me-4'>
                                    <Image src={image} height={100} width={100} priority className='w-full h-full object-cover' />
                                </div>

                                <div>
                                    <Typography variants={3} className={` text-sm text-white-950 mb-3`}>
                                        {title.substring(0, 10) + '...'}
                                    </Typography>
                                    <div>
                                        <Rating rating={rating} />
                                    </div>
                                    <div>
                                        {formatCurrency(price)}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )}
                </div>
                
            </div>
        </div>
    )
}

export default TopProducts