import React, { Component } from "react";
import { Container } from "@/components/modules/Container";
import Typography from "@/components/elements/Typography";
import { Button } from "@/components/elements/Button";
import { AiOutlineArrowRight } from "react-icons/ai"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import Image from "next/image";


export const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            speed={500}
            loop={true}
            autoplay={{
                delay: 8000,
            }}
            touchRatio={1.5}
            navigation={true}
            effect={"fade"}
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="h-[95vh] relative">
                    <Image src='/images/bg1.webp' sizes='100vw' priority={true} fill={true} alt='image' style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-80">
                        <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                            <Typography variants={1} className=' text-5xl px-6 mobileXL:text-3xl mb-6'>
                                Embark on a Journey of Intellectual Discovery
                            </Typography>
                            <p className="text-2xl px-6 mobileXL:text-lg italic max-w-[600px] mb-4">
                                Our bookstore offers a thoughtfully chosen
                                selection of books to enrich your mind and
                                ignite your imagination, allowing you to
                                experience the joy of reading like never before
                            </p>

                            <div className="px-6">
                                <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                                w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                                rounded-[20px] hover:bg-white-50`}>
                                    <span className='me-3'>See More</span>
                                    <span><AiOutlineArrowRight /></span>
                                </Button>
                            </div>
                        </Container>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[95vh] bg-bg-2 bg-cover relative">
                    <Image src='/images/bg-2.webp' priority={true} sizes='100vw' fill={true} alt='image' style={{ objectFit: 'cover' }} />

                    <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-60">
                        <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                            <Typography variants={1} className=' text-5xl px-6 mobileXL:text-3xl mb-6'>
                                Explore Our Diverse Collection of Fiction and Non-Fiction
                            </Typography>
                            <p className="text-2xl px-6 mobileXL:text-lg italic max-w-[600px] mb-4">
                                Discover your next adventure in our extensive collection of books,
                                ranging from contemporary bestsellers to timeless classics
                            </p>

                            <div className="px-6">
                                <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                                w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                                rounded-[20px] hover:bg-white-50`}>
                                    <span className='me-3'>See More</span>
                                    <span><AiOutlineArrowRight /></span>
                                </Button>
                            </div>
                        </Container>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="h-[95vh] bg-bg-3 bg-cover relative">
                    <Image src='/images/bg3.webp' priority={true} fill={true} sizes='100vw' alt='image' style={{ objectFit: 'cover' }} />
                    <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-60">
                        <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                            <Typography variants={1} className=' text-5xl px-6 mobileXL:text-3xl mb-6'>
                                Indulge Your Passion for Reading
                            </Typography>
                            <p className="text-2xl px-6 mobileXL:text-lg italic max-w-[600px] mb-4">
                                Immerse yourself in a world of literature with our carefully
                                curated selection of books,
                                designed to cater to every interest and taste
                            </p>

                            <div className="px-6">
                                <Button className={`bg-pink-600 text-white-50 transition ease-in-out duration-500 font-semibold
                                w-[180px] inline-flex items-center hover:text-white-950 justify-center p-2
                                rounded-[20px] hover:bg-white-50`}>
                                    <span className='me-3'>See More</span>
                                    <span><AiOutlineArrowRight /></span>
                                </Button>
                            </div>
                        </Container>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};