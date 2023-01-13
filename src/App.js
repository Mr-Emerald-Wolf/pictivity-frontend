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
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {

  axios.defaults.withCredentials = true

  const [user, setUser] = useState(null);

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'http://localhost:8080/user/getuser'
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setUser(response.data.data)
      })
      .catch(function (error) {
        console.log(error);
      });

  }, [])



  const location = useLocation();
  // console.log(Cookies.get());
  return (
    <div>
      <AnimatePresence>
        <div className="sm:block hidden">
          <NavbarWeb user={user} />
        </div>
        <div className="block sm:hidden">
          <NavbarMobile user={user}/>
        </div>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home user={user}/>} />
          <Route path="/generate" exact element={<Generate user={user} />} />
          <Route path="/ar" exact element={<Ar />} />
          <Route path="/profile" exact element={<Profile user={user} />} />
          <Route path="/peepee" exact element={<ScreenAnimation />} />
          {/* <Route path="/nft" exact element={<Nft />} /> */}
        </Routes>
      </AnimatePresence>
    </div>
  );
}
