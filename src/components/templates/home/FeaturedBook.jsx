import Typography from '@/components/elements/Typography'
import { Container, FlexContainer } from '@/components/modules/Container'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/elements/Button'

const FeaturedBook = () => {
    return (
        <Container>
            <Typography variants={`2`} className={` text-3xl font-semibold text-center text-white-950`}>
                Featured Book
            </Typography>

            <FlexContainer className={` mt-6 gap-x-6 items-center  justify-center flex-wrap`}>
                <div className=' w-[350px] mb-8 order-2'>
                    <Typography variants={`3`} className={` text-2xl font-semibold text-white-950`}>
                        Simplified JavaScript for Very Important Programmers
                    </Typography>
                    <Typography variants={`4`} className={` text-base italic mt-2 mb-3 text-white-950`}>
                        Ebenezer Don
                    </Typography>

                    <p className='text-base'>
                        Finally, a JavaScript book that doesn't make your head spin!
                        "Simplified JavaScript
                        for Very Important Programmers"
                        is a practical guide for everyone
                        who wants to master the essential parts of
                        JavaScript without wasting time on convoluted explanations
                        or struggling to make sense of ambiguous words. The book is
                        packed with real-world examples
                        and clear, concise language that breaks technical
                        concepts into easy-to-understand chunks.
                    </p>

                    <div className='mt-4'>
                        <Button className={`bg-pink-600 transition ease-in-out duration-500 font-semibold p-2
                            w-[150px] inline-flex items-center hover:bg-white-50 hover:text-white-950 hover:border hover:border-white-800 text-white-50 justify-center
                            rounded-[20px]`}>
                            Get this book
                        </Button>
                    </div>
                </div>

                <div className=' w-[300px] h-[400px] relative rounded-sm mb-8 order-1'>
                    <Image src={`/images/simplified js.jpg`} fill={true} priority={true}
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        style={{ objectFit: 'cover' }} alt='Ebenezer don' className='rounded-sm' />
                </div>

                <div className=' w-[300px] h-[400px] relative object-cover rounded-sm mb-8 order-last'>
                    <Image src='/images/simplified-javascript.jpg' fill={true} priority={true}
                        sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                        style={{ objectFit: 'cover' }} alt='Ebenezer don' className='rounded-sm' />
                </div>
            </FlexContainer>
        </Container>
    )
}

export default FeaturedBook