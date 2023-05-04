import { Button, Typography } from "@/components/elements"
import { formatCurrency } from "@/utils"
import Image from "next/image"
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'

export const ItemList = ({ id, image, title, author, price }) => {
    return (
        <div className="mb-6 flex items-center mobileXL:flex-col">
            <div className="flex w-1/2 tabletL:w-4/5 mobileXL:w-full">
                <div className="w-[100px] h-[150px] mobileXL:h-[100px] me-8 mobileXL:me-2 object-cover">
                    <Image src={image} height={100} alt={title} width={100}  className="object-cover w-full h-full" />
                </div>

                <div>
                    <Typography variant={3} className="text-white-950 font-bold">
                        {title}
                    </Typography>

                    <div>
                        <p>
                            <span>By</span>
                            <span className="text-white-950 font-semibold italic"> {author}</span>
                        </p>
                    </div>

                    <div>
                        {formatCurrency(price)}
                    </div>

                    <div className="mt-3 cursor-pointer" role="button" arial-label='delete' title="delete" >
                        <FaTrash className="text-pink-600 text-xl" />
                    </div>
                </div>
            </div>

            <div className="w-1/2 tabletL:w-1/5 mobileXL:w-full mobileXL:mt-4">
                <div className="inline-flex items-center border border-white-950 rounded-sm p-1 mb-4">
                    <Button title='Decrease' arial-label='increase'>
                        <FaMinus />
                    </Button>

                    <span className="mx-2">1</span>
                    <Button title='Increase' arial-label ='increase'>
                        <FaPlus />
                    </Button>
                </div>

                <div className="font-semibold text-2xl">
                    {formatCurrency(50)}
                </div>

                <div>

                </div>
            </div>
        </div>
    )

}