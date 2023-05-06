import React from 'react'
import { Card } from '@/components/modules'
import Image from 'next/image'
import { formatCurrency } from '@/utils'
import { Button, Typography } from '@/components/elements'
import { FiSend } from 'react-icons/fi'
import { BsCartPlus } from 'react-icons/bs'
import Link from 'next/link'

const FlexCard = ({ id, title, author, price, description, publication_year, genre, language, image }) => {

    let slug;
    if (title) {
        slug = title
    }
    return (
        <Card className={`me-6 w-[220px] tabletS:w-[280px] mb-6 tabletXS:[300px] tabletXS:me-0 tabletS:my-4`}>
            <div className='h-[250px] relative rounded-sm'>
                <Image src={image} alt={title} fill={true}
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                style={{objectFit:'cover'}} className='rounded-sm' priority={true} />
            </div>

            <div className=' text-center text-white-950 mt-4'>
                <Typography variants={`3`} className={`text-lg`}>
                    {title}
                </Typography>

                <Typography variants={`4`} className={`text-sm mt-2 italic`} >
                    {author}
                </Typography>

                <div className='mt-2 text-xl'>
                    {formatCurrency(price)}
                </div>
            </div>
            <div className=' flex absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Link href={`/store/${slug}`}>
                    <Button className={`hover:bg-pink-600 transition ease-in-out duration-500 
                        w-[100px] inline-flex items-center hover:text-white-50 justify-center p-1
                        rounded-tl-[20px] rounded-bl-[20px] border border-white-800`}>
                        <span className='me-2'><FiSend /></span>
                        <span>Details</span>
                    </Button>
                </Link>
                <Button className={`hover:bg-pink-600 hover:text-white-50 transition ease-in-out duration-500
                 w-[100px] inline-flex items-center justify-center p-1
                 rounded-tr-[20px] rounded-br-[20px] border border-white-800`}>
                    <span className='me-2'><BsCartPlus /></span>
                    <span>Buy</span>
                </Button>
            </div>


        </Card>
    )
}

export default FlexCard