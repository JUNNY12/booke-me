import React from 'react';
import { AccountLayout } from '@/components/layouts';
import { Typography, Input, Button } from '@/components/elements';

const ChangePassword = () => {
    return (
        <AccountLayout>
            <Typography variants={3} className="text-2xl font-bold mb-8">
                Change Password
            </Typography>

            <form action="" className=" flex flex-col">
                <Input
                    placeholder="Password"
                    name="Password"
                    type="text"
                    className=" bg-white-100 rounded-sm p-3 mb-4 w-[250px] font-semibold "
                />
                <Input
                    placeholder="Confirm Password"
                    name="Confirm Password"
                    type="text"
                    className=" bg-white-100 rounded-sm p-3 mb-4 w-[250px] font-semibold "
                />

                <Button
                    className={` bg-pink-600 text-white-50 w-[125px] p-2 rounded-sm font-semibold`}
                >
                    Save Changes
                </Button>
            </form>
        </AccountLayout>
    );
};

export default ChangePassword;
