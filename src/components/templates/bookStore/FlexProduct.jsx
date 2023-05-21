import React from 'react';
import { FlexContainer } from '@/components/modules';
import { Books } from '../home/PopularBooks';
import { FlexCard } from '.';

export const FlexProduct = () => {
    return (
        <FlexContainer
            className={` flex-wrap justify-center tabletS:justify-center mt-6`}
        >
            {Books.map((book) => {
                const { id, title, description, price, image } = book;
                return (
                    <FlexCard
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        description={description}
                        image={image}
                    />
                );
            })}
        </FlexContainer>
    );
};
