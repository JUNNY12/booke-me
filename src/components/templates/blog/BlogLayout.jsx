import React from 'react'
import { TopProducts } from '../bookStore'
import { BlogContainer, RecentPosts } from '.'

export const BlogLayout = () => {
    return (
        <section className='mx-8 tabletS:mx-4 flex justify-center  tabletS:flex-col'>
            <div>
                <BlogContainer />
            </div>
            <div>
                <TopProducts />
                <RecentPosts />
            </div>
        </section>
    )
}
