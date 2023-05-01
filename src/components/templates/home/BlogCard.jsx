import React from 'react'
import Image from 'next/image'
import Typography from '@/components/elements/Typography'

const BlogCard = ({ title, date, description, image }) => {
    const newDate = new Date(date)
    const month = newDate.toLocaleString('default', { month: 'long' })
    const day = newDate.toLocaleString('default', { day: 'numeric' })
    const year = newDate.toLocaleString('default', { year: 'numeric' })
    return (
        <div className={`w-[250px] mb-8 bg-white-50 shadow-md shadow-black-400 
        h-[300px] border rounded-md border-white-200 p-2 cursor-pointer
        hover:-translate-y-2 transition ease-in-out duration-500
        `}>
            <div className='h-[150px] w-full object-cover rounded-sm'>
                <Image src={image} alt={title} width={200} height={300} className='w-full h-full object-cover rounded-sm' priority />
            </div>
            <Typography variants={3} className={`mt-2 text-xl font-semibold hover:underline hover:text-pink-600`}>
                {title.substr(0, 20) + '...'}
            </Typography>
            <div className='mt-2 text-lg italic'>
                {month + ' ' + day + ', ' + year}
            </div>

            <p className='mt-2'>
                {description.substr(0, 50) + '...'}
            </p>


        </div>
    )
}

export default BlogCard