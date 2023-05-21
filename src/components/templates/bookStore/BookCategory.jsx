import React from 'react';
import { Typography } from '@/components/elements';

const BookCategory = () => {
    return (
        <div>
            <div className=" bg-white-50  h-[235px] rounded-md w-[210px] tabletS:w-full tabletS:mb-8 p-4 mt-2">
                <Typography
                    variants={3}
                    className={` text-xl text-white-950 mb-3`}
                >
                    Book Category
                </Typography>

                <div className=" text-xl text-white-950">
                    <ul>
                        <li className="mb-1 text-base">Drama</li>
                        <li className="mb-1 text-base">Fiction</li>
                        <li className="mb-1 text-base">History</li>
                        <li className="mb-1 text-base">Horror</li>
                        <li className="mb-1 text-base">Kids</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default BookCategory;
