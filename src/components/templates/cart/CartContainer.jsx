import { Items, Summary } from "."
import { Typography } from "@/components/elements"
import { FaArrowRight } from "react-icons/fa"
import Link from "next/link"

export const CartContainer = () => {
    return (
        <section className="bg-white-50 shadow-md shadow-black-700 mx-8 p-8 mobileXL:px-4 mobileXL:mx-4 rounded-md">
            <div className="flex justify-between mb-8 text-xl mobileXL:text-lg mobileM:text-[12px] mobileM:font-bold ">
                <Typography variants={3} className={` hover:text-pink-600 transition duration-500 cursor-pointer ease-in-out`}>
                    <span>Your Cart </span>
                    <span>(3) </span>
                    <span> Items</span>
                </Typography>

                <Link href={`/store`}>
                    <Typography variants={3} className={`cursor-pointer hover:text-pink-600 transition duration-500 ease-in-out`} role='button' title='Shop More'>
                        Continue Shopping <FaArrowRight className="inline-block" />
                    </Typography>
                </Link>
            </div>

            <div className=" flex tabletL:flex-col">
                <div className="w-3/5 tabletL:w-full" >
                    <Items />
                </div>

                <div className="w-2/5 ms-8 tabletL:w-full tabletL:ms-0 tabletL:mt-8 ">
                    <Summary />
                </div>

            </div>
        </section>
    )
}