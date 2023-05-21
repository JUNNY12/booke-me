import { Books } from '../home/PopularBooks';
import { Item, ItemHeader, Detail } from '.';
import { useWidth } from '@/hooks';
import { useState } from 'react';

export const ItemLists = () => {
    const [showDetail, setShowDetail] = useState(false);
    const width = useWidth();
    return (
        <section className="relative">
            <div className=" absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {showDetail && <Detail setShowDetail={setShowDetail} />}
            </div>
            <div>{width > 768 && <ItemHeader />}</div>
            <div>
                {Books.map((book, index) => {
                    const { id } = book;
                    return (
                        <Item
                            key={id}
                            index={index}
                            setShowDetail={setShowDetail}
                        />
                    );
                })}
            </div>
        </section>
    );
};
