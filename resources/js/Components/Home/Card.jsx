import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { BsChevronDoubleLeft } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import { PiDotOutlineBold } from "react-icons/pi";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";
import { AiOutlinePause } from "react-icons/ai";
const Card = () => {
    const images = [
        {
            image: "/img/kobo.jpg",
            name: "Contoh 1",
        },
        {
            image: "/img/card-1.jfif",
            name: "Contoh 2",
        },
        {
            image: "/img/card-2.jfif",
            name: "Contoh 3",
        },
        {
            image: "/img/card-3.jfif",
            name: "Contoh 4",
        },
        {
            image: "/img/card-4.jfif",
            name: "Contoh 5",
        },
        {
            image: "/img/card-5.jfif",
            name: "Contoh 6",
        },
        {
            image: "/img/card-6.jfif",
            name: "Contoh 7",
        },
        {
            image: "/img/card-7.jfif",
            name: "Contoh 8",
        },
        {
            image: "/img/card-8.jfif",
            name: "Contoh 9",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCardCount, setShowCardCount] = useState(6);
    const totalCards = images.length;

    const nextSlide = () => {
        const isLastSlide = currentIndex === totalCards - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? totalCards - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const showMoreCards = () => {
        setShowCardCount(showCardCount + 6);
    };

    const startIndex = currentIndex % totalCards;
    const endIndex = (currentIndex + showCardCount) % totalCards;

    const visibleCards =
        startIndex <= endIndex
            ? images.slice(startIndex, endIndex)
            : [...images.slice(startIndex), ...images.slice(0, endIndex)];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                // Jika lebar layar berada di antara 768px dan 1024px, tampilkan hanya 4 kartu
                setShowCardCount(3);
            } else if (window.innerWidth >= 1536) {
                // Jika lebar layar cukup besar, maka tampilkan lebih banyak kartu
                setShowCardCount(6);
            } else if (window.innerWidth >= 1280) {
                // Jika lebar layar cukup besar, maka tampilkan lebih banyak kartu
                setShowCardCount(5);
            } else if (window.innerWidth >= 1024) {
                // Jika lebar layar cukup besar, maka tampilkan lebih banyak kartu
                setShowCardCount(4);
            } else {
                // Jika lebar layar cukup kecil, maka tampilkan lebih sedikit kartu
                setShowCardCount(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="w-full h-full flex lg:gap-10 md:gap-5">
            <div className="lg:w-[70%] md:w-[60%]  transition-width duration-500 ease-in-out">
                <div className="lg:w-full lg:h-[204px] md:h-[184px] bg-card rounded-3xl transition-width duration-500 ease-in-out">
                    <div className="px-5">
                        <h3 className="text-lg font-semibold mb-5 pt-3 text-white">
                            Top Artist
                        </h3>
                        <div className="flex justify-center pb-6">
                            <div className="flex justify-center items-center group">
                                <div className="text-2xl items-center justify-center flex p-2 text-white cursor-pointer  bg-black lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <BsChevronDoubleLeft
                                        onClick={prevSlide}
                                        size={25}
                                    />
                                </div>
                            </div>
                            {/* ini adalah card img */}
                            <div className="mx-4 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 cursor-pointer overflow-x-auto">
                                {/* Isi dengan card-card Anda */}
                                {visibleCards.map((image, index) => (
                                    <div key={index} className="text-center">
                                        <img
                                            className="bg-red-500 text-white lg:w-[100px] lg:h-[100px] md:w-[80px] md:h-[80px] sm:w-[40px] sm:h-[40px] rounded-2xl flex items-center justify-center hover:text-red-200"
                                            src={image.image}
                                            alt={`Card ${index + 1}`}
                                        />
                                        <div className="mt-2 text-white text-sm">
                                            {image.name}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center items-center group">
                                <div className="text-2xl items-center justify-center flex p-2 text-white cursor-pointer bg-black lg:w-[50px] lg:h-[50px] md:w-[30px] md:h-[30px] rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <BsChevronDoubleRight
                                        onClick={nextSlide}
                                        size={25}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-full lg:h-[330px] md:h-[214px] rounded-3xl mt-5 flex gap-5">
                    <div className="lg:w-[70%] md:w-full h-full bg-card rounded-3xl  transition-width duration-500 ease-in-out"></div>
                    <div className="lg:w-[30%] lg:block md:hidden sm:hidden h-full bg-card rounded-3xl  transition-width duration-500 ease-in-out">
                        <div className="p-5">
                            <div className=" mb-5 text-white flex justify-between">
                                <h1 className="text-lg font-semibold text-white">
                                    Genres
                                </h1>

                                <h1 className="text-sm text-gray-500 flex justify-center items-center">
                                    <a href="/">See All</a>
                                </h1>
                            </div>

                            <div className="">
                                <div className="flex w-full h-[75px] gap-2">
                                    <figure className="h-full w-[60%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://wallpapercave.com/wp/wp9628059.jpg"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black rounded-lg bg-opacity-30 text-white p-2 text-center flex justify-center items-center">
                                                Hip Hop
                                            </figcaption>
                                        </a>
                                    </figure>
                                    <figure className="h-full w-[40%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://e0.pxfuel.com/wallpapers/287/492/desktop-wallpaper-ghosts-of-the-floating-world-lofi-girl-lo-fi-cafe.jpg"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white p-2 text-center flex justify-center items-center">
                                                Pop
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                                <div className="flex w-full h-[75px] gap-2 mt-2">
                                    <figure className="h-full w-[50%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://wallpapercave.com/wp/wp9339711.jpg"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black rounded-lg bg-opacity-30 text-white p-2 text-center flex justify-center items-center">
                                                Jazz
                                            </figcaption>
                                        </a>
                                    </figure>
                                    <figure className="h-full w-[50%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://i.ytimg.com/vi/V77lrm6cs1g/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgRChFMA8=&rs=AOn4CLDXWnps1XpRI7P9XdpOQ_34JAHqIg"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white p-2 text-center flex justify-center items-center">
                                                Blues
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                                <div className="flex w-full h-[75px] gap-2 mt-2">
                                    <figure className="h-full w-[30%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://i.ytimg.com/vi/liHgt4CbodY/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLD8_zFnLc9LsHT7CMcG2GnSSmn1_Q"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black rounded-lg bg-opacity-30 text-white p-2 text-center flex justify-center items-center">
                                                R&B
                                            </figcaption>
                                        </a>
                                    </figure>
                                    <figure className="h-full w-[70%] bg-opacity-10 rounded-lg relative">
                                        <a href="/">
                                            <img
                                                className="h-full w-full rounded-lg"
                                                src="https://i.ytimg.com/vi/iqcLm0fyvR0/maxresdefault.jpg"
                                                alt=""
                                            />
                                            <figcaption className=" h-full w-[100%] absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 text-white p-2 text-center flex justify-center items-center ">
                                                Alternative
                                            </figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[30%] md:w-[40%] md:h-[424px] lg:h-[554px] bg-card rounded-3xl p-5  transition-width duration-500 ease-in-out">
                <div className="lg:w-full lg:h-[250px] md:w-full md:h-[150px] rounded-3xl  flex justify-center items-center mb-5">
                    <img
                        className="lg:w-full md:w-[90%] lg:h-full md:h-full rounded-3xl border border-blue-200 "
                        src="https://i.ytimg.com/vi/TlaOjz9JAbI/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGHIgQChIMA8=&rs=AOn4CLAFA6C6nQtzZmXSJFIrhB0ICJfyfQ"
                        alt=""
                    />
                </div>
                <div className="">
                    <h1 className="lg:text-3xl md:text-xl text-white font-Poppins text-center font-semibold">
                        Understand
                    </h1>
                    <h1 className="lg:text-xl md:text-sm text-gray-500 font-Poppins text-center">
                        Keshi
                    </h1>
                </div>
                <div className="flex justify-center items-center mt-3">
                    <span className="text-gray-500 text-sm">0:00</span>
                    <div className="h-2 w-[60%] bg-gray-300 rounded-full mx-2">
                        <div className="h-full bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-500 text-sm">3:45</span>
                </div>

                <div className="flex justify-center items-center mt-7 text-white group-hover:opacity-100 transition-opacity duration-300">
                    <BiSkipPrevious
                        size={60}
                        className="cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="mx-16 lg:w-[60px] lg:h-[60px] md:w-[40px] md:h-[40px] bg-white rounded-full flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300">
                        <AiOutlinePause
                            size={40}
                            className="text-card cursor-pointer"
                        />
                    </div>
                    <BiSkipNext
                        size={60}
                        className="cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
