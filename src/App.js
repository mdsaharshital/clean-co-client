import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { privateRoute, publicRoute } from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import RequireAuth from "./routes/RequireAuth";

function App() {
  //
  useEffect(() => {
    AOS.init();
  }, []);
  //

  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />}></Route>
          ))}
          {/* private route */}

          <Route element={<RequireAuth />}>
            {privateRoute.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />}></Route>
            ))}
          </Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
