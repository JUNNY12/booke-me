import { RecentPosts } from "../templates/blog"
import { TopProducts } from "../templates/bookStore"


export const BlogLayout = ({ children }) => {
    return (
        <section className='mx-8 tabletS:mx-4 flex justify-center tabletS:flex-col'>
            {children}
            <div>
                <TopProducts />
                <RecentPosts />
            </div>
        </section>
    )
}