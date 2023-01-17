import React from "react";
import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside
      mini="false"
      className="fixed inset-y-0 left-0 flex-wrap items-center justify-between block w-full p-0 my-4 overflow-y-auto transition-all duration-200 ease-in-out -translate-x-full bg-white border-0 shadow-none xl:ml-6 dark:bg-slate-850 z-990 max-w-64 rounded-2xl xl:translate-x-0"
      id="sidenav-main"
    >
      {/* header */}
      <div className="h-20">
        <i
          className="absolute top-0 right-0 p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 dark:text-white xl:hidden"
          aria-hidden="true"
          sidenav-close-btn=""
        />
        <Link
          className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700 dark:text-white"
          to="/"
        >
          <img
            src="images/vite.svg"
            className="inline-block h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:hidden"
            alt="main_logo"
          />
          <img
            src="images/vite.svg"
            className="hidden h-full max-w-full transition-all duration-200 ease-in-out max-h-8 dark:inline-block"
            alt="main_logo"
          />
          <span className="ml-1 font-semibold transition-all duration-200 ease-in-out">
            TONY DASHBOARD
          </span>
        </Link>
      </div>
      {/* //---------hr----------// */}
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div
        className="items-center block w-full h-auto grow basis-full"
        id="sidenav-collapse-main"
      >
        {/* primary list  */}
        <ul className="flex flex-col pl-0 mb-0 list-none">
          <li className="mt-0.5 w-full">
            <NavLink
              // className=" bg-blue-500/30 font-semibold text-blue-500"
              compo
              to="/"
              className={({ isActive }) =>
                `after:ease-in-out after:font-awesome-5-free ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap rounded-lg  px-4 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold dark:after:text-white after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80
                ${isActive && "bg-blue-500/30 font-semibold text-blue-500"}
                `
              }
            >
              <div className="stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center">
                <i className="text-sm leading-normal ni ni-shop" />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease">
                Dashboard
              </span>
            </NavLink>
          </li>
          <li className="mt-0.5 w-full">
            <NavLink
              compo
              to="/job"
              className={({ isActive }) =>
                `after:ease-in-out after:font-awesome-5-free ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap rounded-lg  px-4 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold dark:after:text-white after:text-slate-800 after:antialiased after:transition-all after:duration-200 dark:text-white dark:opacity-80
                ${isActive && "bg-blue-500/30 font-semibold text-blue-500"}
                `
              }
            >
              <div className="stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center">
                <i className="text-sm leading-normal fa-brands fa-stack-overflow " />
              </div>
              <span className="ml-1 duration-300 opacity-100 pointer-events-none ease text-slate-500">
                Jobs
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default SideBar;
