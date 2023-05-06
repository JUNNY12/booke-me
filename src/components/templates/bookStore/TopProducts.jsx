import React from 'react'
import { Typography } from '@/components/elements'
import { Books } from '../home/PopularBooks'
import Image from 'next/image'
import { formatCurrency } from '@/utils'
import { Rating } from '@/components/modules'
import { useRouter } from 'next/router'
import Link from 'next/link'

const TopProducts = () => {
    const router = useRouter()

    const changeWidth = router.pathname === '/store' ? 'w-[220px]' : 'w-[300px]'
    const changeMargin = router.pathname === '/store' ? 'me-4' : 'me-6'
    const changeMargin2 = router.pathname === '/store' ? 'mb-2' : 'mb-4'
    const changeMargin3 = router.pathname === '/store' ? 'mt-4' : 'mt-0'

    return (
        <div>
            <div className={` bg-white-50 h-full tabletS:w-full ${changeWidth} rounded-md p-4 ${changeMargin3}`}>
                <Typography variants={3} className={` text-xl text-white-950 mb-3`}>
                    Top Products
                </Typography>

                <div>
                    {Books.slice(0, 4).map((book) => {
                        const { id, title, price, image, rating } = book
                        const formatTitle = router.pathname === '/bookStore' ? title.substring(0, 10) + '...' : title.substring(0, 20) + '...'
                        let slug;
                        if (title) {
                            slug = title
                        }
                        return (
                            <Link href={`/store/${slug}`} key={id}>
                                <div  className={`mb-2 flex ${changeMargin2}`}>
                                    <div className={`relative w-[80px] h-[80px] me-4 ${changeMargin}`}>
                                        <Image src={image} fill={true} alt={title}
                                            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                                            priority={true} style={{ objectFit: 'cover' }} className='' />
                                    </div>

                                    <div>
                                        <Typography variants={3} className={` text-sm text-white-950 mb-3`}>
                                            {formatTitle}
                                        </Typography>
                                        <div>
                                            <Rating rating={rating} />
                                        </div>
                                        <div>
                                            {formatCurrency(price)}
                                        </div>
                                    </div>

                                </div>
                          </Link>
                        )
                    }
                    )}
                </div>

            </div>
        </div>
    )
}

export default TopProducts