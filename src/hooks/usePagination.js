import { useState } from 'react';

export const usePagination = ({ perPage = 4, Books }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageCount = Math.ceil(Books?.length / perPage);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handlePageClick = ({ selected: selected }) => {
        setCurrentPage(selectedPage);
        scrollToTop();
    };

    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;

    const paginatedData = Books?.slice(startIndex, endIndex);

    return { paginatedData, pageCount, handlePageClick, currentPage };
};
