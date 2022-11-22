import React, { useState } from "react";
import { RiStackshareLine } from "react-icons/ri";
import { TbTools } from "react-icons/tb";
import { BiPrinter } from "react-icons/bi";
import { FaDrawPolygon } from "react-icons/fa"
import { FiLayers, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import Map from "../components/Map";

const Sidebar = () => {
  const menus = [
    { name: "home", link: "/", icon: FiHome },
    { name: "share", link: "/", icon: RiStackshareLine },
    { name: "print", link: "/", icon: BiPrinter },
    { name: "layers", link: "/", icon: FiLayers },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-0">
      <div className={`bg-[#0e0e0e] min-h-screen "w-16"
         duration-500 text-gray-100 px-4`}>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-full">
        <Map open={open} setOpen={setOpen} />
      </div>
    </section >
  );
};

export default Sidebar;