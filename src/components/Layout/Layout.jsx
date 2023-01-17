import React from "react";

// components
import SideBar from "./SideBar";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="w-full bg-blue-500 dark:hidden min-h-75">
      <div className="absolute w-full bg-blue-500 dark:hidden min-h-75" />

      <SideBar />

      <main className="relative h-full max-h-screen transition-all duration-200 ease-in-out xl:ml-68 rounded-xl">
        <Header />

        <div className="w-full px-6 py-6 mx-auto">{children}</div>
      </main>
    </div>
  );
}

export default Layout;
