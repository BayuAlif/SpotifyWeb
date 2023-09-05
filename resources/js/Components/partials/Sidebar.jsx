import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { BiHomeCircle } from "react-icons/bi";
import { PiPlaylistFill } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
import { MdOutlineLibraryMusic } from "react-icons/md";

const Sidebar = () => {
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
    const [isOpen, setIsOpen] = useState(true);
    
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className={`fixed left-0 top-0 h-full bg-Bgside ${isDesktop ? 'w-64' : 'w-24'} flex flex-col py-4 px-3 text-white font-Roboto ${!isDesktop ? 'items-center ' : ''} transition-all duration-300`} style={{ zIndex: 100 }}>
        <div className={`flex items-center mb-11 font-Poppins text-lg transition-all duration-300 gap-2 ${isDesktop ? 'justify-center' : ''}`}>
                
            <img src="/img/pngwing.com (1).png" alt="Nama Gambar" className=" w-8"/>
                {isDesktop && <h1>BayuMusic</h1>}
            </div>

            <div>
                
                <Link
                    to="/"
                    className={`flex items-center space-x-2 p-3 ${
                        isDesktop ? "hover:bg-slate-700 rounded" : ""
                    }`}
                >
                    <BiHomeCircle size="20" />
                    {isDesktop && <span>Explore</span>}
                    
                </Link>
                <Link
                    to="/"
                    className={`flex items-center space-x-2 p-3 ${
                        isDesktop ? "hover:bg-slate-700 rounded" : ""
                    }`}
                >
                    <MdOutlineLibraryMusic size="20" />
                    {isDesktop && <span>Genre</span>}
                </Link>
                <Link
                    to="/"
                    className={`flex items-center space-x-2 p-3 ${
                        isDesktop ? "hover:bg-slate-700 rounded" : ""
                    }`}
                >
                    <BsFillPeopleFill size="20" />
                    {isDesktop && <span>Artist</span>}
                </Link>
            </div>

                <div className="py-10">
                    <h1 className="pl-3 pb-1 text-xs text-gray-400">Library</h1>
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 p-3 ${
                            isDesktop ? "hover:bg-slate-700 rounded" : ""
                        }`}
                        >
                        <PiPlaylistFill size="20" />
                        {isDesktop && <span>Playlist</span>}
                    </Link>
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 p-3 ${
                            isDesktop ? "hover:bg-slate-700 rounded" : ""
                        }`}
                    >
                        <BsFillHeartFill size="20" />
                        {isDesktop && <span>Liked</span>}
                    </Link>
                </div>


                <div className="py-4">
                    <h1 className="pl-3 pb-1 text-xs text-gray-400">Logout</h1>
                    <Link
                        to="/"
                        className={`flex items-center space-x-2 p-3 ${
                            isDesktop ? "hover:bg-slate-700 rounded" : ""
                        }`}
                    >
                        <FiLogOut size="20" />
                        {isDesktop && <span>Logout</span>}
                    </Link>
                </div>
        </div>
    );
};

export default Sidebar;
