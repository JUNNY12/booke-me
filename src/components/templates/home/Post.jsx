import React from 'react';
import { FlexContainer } from '@/components/modules/Container';
import BlogCard from './BlogCard';
import Typography from '@/components/elements/Typography';

export const bookBlogPosts = [
    {
        id: 1,
        title: 'The Top 10 Must-Read Books of 2021',
        date: '2021-05-15',
        description:
            'A curated list of the most highly recommended books to read this year, featuring both classic and new releases across various genres.',
        image: '/images/post1.jpg',
    },
    {
        id: 2,
        title: '5 Mind-Expanding Books That Will Change Your Perspective',
        date: '2021-06-02',
        description:
            'A selection of books that challenge readers to think beyond their current beliefs and perspectives, covering topics such as philosophy, psychology, and spirituality.',
        image: '/images/post2.jpg',
    },
    {
        id: 3,
        title: 'A Guide to Building a Personal Library: Tips and Tricks',
        date: '2021-07-19',
        description:
            'A comprehensive guide on how to build your own personal library, including tips on selecting books, organizing them, and creating a cozy reading nook.',
        image: '/images/post3.jpg',
    },
    {
        id: 4,
        title: 'The Best Books to Read for Self-Improvement',
        date: '2021-08-06',
        description:
            'A list of self-improvement books that provide practical tips and inspiration for personal growth and development, including titles on productivity, mindfulness, and leadership.',
        image: '/images/post4.jpg',
    },
    {
        id: 5,
        title: 'The Benefits of Reading: Why You Should Pick Up a Book Today',
        date: '2021-09-10',
        description:
            'An overview of the many benefits of reading, including improved cognitive function, reduced stress, and increased empathy and understanding of others.',
        image: '/images/post3.jpg',
    },
];

const Post = () => {
    return (
        <section className="p-10 bg-white-50">
            <Typography
                variants={`2`}
                className={` text-3xl font-semibold text-center text-white-950`}
            >
                From Our Blog
            </Typography>

            <FlexContainer className="mt-6 flex-wrap items-center justify-center gap-x-8">
                {bookBlogPosts.slice(0, 4).map((post) => {
                    const { id, title, date, description, image } = post;
                    return (
                        <BlogCard
                            key={id}
                            id={id}
                            title={title}
                            date={date}
                            image={image}
                            description={description}
                        />
                    );
                })}
            </FlexContainer>
        </section>
    );
};

export default Post;
