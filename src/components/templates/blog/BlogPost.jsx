import { Typography } from '@/components/elements';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/utils';

export const BlogPost = ({ id, date, title, description, image }) => {
    let slug;

    if (title) {
        slug = title;
    }
    return (
        <article className="my-8">
            <div className=" text-white-500 text-base">{formatDate(date)}</div>
            <Typography
                variants={3}
                className={` text-2xl mb-4 font-semibold text-white-950 `}
            >
                {title}
            </Typography>

            <div className="w-full relative h-[300px] mb-4">
                <Image
                    src={image}
                    alt={title}
                    fill={true}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="rounded-sm"
                    priority={true}
                />
            </div>

            <p className="mb-4 text-lg">
                {description.substring(0, 100) + '...'}
            </p>

            <Link
                href={`/blog/${slug}`}
                className="text-pink-600 text-lg italic hover:underline"
            >
                continue reading ...
            </Link>
        </article>
    );
};
