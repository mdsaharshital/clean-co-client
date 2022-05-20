import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const DashboardSidebar = ({ Children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center bg-accent">
        {/* <!-- Page content here --> */}
        {/* {Children} */}
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content mt-16">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="addService">Add Service</NavLink>
          </li>
          <li>
            <NavLink to="addAdmin">Add Admin</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;
