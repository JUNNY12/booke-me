import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "@/components/modules/Container";
import Typography from "@/components/elements/Typography";
import { Button } from "@/components/elements/Button";

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red", right: '40px' }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green", left: '40px' }}
            onClick={onClick}
        />
    );
}

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade:true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            appendDots: dots => (
                <div
                    style={{
                        color: 'white',
                        padding: "10px",
                        position: 'absolute',
                        bottom: '20px',
                    }}
                >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                </div>
            ),
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="h-[95vh] bg-bg-1 bg-cover relative">
                        <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-60">
                            <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                                <Typography variants={1} className=' text-5xl mb-6'>
                                    Embark on a Journey of Intellectual Discovery
                                </Typography>
                                <p className="text-2xl  italic max-w-[600px] mb-4">
                                    Our bookstore offers a thoughtfully chosen
                                    selection of books to enrich your mind and
                                    ignite your imagination, allowing you to
                                    experience the joy of reading like never before
                                </p>

                                <Button className=' rounded-[20px] bg-white-50 text-white-950 p-2 font-bold w-[200px] text'>See More</Button>
                            </Container>
                        </div>
                    </div>

                    <div className="h-[95vh] bg-bg-2 bg-cover relative">
                        <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-60">
                            <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                                <Typography variants={1} className=' text-5xl mb-6'>
                                    Explore Our Diverse Collection of Fiction and Non-Fiction
                                </Typography>
                                <p className="text-2xl  italic max-w-[600px] mb-4">
                                    Discover your next adventure in our extensive collection of books,
                                    ranging from contemporary bestsellers to timeless classics
                                </p>

                                <Button className=' rounded-[20px] bg-white-50 text-white-950 p-2 font-bold w-[200px] text'>See More</Button>
                            </Container>
                        </div>
                    </div>

                    <div className="h-[95vh] bg-bg-3 bg-cover relative">
                        <div className="absolute inset-0  h-[95vh] bg-black-950 bg-opacity-60">
                            <Container className='pt-20 text-white-50 flex h-[95vh] justify-center flex-col'>
                                <Typography variants={1} className=' text-5xl mb-6'>
                                    Indulge Your Passion for Reading
                                </Typography>
                                <p className="text-2xl  italic max-w-[600px] mb-4">
                                    Immerse yourself in a world of literature with our carefully
                                    curated selection of books,
                                    designed to cater to every interest and taste
                                </p>

                                <Button className=' rounded-[20px] bg-white-50 text-white-950 p-2 font-bold w-[200px] text'>See More</Button>
                            </Container>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}