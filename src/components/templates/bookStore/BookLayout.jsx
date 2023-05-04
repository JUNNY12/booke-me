import React from 'react'
import { FlexContainer } from '@/components/modules'
import { FlexProduct } from './FlexProduct'
import FilterByPrice from './FilterByPrice'
import { TopProducts, BookCategory } from '.'
import ReactPaginate from 'react-paginate'
import { usePagination } from '@/hooks'
import { Books } from '../home/PopularBooks'

const BookLayout = () => {
    // const {pageCount, paginatedData, handlePageClick, currentPage } = usePagination(4, Books)

    return (
        <div className=''>
            <FlexContainer className={`mt-16 justify-center px-6 bg-white-100 tabletS:flex-col`}>
                <div className=''>
                    <FlexProduct />
                </div>
                <div className=''>
                    <FilterByPrice />
                    <div>
                        <TopProducts />
                    </div>

                    <div className=''>
                        <BookCategory />
                    </div>
                </div>
            </FlexContainer>

            {/* <ReactPaginate
                pageCount={pageCount}
                onPageChange={handlePageClick}
                containerClassName='flex items-center justify-center rounded-sm mt-16 bg-pastel-green-600 text-mercury-white-50 h-[45px]'
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                breakLabel='...'
                nextLabel="next"
                nextClassName='border-2 border-mercury-white-50 rounded-sm p-1 ms-2 '
                previousClassName='border-2 border-mercury-white-50 rounded-sm p-1 ms-2'
                previousLabel="prev "
                pageClassName='m-3'
                activeLinkClassName='border-2 border-pastel-green-600 rounded-full h-[30px] w-[30px] inline-flex items-center justify-center  p-2 text-pastel-green-600 bg-mercury-white-50'
            /> */}

        </div>
    )
}

export default BookLayout