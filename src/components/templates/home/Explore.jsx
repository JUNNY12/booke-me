import { Button } from '@/components/elements/Button';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Container } from '@/components/modules/Container';
import Link from 'next/link';

const Explore = () => {
    return (
        <div className="h-[250px] bg-bg-4 bg-cover relative">
            <div className="absolute inset-0  h-[250px] bg-black-950 bg-opacity-60">
                <Container className="pt-20 text-white-50 flex h-[250px] justify-center flex-col">
                    <p className="text-4xl text-center tabletXS:text-2xl">
                        Browse through our complete Library
                    </p>

                    <div className="mt-4 text-center">
                        <Link href={`/store`}>
                            <Button
                                className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                                w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                                rounded-[20px] hover:bg-white-50`}
                            >
                                <span className="me-3">Browse Collection</span>
                                <span>
                                    <AiOutlineArrowRight />
                                </span>
                            </Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Explore;
