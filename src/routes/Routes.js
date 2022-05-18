import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login_Signin/Login";

export const publicRoute = [
  { path: "/", name: "home", Component: Home },
  { path: "/about", name: "about", Component: About },
  { path: "/services", name: "services", Component: Services },
  { path: "/contact", name: "contact", Component: Contact },
  { path: "/login", name: "login", Component: Login },
];
