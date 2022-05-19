import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login_Signin/Login";

import AddAdmin from "./../pages/Dashboard/AddAdmin";
import AddService from "./../pages/Dashboard/AddService";

export const publicRoute = [
  { path: "/", name: "home", Component: Home },

  { path: "/contact", name: "contact", Component: Contact },
  { path: "/login", name: "login", Component: Login },
];

export const privateRoute = [
  { path: "/about", name: "about", Component: About },
  { path: "/services", name: "services", Component: Services },
];
export const adminNestedRoute = [
  { path: "addService", name: "addService", Component: AddService },
  { path: "addAdmin", name: "addAdmin", Component: AddAdmin },
];
