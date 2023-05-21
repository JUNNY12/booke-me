import { FlexContainer } from '@/components/modules';
import { Books } from '../home/PopularBooks';
import { RelatedCard } from '.';
import { Typography } from '@/components/elements';

export const RelatedBooks = () => {
    return (
        <section className="">
            <Typography variants={2} className={`text-2xl font-bold`}>
                Related Books
            </Typography>

            <FlexContainer className="overflow-auto snap-mandatory scroll-smooth scrollbar-hide">
                {Books.slice(0, 6).map((book) => {
                    const { id, title, author, image, price } = book;
                    return (
                        <RelatedCard
                            key={id}
                            id={id}
                            title={title}
                            author={author}
                            image={image}
                            price={price}
                        />
                    );
                })}
            </FlexContainer>
        </section>
    );
};
