import React from 'react'
import { Container } from '@/components/modules/Container'
import Typography from '@/components/elements/Typography'
import BookCard from './BookCard'
import { FlexContainer } from '@/components/modules/Container'
import { Books } from './PopularBooks'

const NewBooks = () => {
  return (
    <Container className={` bg-white-100`}>
        <Typography variants={`2`} className={` text-3xl font-semibold text-center text-white-950`}>
            New Books
        </Typography>

        <FlexContainer className='overflow-auto snap-mandatory scroll-smooth scrollbar-hide gap-x-8'>
            {
                Books.slice(0,6).map((book) => {
                    const{ id, title, author, description, publication_year,genre,language, image , price} = book
                    return(
                        <BookCard 
                        key={id}
                        id={id}
                        title={title}
                        author={author}
                        description={description}
                        publication_year={publication_year}
                        genre={genre}
                        language={language}
                        image={image}
                        price={price}
                        />
                    )
                })
            }
        </FlexContainer>
    </Container>
  )
}

export default NewBooks