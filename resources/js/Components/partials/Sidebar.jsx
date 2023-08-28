import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiHomeCircle } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { PiPlaylistFill } from "react-icons/pi";
import { FiLogOut } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsFillHeartFill } from "react-icons/bs";
const Sidebar = () => {
    const menus = [
        { name: "Home", link: "/", icon: BiHomeCircle },
        { name: "Search", link: "/", icon: BiSearch },
        { name: "Artist", link: "/", icon: BsFillPeopleFill },
        { name: "Playlist", link: "/", icon: PiPlaylistFill, margin: true },
        { name: "Liked", link: "/", icon: BsFillHeartFill },

        { name: "Logout", link: "/", icon: FiLogOut, margin: true },
    ];

    //mari kita buat untuk responsif tutup buka side barnya
    const [open, setOpen] = useState(true)
    return (
        //bagian side bar
        <div>
            <div className={`backdrop-blur-sm bg-Bgtrans ${open ? ' w-56' : 'w-16' } min-h-screen duration-500 px-5 rounded-xl`}>
                <div className="py-3 flex justify-end">
                {open && (
            <>
              <h1 className="text-white font-bold mr-20 font-Teko text-xl">BayuMusic</h1>
            </>
          )}
                    {/* buat agar tombol bisa digunakan untuk tutup buka menu */}
                    <HiMenuAlt3 size={26} className="cursor-pointer" onClick={()=>setOpen(!open)} /> 
                </div>

                <div className="mt-4 flex flex-col gap-4 relative text-white">
                    {menus?.map((menu, i) => (
                        <Link
                            to={menu?.link} key={i} className={` ${menu?.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}>
                            <div>
                                {React.createElement(menu?.icon, {size: "20"})}
                            </div>
                            <h2 style={{transitionDelay: `${i + 3}00ms`}}  
                            className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-8 overflow-hidden'} `}>{menu?.name}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
