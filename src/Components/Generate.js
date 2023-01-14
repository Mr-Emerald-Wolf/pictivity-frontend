import axios from "axios";
import { useEffect, useState } from "react";
import ScreenAnimation from "./ScreenAnimation";


export default function Generate() {
  const [userprompt, setUserprompt] = useState("");
  const [returnedimg, setReturnedimg] = useState("");
  const [loader, setLoader] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [wallet, setWallet] = useState("");
  const [url, setUrl] = useState("");
  const [hidden, setHidden] = useState("hidden");



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

  // console.log(user);


  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible(false);
  }, 1000);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("recieved message");
    setLoader("Loading image...");
    console.log(userprompt);
    const url = "http://localhost:8080/image/createimage";

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        prompt: userprompt,
      }),
      credentials: "include",
    };

    if (userprompt) {
      fetch(url, options)
        .then((res) => {
          if (!res.ok) {
            throw Error(res.status);
          } else {
            return res.json();
          }
        })
        .then((data) => {
          setLoader("");
          console.log("data: ", data);
          setReturnedimg(data.data);
          setHidden("");
        })
        .catch((err) => {
          console.log(err);
          setLoader("ERROR");
        });
    } else {
      console.log("TEXT PROMPT IS EMPTY");
      setLoader("ERROR");
    }
  }

  function createNFT(e) {
    e.preventDefault();
    console.log("nft information: ", name, desc, wallet, returnedimg);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "connect.sid=s%3AyDC7oJnBCZU-fV4ZB_kOuvbZ-NMPBobD.PtGWjSRPA7dmP0kNUr%2BA9c6nP%2FKS79z1mO%2FKTpGQQII");


    var raw = JSON.stringify({
      userId: 1,
      name: name,
      description: desc,
      imageURL: returnedimg,
      wallet: wallet
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/nft/createnft", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:8080/nft/createnft", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <div>
      {isVisible && <ScreenAnimation />}
      <div className="min-w-screen min-h-screen bg-blackone text-whiteone grid lg:grid-cols-2 grid-cols-1 font-one px-[10vw]">
        <div className="flex flex-col text-left m-auto">
          <div className="text-lg my-8">
            TYPE IN TEXT PROMTS TO GENERATE AN AI-POWERED IMAGE
          </div>
          <form className="flex flex-col gap-4">
            <input
              placeholder="TYPE HERE"
              type="text"
              value={userprompt}
              onChange={function (e) {
                setUserprompt(e.target.value);
              }}
              className="text-3xl text-whiteone bg-blackone border-b-2 border-whitetwo outline-none px-2 py-1 "
            />
            <input
              placeholder="NFT NAME"
              type="text"
              value={name}
              onChange={function (e) {
                setName(e.target.value)
                // setUserprompt(e.target.value);
              }}
              className={
                "text-3xl text-whiteone bg-blackone border-b-2 border-whitetwo outline-none px-2 py-1 " +
                hidden
              }
            />
            <input
              placeholder="DESCRIPTION"
              type="text"
              value={desc}
              onChange={function (e) {
                // setUserprompt(e.target.value);
                setDesc(e.target.value)
                // setNftinfo({ ...nftinfo, description: data.data });
              }}
              className={
                "text-3xl text-whiteone bg-blackone border-b-2 border-whitetwo outline-none px-2 py-1 " +
                hidden
              }
            />
            <input
              placeholder="WALLET ADDRESS"
              type="text"
              value={wallet}
              onChange={function (e) {
                setWallet(e.target.value)
              }}
              className={
                "text-3xl text-whiteone bg-blackone border-b-2 border-whitetwo outline-none px-2 py-1 " +
                hidden
              }
            />
            <button
              onClick={(e) => handleSubmit(e)}
              className=" border-2 rounded-lg border-whitetwo px-2 py-1 hover:bg-whitetwo"
            >
              GENERATE
            </button>
            <button
              onClick={(e) => createNFT(e)}
              className={
                "border-2 rounded-lg border-whitetwo px-2 py-1 hover:bg-whitetwo " +
                hidden
              }
            >
              CREATE NFT
            </button>
          </form>
        </div>
        <div className="border-2 border-whitetwo rounded-lg m-12 p-12">
          <div className="">{loader}</div>
          <img src={returnedimg} className="w-full m-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
}
