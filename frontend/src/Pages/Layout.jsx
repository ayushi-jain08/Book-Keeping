import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="p-2 ">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
