import React from "react";
import { links } from "../constants";
import { useStateContext } from "../contexts/ContextProvider";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const { activeMenu, setActiveMenu, screenSize } =
    useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu !== undefined && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-blue-800 font-bold  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-500 dark:hover:text-gray-500 hover:bg-light-gray m-2";

  return (
    <div>
      <aside
        className={`fixed z-40 top-0 left-0 h-full bg-white p-6 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative w-80 md:w-64`}
      >
        <div className="text-xl font-bold text-blue-900 mb-10">
          PyCray_Assessment
        </div>
        <nav>
          {links.map((item) => (
            <div key={item.title}>
              <p className="dark:text-gray-400 text-xs font-semibold m-3  mt-4 uppercase ">
                {item.title}
              </p>
              {item.links.map((link) => (
                <NavLink
                  to={`${link.href}`}
                  key={link.name}
                  onClick={handleCloseSideBar}
                  // style={({ isActive }) => ({
                  //   backgroundColor: isActive ? currentColor : "",
                  // })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {link.icon}
                  <span className="capitalize ">{link.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      {/* Overlay for sidebar on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
