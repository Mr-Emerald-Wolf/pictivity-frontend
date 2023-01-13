import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import NavbarWeb from "./Components/NavbarWeb";
import NavbarMobile from "./Components/NavbarMobile";
import Profile from "./Components/Profile";
import Generate from "./Components/Generate";
import Ar from "./Components/Ar";
import ScreenAnimation from "./Components/ScreenAnimation";
// import Nft from "./Components/Nft";
import { AnimatePresence } from "framer-motion";
// import Cookies from "js-cookie";

export default function App() {
  const location = useLocation();
  // console.log(Cookies.get());
  return (
    <div>
      <AnimatePresence>
        <div className="sm:block hidden">
          <NavbarWeb />
        </div>
        <div className="block sm:hidden">
          <NavbarMobile />
        </div>  
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/generate" exact element={<Generate />} />
          <Route path="/ar" exact element={<Ar />} />
          <Route path="/profile" exact element={<Profile />} />
          <Route path="/peepee" exact element={<ScreenAnimation />} />
          {/* <Route path="/nft" exact element={<Nft />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
