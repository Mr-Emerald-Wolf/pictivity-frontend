import { useState } from "react";
import ScreenAnimation from "./ScreenAnimation";
export default function Ar() {
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 1000);

  return (
    <div>
      {isVisible && <ScreenAnimation />}
      <div className="min-w-screen min-h-screen bg-blackone text-whiteone flex font-one">
        <div className="flex border-2 border-whitetwo rounded-lg p-12 m-12 mb-[20vh] ml-[10vw] w-full">
          AR COMES HERE
        </div>
        <button className="absolute bottom-12 right-12 border-2 rounded-lg border-whitetwo px-2 py-1 hover:bg-whitetwo text-right ">
          PROCEED
        </button>
      </div>
    </div>
  );
}
