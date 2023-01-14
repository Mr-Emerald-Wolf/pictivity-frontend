import { motion } from "framer-motion";
import { useState } from "react";
import ScreenAnimation from "./ScreenAnimation";
export default function Profile(props) {
  const gotourl = "http://localhost:8080/auth/google";
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 1000);

  console.log(props);
  return (
    <div>
      {isVisible && <ScreenAnimation />}
      <motion.div className="min-w-screen min-h-screen bg-blackone text-whiteone flex font-one overflow-hidden">
        <div className="">
          <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
            <div className="text-[3rem]">WELCOME!</div>
            <div>
              {props.user != null ? props.user.name : "You ain't logged in"}
            </div>
            <div>{props.user != null ? props.user.email : ""}</div>
            {props.user != null ? (
              <img
                className="rounded-[50%] w-[2.2rem]"
                src={props.user.profileimg}
                alt=""
              />
            ) : (
              <p></p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
