import { Typography, Button } from "@/components/elements"
import { formatCurrency } from "@/utils"
import Image from "next/image"

export const Summary = () => {
    return (
        <div className=" bg-white-100 p-8 rounded-sm">
            <Typography variants={2} className={`text-2xl mb-4`}>
                Order Summary
            </Typography>
            <div className="flex mb-4 text-xl mobileL:text-lg">
                <Typography variants={3} className={`w-1/2`}>Sub-total</Typography>
                <div className="w-1/2 font-bold">{formatCurrency(200)}</div>
            </div>

            <div className="mb-4 text-xl mobileL:text-lg">
                <Typography variants={3} className={`mb-4`}>
                    Delivery
                </Typography>
                <select className="p-2 outline-pink-600 w-full mobileL:text-sm">
                    <option>Select Delivery Method</option>
                    <option>Delivery {formatCurrency(1.2)}</option>
                    <option>Pickup {formatCurrency(0)}</option>
                </select>
            </div>

            <div className="flex mb-4 text-xl mobileL:text-lg">
                <Typography variants={3} className={`w-1/2`}>Total</Typography>
                <div className="w-1/2 font-bold">{formatCurrency(210)}</div>
            </div>

            <div>
                <Button className=' w-full bg-pink-600 p-2 rounded-sm
                 hover:bg-white-50 hover:border-pink-600 hover:border transition duration-500 ease-in-out  hover:text-pink-600 text-white-50 font-bold'>Checkout</Button>
            </div>
            <div className="mt-4 font-bold">
                <p>WE ACCEPT:</p>

                <div className="mt-2 flex items-center">
                    <div className='w-[100px] relative h-[50px] me-4'>
                        <Image src={`/images/visa.svg`}
                            fill={true} priority={true} style={{ objectFit: 'cover' }}
                            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                            alt='card' className="" />
                    </div>

                    <div className='w-[100px] relative h-[50px] me-4'>
                        <Image src={`/images/verve.svg`}
                            fill={true} priority={true} style={{ objectFit: 'cover' }}
                            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                            alt='card' className="" />
                    </div>

                    <div className='w-[100px] relative h-[50px] me-4'>
                        <Image src={`/images/mastercard.svg`}
                            fill={true} priority={true} style={{ objectFit: 'cover' }}
                            sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                            alt='card' className="" />
                    </div>
                </div>
            </div>

        </div>
    )
}