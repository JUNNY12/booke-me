import React from 'react'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import {BlogLayout} from '@/components/templates/blog'

const Blog = () => {
    return (
        <section className='bg-white-100 '>
            <DefaultLayout>
                <BlogLayout/>
            </DefaultLayout>
        </section>
    )
}

export default Blog