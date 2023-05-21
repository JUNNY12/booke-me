import React from 'react';
import SimpleSlider from './Slider';
import Header from '@/components/modules/Header';
import { Slider } from './Slider';

const Hero = () => {
    return (
        <div className="relative">
            <div className=" fixed z-40 w-full">
                <Header />
            </div>
            <Slider />
        </div>
    );
};

export default Hero;
