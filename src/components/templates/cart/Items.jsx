import { ItemList } from "."
import { Books } from "../home/PopularBooks"

export const Items = () => {
    return (
        <div>
            {
                Books.map((book) => {
                    const { id, image, title, author, price } = book
                    return(
                        <ItemList
                        key={id}
                        image={image}
                        title={title}
                        author={author}
                        price={price}
                        />
                    )
                })
            }
            
        </div>
    )
}