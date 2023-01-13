import { motion } from "framer-motion";

export default function Home(props) {
  const gotourl = "http://localhost:8080/auth/google";

  console.log(props);
  return (
    <motion.div className="min-w-screen min-h-screen bg-blackone text-whiteone flex font-one overflow-hidden">
      <div className="" >
        <motion.svg
          initial={{ y: -450, scale: 1, x: -500 }}
          whileHover={{ x: -390 }}
          className="hidden sm:block absolute top-[60%] left-[50%] translate-x-[-40%] translate-y-[-50%] object-scale-down"
          viewBox="0 0 560 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="276.5"
            cy="276.5"
            r="275"
            stroke="#655ACF"
            stroke-width="3"
          />
        </motion.svg>
        <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
          <div>WELCOME TO</div>
          <div className="md:text-[8rem] text-[3rem] ">PICTIVITY</div>
          <a
            href={gotourl}
            className="border-2 rounded-lg border-whitetwo px-3 py-2 hover:bg-whitetwo "
          >
            {props.user != null ? props.user.name : "LOGIN WITH GOOGLE"}

          </a>
        </motion.div>
      </div>
    </motion.div>
    // <div className="min-w-screen min-h-screen bg-blackone text-whiteone flex font-one">
    //   <div className="m-auto relative left-[10vw]">
    //     <div>
    //       <div className="text-lg relative lg:top-[6vh] lg:left-[1vw]">
    //         WELCOME TO
    //       </div>
    //       <div className="lg:text-[9rem] text-[5rem]">PICTIVITY</div>
    //     </div>
    //     {/* <div className="relative wrap flex gap-2"> */}
    //     <a
    //       href={gotourl}
    //       className="border-2 rounded-lg border-whitetwo px-3 py-2 hover:bg-whitetwo text-right relative left-[1vw]"
    //     >
    //       LOGIN WITH GOOGLE
    //     </a>
    //   </div>

    //   <svg
    //     className="-z-1 my-auto relative right-[10vw]"
    //     width="553"
    //     height="553"
    //     viewBox="0 0 553 553"
    //     fill="none"
    //     xmlns="http://www.w3.org/2000/svg"
    //   >
    //     <circle
    //       cx="276.5"
    //       cy="276.5"
    //       r="275"
    //       stroke="#655ACF"
    //       stroke-width="3"
    //     />
    //   </svg>
    // </div>
  );
}
