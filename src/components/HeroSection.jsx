import React from 'react';
import heroBg from '../assets/home/herobg.png';
import logo from '../assets/home/plogo.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="relative">
            {/* Background Image */}
            <img
                src={heroBg}
                alt="Coworking space"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
            />

            <section className="relative h-screen overflow-hidden">
                {/* Overlay */}
                <div className="absolute inset-0 z-10 bg-black/30"></div>

                {/* Content Container */}
                <div className="relative z-20 max-w-[1270px] mx-auto h-full">
                    {/* Top Bar */}
                    <div className="absolute top-4 left-6 flex items-center gap-2">
                        <img src={logo} className="w-12 h-12 cursor-pointer" loading="lazy" alt="logo" />
                    </div>

                    {/* Mobile Title */}
                    <div className="block md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 text-white font-light text-[18px]">
                        Pixalive tech co-works
                    </div>

                    {/* Desktop Title */}
                    <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 text-white font-light text-[18px]">
                        Pixalive tech co-works
                    </div>

                    <Link
                        to="/contact"
                        className="absolute top-6 right-6 text-[18px] text-white group"
                    >
                        Let’s talk{' '}
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                            ↗
                        </span>
                    </Link>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center justify-center text-white px-4 h-full">
                        <h1 className="text-4xl text-center font-thin leading-tight font-LufgaLight">
                            Craft your<br />success here
                        </h1>
                        <button className="px-6 py-2 mt-6 bg-white text-black rounded hover:bg-gray-200 transition text-base font-normal">
                            Book a Space
                        </button>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden md:flex flex-col items-center justify-center h-full text-white px-4">
                        <div className="flex flex-row items-center gap-6">
                            <h1 className="text-6xl lg:text-[123px] font-thin leading-none font-LufgaLight">
                                Craft your
                            </h1>
                            <button className="px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition text-base font-normal">
                                Book a Space
                            </button>
                        </div>
                        <h1 className="text-6xl lg:text-[123px] font-thin mt-4 leading-none">
                            success here
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
    