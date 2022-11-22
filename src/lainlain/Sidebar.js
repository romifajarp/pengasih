import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoEarthSharp } from "react-icons/io5";
import { BiSearchAlt } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const App = () => {
  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Kemiskinan" },
    { title: "Layer" },
    { title: "Basemap" },
  ];

  return (
    <div className="flex">
      <div className={`bg-dark-purple h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300  relative`}>
        <BsArrowLeftShort className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
        <div className="inline-flex">
          <Link to='/'><IoEarthSharp className={`text-white text-4xl cursor-pointer block float-left mr-2 duration-500 ${open && "rotate-[360deg]"}`} /></Link>
          <h1 className={`text-white origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Dashboard</h1>
        </div>
        <div className={`flex items-center rounded-md bg-light-white mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}>
          <BiSearchAlt className={`text-white text-lg block float-left cursor-pointer ${open && "mr-2"}`} />

          <input type={"search"} placeholder="Search" className={`text-base bg-transparent w-full text-white focus:outline-none ${!open && "hidden"}`} />
        </div>
        <ul className="pt-2">
          {Menus.map((menu, index) => (
            <>
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white round-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                <span className="text-2xl block float-left">
                  <MdDashboard />
                </span>
                <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>{menu.title}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold">
          Home Page
        </h1>
      </div>
    </div>
  )
}

export default App;
