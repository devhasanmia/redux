import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";

const Main = () => {
  return (
    <div className='px-10'>
      <Navber />
      <Outlet />
    </div>
  );
};

export default Main;