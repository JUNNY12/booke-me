import React from 'react'
import { BlogPost } from '.'
import { bookBlogPosts } from '../home/Post'


export const BlogContainer = () => {
    return (
        <div className=' bg-white-50 p-8 tabletS:px-4 me-8 tabletS:me-0 tabletS: mb-6 rounded-md'>
            {
                bookBlogPosts.slice(0, 3).map((post) => {
                    const { id, date, title, description, image } = post

                    return (
                        <BlogPost
                            key={id}
                            id={id}
                            date={date}
                            title={title}
                            description={description}
                            image={image}
                        />
                    )
                })
            }

        </div>
    )
}
