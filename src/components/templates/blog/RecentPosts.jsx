import { Typography } from "@/components/elements"
import { bookBlogPosts } from "../home/Post"
import Link from "next/link"

export const RecentPosts = () => {
    return (
        <div className="bg-white-50 w-[300px] mt-6 p-4 rounded-md tabletS:w-full">
            <Typography variants={3} className='text-2xl mb-4 font-semibold text-white-950'>
                Recent Posts
            </Typography>

            <div>
                {
                    bookBlogPosts.map((post) => {
                        const {id, title} = post
                        let slug;
                        if(title) {
                            slug = title
                        }
                        return(
                            <div className="mb-4 text-lg" key={id}>
                                <Link href={`/blog/${slug}`} className="hover:underline hover:text-pink-600 transition duration-500 ease-in-out"  key={id}>
                                    {title.substring(0, 40) + "..."}
                                </Link>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}