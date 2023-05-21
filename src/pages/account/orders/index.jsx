import React from 'react';
import { AccountLayout } from '@/components/layouts';
import { Typography } from '@/components/elements';
import { ItemLists } from '@/components/templates/order';

const Orders = () => {
    return (
        <AccountLayout>
            <Typography
                variants={3}
                className="text-2xl font-bold mb-8 tabletS:text-center"
            >
                Order History
            </Typography>
            <ItemLists />
        </AccountLayout>
    );
};

export default Orders;
