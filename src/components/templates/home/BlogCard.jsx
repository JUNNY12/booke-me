import React from 'react';
import Image from 'next/image';
import Typography from '@/components/elements/Typography';
import { formatDate } from '@/utils';
import Link from 'next/link';

const BlogCard = ({ id, title, date, description, image }) => {
    let slug;

    if (title) {
        slug = title;
    }

    return (
        <Link href={`/blog/${slug}`}>
            <div
                className={`w-[250px] mb-8 bg-white-50 shadow-sm shadow-black-400 
            h-[320px] rounded-md p-2 cursor-pointer
            hover:-translate-y-2 transition ease-in-out duration-500
        `}
            >
                <div className="h-[150px] w-full relative rounded-sm">
                    <Image
                        src={image}
                        alt={title}
                        fill={true}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        style={{ objectFit: 'cover' }}
                        className="rounded-sm"
                        priority={true}
                    />
                </div>
                <Typography
                    variants={3}
                    className={`mt-2 text-lg font-semibold hover:underline hover:text-pink-600`}
                >
                    {title.substr(0, 20) + '...'}
                </Typography>
                <div className="mt-2 text-lg italic">{formatDate(date)}</div>

                <p className="mt-2">{description.substr(0, 40) + '...'}</p>
            </div>
        </Link>
    );
};

export default BlogCard;
