import { useRouter } from 'next/router';
import { Books } from '../../components/templates/home/PopularBooks';
import { DefaultLayout } from '@/components/layouts';
import Image from 'next/image';
import { Typography, Button, Input } from '@/components/elements';
import { Rating, Rate } from '@/components/modules';
import { formatCurrency } from '@/utils';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const review = [
    {
        id: 1,
        name: 'John Doe',
        date: 'August 12, 2021',
        rating: 5,
        comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
    {
        id: 2,
        name: 'John Doe',
        date: 'August 12, 2021',
        rating: 5,
        comment:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    },
];

const Book = () => {
    const router = useRouter();
    const { slug } = router.query;

    //toggle between review and description
    const [toggle, setToggle] = useState(true);

    const showReview = () => {
        setToggle(false);
    };

    const showDescription = () => {
        setToggle(true);
    };

    const book = Books.find((book) => book.title === slug);

    const handleRateClick = (index) => {
        console.log(index);
    };

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <div className="bg-white-100">
            <DefaultLayout>
                <section className="mx-8 tabletS:mx-4 bg-white-50">
                    {/* Book Image and price */}
                    <div className=" p-12 tabletS:tabletS:p-4 rounded-md flex justify-center tabletS:flex-col items-center relative">
                        <div className="w-[400px] h-[500px] relative tabletS:w-[300px] tabletS:h-[300px] mobileXL:w-[250px] mobileS:w-full mobileXL:h-[250px] object-cover me-8 tabletS:me-0">
                            <Image
                                src={book.image}
                                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                priority={true}
                                style={{ objectFit: 'cover' }}
                                alt={book.title}
                                fill={true}
                                className=""
                            />
                        </div>

                        <div className=" tabletS:flex tabletS:items-center tabletS:justify-center tabletS:flex-col">
                            <Typography
                                variants="3"
                                className="text-3xl tabletS:text-2xl mobileXL:text-xl mt-4 text-white-950 mb-4"
                            >
                                {book.title}
                            </Typography>

                            <div>
                                <Rating rating={5} />
                            </div>

                            <div className="border border-gray-200 rounded-md w-[200px] mt-4 font-semibold">
                                <div className="bg-white-100 p-2">
                                    {formatCurrency(book.price)}
                                </div>
                                <div className="inline-flex items-center justify-center text-2xl h-[50px] w-full">
                                    <Button
                                        title="Decrease"
                                        className={`px-1 hover:text-pink-600`}
                                        arial-label="increase"
                                    >
                                        <FaMinus />
                                    </Button>

                                    <span className="mx-2 ">1</span>
                                    <Button
                                        title="Increase"
                                        className={`px-1 hover:text-pink-600`}
                                        arial-label="increase"
                                    >
                                        <FaPlus />
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="border border-dashed rounded-md border-white-300 w-full absolute bottom-0"></div>
                    </div>

                    {/* Book Details and author */}
                    <div className="flex tabletS:flex-col  justify-center p-8 tabletS:px-4 ">
                        <div className="w-2/5 tabletS:w-full me-8 tabletS:me-0">
                            <Typography
                                variants="3"
                                className="text-3xl font-semibold mobileM:text-2xl mt-4  text-white-950 mb-8"
                            >
                                Book Details
                            </Typography>

                            <div className="">
                                <div className="">
                                    <div className="flex items-center mb-3 bg-white-50 p-2 border-t border-b border-dashed border-white-300">
                                        <div className=" w-[80px] text-white-950">
                                            Pages:
                                        </div>
                                        <div>500</div>
                                    </div>
                                    <div className="flex items-center mb-3 bg-white-100 p-2 border-t border-b border-dashed border-white-300">
                                        <div className=" w-[80px] text-white-950">
                                            Language:
                                        </div>
                                        <div>{book.language}</div>
                                    </div>
                                    <div className="flex items-center mb-3 bg-white-50 p-2 border-t border-b border-dashed border-white-300">
                                        <div className=" w-[80px] text-white-950">
                                            {' '}
                                            Released:
                                        </div>
                                        <div>{book.publication_year}</div>
                                    </div>
                                    <div className="flex items-center mb-3 bg-white-100 p-2 border-t border-b border-dashed border-white-300">
                                        <div className=" w-[80px] text-white-950">
                                            Publisher:
                                        </div>
                                        <div>Lorem Ipsum</div>
                                    </div>

                                    <div className="flex items-center mb-3 bg-white-50 p-2 border-t border-b border-dashed border-white-300">
                                        <div className=" w-[80px] text-white-950">
                                            Genre:
                                        </div>
                                        <div>{book.genre}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/5 tabletS:w-full tabletS:me-0">
                            <Typography
                                variants="3"
                                className="text-3xl font-semibold mobileM:text-2xl mt-4 text-white-950 mb-8"
                            >
                                About the Author
                            </Typography>

                            <div>
                                <Typography
                                    variants="4"
                                    className="text-xl mobileM:text-lg italic mt-2 text-white-950 mb-4"
                                >
                                    {book.author}
                                </Typography>

                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Veniam explicabo eos in,
                                    hic doloremque a ipsa ab deleniti reiciendis
                                    dolore expedita sapiente repellendus,
                                    eveniet debitis natus harum quam velit illo
                                    error nisi ducimus accusamus enim. Molestiae
                                    fuga in iure vitae ex dolore, nulla alias
                                    quos fugiat quas saepe est placeat.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Book Description and Reviews */}
                    <div className="p-8 tabletS:px-4 ">
                        <div className="border-t border-b p-2 border-dashed rounded-md border-white-300 flex ">
                            <Typography
                                variants="3"
                                onClick={showDescription}
                                className={`text-3xl tabletXS:text-xl mobileXL:text-lg  cursor-pointer font-semibold hover:underline me-12 mt-4 mb-4 ${
                                    toggle ? 'text-pink-600' : ' text-white-950'
                                }`}
                            >
                                Description
                            </Typography>
                            <Typography
                                onClick={showReview}
                                variants="3"
                                className={`text-3xl tabletXS:text-xl mobileXL:text-lg font-semibold cursor-pointer hover:text-pink-600 hover:underline mt-4  mb-4 ${
                                    !toggle
                                        ? 'text-pink-600'
                                        : ' text-white-950'
                                }`}
                            >
                                Reviews(2)
                            </Typography>
                        </div>

                        <div>
                            {toggle ? (
                                <div className=" mt-6 text-base leading-loose tracking-[-0.05px] w-full">
                                    <p>{book.description}</p>
                                </div>
                            ) : (
                                <div>
                                    <div>
                                        {review.map((item) => {
                                            return (
                                                <article
                                                    key={item.id}
                                                    className="border border-gray-200 rounded-md p-4 mt-4"
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <Typography
                                                            variants="4"
                                                            className="text-2xl mobileM:text-xl"
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                        <Typography
                                                            variants="4"
                                                            className="text-[14px] italic"
                                                        >
                                                            {item.date}
                                                        </Typography>
                                                    </div>

                                                    <div className="mt-2">
                                                        <Rating
                                                            rating={item.rating}
                                                        />
                                                    </div>

                                                    <div className="mt-4">
                                                        <Typography
                                                            variants="4"
                                                            className=" tracking-[2px] text-base"
                                                        >
                                                            {item.comment}
                                                        </Typography>
                                                    </div>
                                                </article>
                                            );
                                        })}
                                    </div>

                                    <div>
                                        <Typography
                                            variants="3"
                                            className="text-3xl font-semibold mobileM:text-2xl mt-8 text-white-950 mb-4"
                                        >
                                            Add a review
                                        </Typography>
                                    </div>

                                    <div>
                                        <form className="flex flex-col">
                                            <div>
                                                <Rate
                                                    onRateClick={
                                                        handleRateClick
                                                    }
                                                />
                                            </div>

                                            <div>
                                                <textarea
                                                    className=" bg-white-100 text-white-950 p-2 mt-4
                                                      placeholder:text-white-950 rounded-sm w-full h-[100px] outline-none placeholder:italic"
                                                    placeholder="Your Review"
                                                    name="message"
                                                    maxLength={150}
                                                    minLength={15}
                                                />
                                            </div>

                                            <div>
                                                <Input
                                                    placeholder="Name"
                                                    name="name"
                                                    type="text"
                                                    className={`bg-white-100 text-white-950 p-2 placeholder:text-white-950
                                                 mt-4 w-full outline-none rounded-sm placeholder:italic`}
                                                />
                                            </div>
                                            <div>
                                                <Input
                                                    placeholder="Email"
                                                    name="name"
                                                    type="email"
                                                    className={`bg-white-100 text-white-950 p-2 placeholder:text-white-950
                                                       mt-4 w-full outline-none rounded-sm placeholder:italic`}
                                                />
                                            </div>
                                            <Button
                                                title="Submit"
                                                className="mt-4 p-2 rounded-sm w-full text-white-50 font-bold 
                                                  transition duration-500 ease-in-out bg-pink-600  hover:bg-white-50 hover:text-pink-600
                                                  hover:border-pink-600 hover:border
                                                  "
                                            >
                                                Submit
                                            </Button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </DefaultLayout>
        </div>
    );
};

export default Book;
