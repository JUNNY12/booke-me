import { BlogLayout } from "@/components/layouts"
import { useRouter } from "next/router"
import { bookBlogPosts } from "@/components/templates/home/Post"
import { Typography } from "@/components/elements"
import { Header, Footer } from "@/components/modules"
import Image from "next/image"
import { formatDate } from "@/utils"
import { FaShare } from "react-icons/fa"
import { MdFavorite } from "react-icons/md"
import { Button } from "@/components/elements"
import { FaArrowLeft } from "react-icons/fa"
import Link from "next/link"


const Post = () => {
    const router = useRouter()
    const { slug } = router.query

    const post = bookBlogPosts.find((post) => post.title === slug)

    return (
        <section className="bg-white-100 relative">
            <Header />
            <section className="pt-40">
                <BlogLayout>
                    <div className="bg-white-50 p-8 tabletS:px-4 me-8 tabletS:me-0 tabletS: mb-6 rounded-md h-max relative">
                        <div className="absolute top-0 left-0 text-2xl">
                            <Link href={`/blog`}>
                                <Button className=" text-pink-600 rounded-sm m-1"><FaArrowLeft /></Button>
                            </Link>
                        </div>
                        <Typography variants={1} className="text-lg font-semibold mb-4">
                            {formatDate(post?.date)}
                        </Typography>
                        <div>
                            <Typography variants={2} className="text-3xl mb-6">
                                {post?.title}
                            </Typography>
                        </div>

                        <div className="h-[300px] w-full relative">
                            <Image src={post?.image} style={{ objectFit: "cover" }}
                                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                                alt={post?.title} fill={true} className="" />
                        </div>

                        <div className="mt-8">
                            <p>
                                {post?.description}
                            </p>
                        </div>

                        <div className=" flex items-center mt-4">
                            <div className="me-6 cursor-pointer" >
                                <div className="inline-flex items-center" title="Like" role="button">
                                    <MdFavorite className="text-2xl text-pink-600" />
                                    <span>3</span>
                                </div>
                            </div>

                            <div className=" cursor-pointer mb-2" title="Share" role="button">
                                <FaShare className="text-2xl text-pink-600" />
                            </div>

                        </div>

                    </div>

                </BlogLayout>
            </section>
            <Footer />
        </ section>

    )
}

export default Post