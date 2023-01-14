import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Nft from "./Nft";
import ScreenAnimation from "./ScreenAnimation";
export default function Profile(props) {
  const gotourl = "http://localhost:8080/auth/google";
  const [isVisible, setIsVisible] = useState(true);

  const [history, setHistory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": 1
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/nft/getnft", requestOptions)
      .then(response => response.text())
      .then(result => {
        result = JSON.parse(result)
        console.log(result.data)
        setHistory(result.data)
        setLoading(false)
      })
      .catch(error => console.log('error', error));
  }, [])


  setTimeout(() => {
    setIsVisible(false);
  }, 1000);

  console.log(props);
  return (
    <div>
      {isVisible && <ScreenAnimation />}
      <motion.div className="min-w-screen min-h-screen bg-blackone text-whiteone flex font-one">

        <motion.div className="absolute top-[20%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="text-[3rem]">WELCOME!</div>
          <div className="grid grid-flow-col gap-2">
            {props.user != null ? (
              <img
                className="rounded-[50%] w-[3.9rem]"
                src={props.user.profileimg}
                alt=""
              />
            ) : (
              <p></p>
            )}
            <div className="grid grid-flow-row">
              <div>
                {props.user != null ? props.user.name : "You ain't logged in"}
              </div>
              <div>{props.user != null ? props.user.email : ""}</div>
            </div>
          </div>

          <div className="text-[2.5rem] m-2">PREVIOUS NFTS</div>

          </motion.div>
        <div className="grid m-2 grid-cols-4 gap-2 mt-64 ml-24 p-3">
          {!loading && history.map((e) => {
            return (<Nft key={e.id} id={e.id} description={e.description} imageURL={e.imageURL} name={e.name} chain={e.chain} thash={e.thash} date={e.createdAt} />)
          })}
        </div>

      </motion.div>
    </div>
  );
}
