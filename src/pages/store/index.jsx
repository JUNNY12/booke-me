import React from 'react';
import { DefaultLayout } from '@/components/layouts';
import { Search } from '@/components/templates/bookStore';
import { BookLayout } from '@/components/templates/bookStore';

const Store = () => {
    return (
        <div className="bg-white-100">
            <DefaultLayout>
                <Search />
                <BookLayout />
            </DefaultLayout>
        </div>
    );
};

export default Store;
