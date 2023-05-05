import { Typography } from '@/components/elements'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const BlogPost = ({ id, date, title, description, image }) => {
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'long' })
    const day = newDate.toLocaleString('default', { day: 'numeric' })
    const year = newDate.toLocaleString('default', { year: 'numeric' })

    const formattedDate = month + ' ' + day + ', ' + year
  return (
    <article className='my-8'>
        <div className=' text-white-500 text-base'>{formattedDate}</div>
        <Typography variants={3} className={` text-2xl mb-4 font-semibold text-white-950 mb-3`}>
            {title}
        </Typography>

        <div className='w-[full] h-[250px] object-cover mb-4'>
            <Image src={image} alt={title} width={200} height={300} className='w-full h-full object-cover rounded-sm' priority />
        </div>

        <p className='mb-4 text-lg'>
            {description .substring(0, 100) + '...'}
        </p>

        <Link href='/' className='text-pink-600 text-lg italic hover:underline'>
            continue reading ...
        </Link>

    </article>
  )
}
