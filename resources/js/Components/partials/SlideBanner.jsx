import { Link } from "@inertiajs/react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { PiPlaylistFill } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PiDotOutlineBold } from "react-icons/pi";

const SlideBanner = () => {
    const slide = [
        {
            url: "/img/girl-1.png",
            title: "Tranding This Month",
            song: "Understand - Keshi",
            description:
                "“UNDERSTAND” is an ode to keshi’s own relationship with his fiancé, Mai. The song sonically carries a solo classical guitar with a string arrangement to back up its performance.",
        },

        {
            url: "/img/k-1.png",
            title: "Tranding This Month",
            song: "Unravel - Tk from Ling Tosite",
            description:
                "“unravel” by Toru Kitajima is most well-known as the opening theme for the first season of the popular anime series Tokyo Ghoul and is the second song in his sophomore solo studio record Fantastic Magic.",
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(1);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slide.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const dotsSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    const inputStyles = {
        outline: "none",
        // ... tambahan gaya lainnya ...
    };
    return (
        <div className="h-[480px] lg:h-[480px] md:h-[480px] transition duration-150 relative group overflow-hidden sm:w-auto">
            <div
                style={{
                    backgroundImage: `linear-gradient(to bottom, transparent, rgb(27,26,26)), url(${slide[currentIndex].url})`,
                    backgroundSize: "cover", // Menambahkan pengaturan backgroundSize
                    backgroundRepeat: 'no-repeat', // Menggunakan 'no-repeat' agar gambar tidak diulang
                    backgroundPosition: '90% center', // Mengatur posisi latar belakang ke kiri secara horizontal
                }}
                className="w-full h-[580px] md:h-full bg-center bg-no-repeat duration-500 relative" // Mengubah kelas bg-cover menjadi bg-no-repeat
            >
                <div className="pl-10 slide-text absolute top-1/4 pb-3 md:pb-5 text-white w-full transition-opacity duration-300">
                    <h3 className="text-base lg:text-2xl md:text-xl font-semibold  transition-width duration-500 ease-in-out">
                        {slide[currentIndex].title}
                    </h3>
                    <h1 className="pl-5 md:pl-10 text-xl md:text-3xl lg:text-5xl py-3 md:py-5  transition-width duration-500 ease-in-out">
                        {slide[currentIndex].song}
                    </h1>
                    <p className="mt-2 pl-5 md:pl-11 overflow-hidden overflow-ellipsis max-h-14 md:max-h-16 md:text-sm lg:max-w-[800px] md:max-w-[500px]  transition-width duration-500 ease-in-out">
                        {slide[currentIndex].description}
                    </p>

                    <div className="flex mt-5 md:mt-10 pl-5 md:pl-10">
                        <button className="bg-blue-500 text-white text-xs md:text-sm px-2 md:px-4 py-1 md:py-2 rounded-full mr-3 hover:text-gray-400">
                            Play Now!
                        </button>
                        <button className="bg-red-500 text-white w-8 md:w-10 h-8 md:h-10 rounded-full flex items-center justify-center hover:text-red-200">
                            <BsFillHeartFill />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between pt-1 md:pt-2 px-5 md:pl-10">
                    <button className="text-white bg-opacity-30 bg-slate-400 text-xs md:text-sm px-1 md:px-2 rounded-full py-1 md:py-2">
                        Explore Premium
                    </button>
                    <div className="relative flex items-center px-1">
                        <input
                            type="search"
                            name="search"
                            style={inputStyles}
                            className="w-20 md:w-full border h-8 md:h-11 shadow p-1 md:p-4 rounded-2xl bg-Bgtrans bg-opacity-50 text-black placeholder-gray-400 text-xs md:text-sm focus:outline-none appearance-none"
                            placeholder="Search"
                        />
                        <button type="submit"></button>
                    </div>
                    <img
                        src="/img/kobo.jpg"
                        alt="User Avatar"
                        className="w-6 md:w-8 h-6 md:h-8 rounded-full ml-2"
                    />
                </div>
            </div>

            {/* bagian dots  */}

            {/* left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronDoubleLeft onClick={prevSlide} size={25} />
            </div>
            {/* right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronDoubleRight onClick={nextSlide} size={25} />
            </div>
        </div>
    );
};
export default SlideBanner;
