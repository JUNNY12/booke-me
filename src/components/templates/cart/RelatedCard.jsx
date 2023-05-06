import { Card } from "@/components/modules"
import { Typography, Button } from "@/components/elements"
import Image from "next/image"
import { formatCurrency } from "@/utils"
import { FiSend } from 'react-icons/fi'
import { BsCartPlus } from 'react-icons/bs'



export const RelatedCard = ({image, title, author, price}) => {
    return(
        <Card className={` w-[250px] flex-shrink-0 snap-start me-6 my-6`}>
            <div className='h-[250px] relative rounded-sm'>
                <Image src={image} alt={title} fill={true} 
                sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                style={{objectFit:'cover'}} className=' rounded-sm' priority />
            </div>

            <div className=' text-center text-white-950 mt-4'>
                <Typography variants={`3`} className={`text-lg`}>
                    {title}
                </Typography>

                <Typography variants={`4`} className={`text-sm mt-2 italic`} >
                    {author}
                </Typography>

                <div className='mt-2 text-xl'>
                    {formatCurrency(price)}
                </div>
            </div>
            <div className=' flex absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <Button className={`hover:bg-pink-600 transition ease-in-out duration-500 
                w-[100px] inline-flex items-center hover:text-white-50 justify-center p-1
                 rounded-tl-[20px] rounded-bl-[20px] border border-white-800`}>
                    <span className='me-2'><FiSend /></span>
                    <span>Details</span>
                </Button>
                <Button className={`hover:bg-pink-600 hover:text-white-50 transition ease-in-out duration-500
                 w-[100px] inline-flex items-center justify-center p-1
                 rounded-tr-[20px] rounded-br-[20px] border border-white-800`}>
                    <span className='me-2'><BsCartPlus /></span>
                    <span>Buy</span>
                </Button>
            </div>


        </Card>
    )
}