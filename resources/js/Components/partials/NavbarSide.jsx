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
import Card from "../Home/Card";
import SlideBanner from "./SlideBanner";
import MusicBar from "./MusicBar";

const NavbarSide = () => {
    //banner slide

    const menus = [
        { name: "Explore", link: "/", icon: BiHomeCircle },
        { name: "Artist", link: "/", icon: BsFillPeopleFill },
        { name: "Genre", link: "/", icon: MdOutlineLibraryMusic },
        { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "File Manager", link: "/", icon: FiFolder },
        { name: "Cart", link: "/", icon: FiShoppingCart },
        { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Setting", link: "/", icon: RiSettings4Line },
    ];
    const [open, setOpen] = React.useState(
        localStorage.getItem("navbarOpen") === "true" || false
    );

    useEffect(() => {
        localStorage.setItem("navbarOpen", open);
    }, [open]);

    return (
        <section className="flex">
            <div
                className={` bg-zinc-900 min-h-screen ${
                    open ? "w-72" : "w-16 hidden sm:block"
                } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                
                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link}
                            key={i}
                            className={` ${
                                menu?.margin && "mt-5"
                            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <div>
                                {React.createElement(menu?.icon, {
                                    size: "20",
                                })}
                            </div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                style={{
                                    zIndex: 10,
                                }}
                                className={`${
                                    open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="flex-grow bg-Bgside w-full">
                {/* Isi div memanjang ke ujung layar */}
                <SlideBanner />
                <section className="mx-8 bg-Bgside ">
                    <Card />
                </section>
            <div>
                <MusicBar />
            </div>
            </div>

        </section>
    );
};

export default NavbarSide;
