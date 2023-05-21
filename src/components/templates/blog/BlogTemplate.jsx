import React from 'react';
import { TopProducts } from '../bookStore';
import { BlogContainer, RecentPosts } from '.';
import { BlogLayout, DefaultLayout } from '@/components/layouts';

export const BlogTemplate = () => {
    return (
        <DefaultLayout>
            <BlogLayout>
                <BlogContainer />
            </BlogLayout>
        </DefaultLayout>
    );
};
