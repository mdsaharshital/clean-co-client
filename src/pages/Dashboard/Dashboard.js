import React from "react";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/DashboardSidebar";

const Dashboard = () => {
  return (
    <DashboardSidebar>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <h1>hello</h1>
      <Outlet />
    </DashboardSidebar>
  );
};

export default Dashboard;
