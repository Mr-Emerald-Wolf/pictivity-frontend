import { motion } from "framer-motion";

export default function ScreenAnimation() {

    return (
      <div className="bg-blackone w-screen h-screen absolute">
          <motion.div        
            className="w-screen h-screen absolute z-20 bg-blackone m-0"
            initial={{height:"100%"}}
            animate={{height:0}}
            transition={{duration:0.5}}>
          </motion.div>
          <motion.div        
            className="whitescreen w-screen h-screen absolute z-10 bg-whiteone m-0"
            initial={{height:"100%"}}
            animate={{height:0}}
            transition={{duration:0.5,
            delay:0.5}}
            >
          </motion.div>
      </div>
    )
  }