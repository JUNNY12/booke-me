import React from 'react'
import { Container } from '@/components/modules/Container'
import Typography from '@/components/elements/Typography'
import BookCard from './BookCard'
import { FlexContainer } from '@/components/modules/Container'

export const Books =[
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "description": "The Great Gatsby is a classic novel that explores themes of wealth, love, and the American Dream. It tells the story of Jay Gatsby, a mysterious millionaire who throws lavish parties in the hopes of winning back his lost love, Daisy Buchanan.",
      "publication_year": 1925,
      "genre": "Fiction",
      "language": "English",
      "image":'/images/The_Great_Gatsby.jpg',
       "price": 15
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "description": "To Kill a Mockingbird is a powerful novel that tackles issues of racism, injustice, and inequality. Set in the 1930s in a small town in Alabama, the book follows the story of Scout Finch, a young girl who learns about these issues through her father's legal defense of a black man falsely accused of a crime.",
      "publication_year": 1960,
      "genre": "Fiction",
      "language": "English",
      "image":"/images/Kill_a_Mockingbird.jpg",
        "price": 10
    },
    {
      "id": 3,
      "title": "The Hitchhiker's Guide to the Galaxy",
      "author": "Douglas Adams",
      "description": "The Hitchhiker's Guide to the Galaxy is a hilarious science fiction novel that follows the misadventures of Arthur Dent, an ordinary man who finds himself caught up in a series of bizarre events that take him on a journey through space and time.",
      "publication_year": 1979,
      "genre": "Science fiction",
      "language": "English",
      "image":"/images/The Hitchhiker's.webp",
        "price": 20
    },
    {
      "id": 4,
      "title": "The Power of Now",
      "author": "Eckhart Tolle",
      "description": "The Power of Now is a spiritual self-help book that encourages readers to live in the present moment and let go of past and future worries. It teaches techniques for mindfulness and meditation and provides insights on how to achieve inner peace and happiness.",
      "publication_year": 1997,
      "genre": "Self-help",
      "language": "English",
       "image":"/images/the power of now.jpg",
        "price": 25
    },
    {
      "id": 5,
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "description": "Sapiens is a thought-provoking book that explores the history of humanity from the emergence of Homo sapiens in Africa to the present day. It covers a wide range of topics, including the development of agriculture, the rise of empires, and the impact of technology on society.",
      "publication_year": 2011,
      "genre": "Non-fiction",
      "language": "English",
      "price":40,
      "image":'/images/sapiens.jpg'
    },
    {
      "id": 6,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "description": "The Catcher in the Rye is a novel that explores themes of alienation, adolescence, and the loss of innocence. It follows the story of Holden Caulfield, a teenage boy who has been expelled from his prep school and wanders around New York City for a few days before returning home.",
      "publication_year": 1951,
      "genre": "Fiction",
      "language": "English",
      "price": 30,
      "image":'/images/catcher.jpg'
    }
]
  

const PopularBooks = () => {
  return (
    <Container className={` bg-white-100`}>
        <Typography variants={`2`} className={` text-3xl font-semibold text-center text-white-950`}>
            Popular Books
        </Typography>

        <FlexContainer className='overflow-auto snap-mandatory scroll-smooth scrollbar-hide'>
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

export default PopularBooks