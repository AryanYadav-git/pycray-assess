import { BellDot, ChevronDown, Menu, Search } from "lucide-react";
import React from "react";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="flex gap-6">
        <button
          className="text-gray-500 focus:outline-none md:hidden"
          onClick={toggleSidebar}
        >
          <Menu />
        </button>
        <div className=" w-52 md:w-96 h-fit p-2 border-2 px-4 border-blue-200 rounded-md flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-inherit focus:outline-none "
          />
          <Search className=" text-blue-950 size-5" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <BellDot className="size-5 text-blue-950" />
        <div className="flex items-center gap-2 p-2 hover:bg-zinc-200 rounded-xl">
          <img
            src="/images/userIcon.jpg"
            alt="User Avatar"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-semibold">Alex Johnson</span>
          <ChevronDown className="size-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
