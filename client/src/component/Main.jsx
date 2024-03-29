import React, { useEffect, useState } from "react";
import mainOne from "./images/mainOne.jpg";
import mainTwo from "./images/mainTwo.png";

function Main() {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(true);
    }, 700);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className={`button-container ${show ? 'fade-in' : ''} mt-[5rem]`}>
  

    <div className=" main m-5 h-[90vh] ">
      <div className="flex justify-around flex-wrap">
        <div className=" m-auto">
          <p className="font-extrabold font-mono text-8xl mb-3"></p>
          <p className="text-5xl flex gap-3 flex-wrap font-thin">
            Now!<p className="text-purple-800 font-normal">Creators</p> have
            their own place
          </p>
          <p className="text-4xl flex gap-3 flex-wrap font-thin">
            Other than <p className="text-red-500 font-mono">Work Place</p>
          </p>
        </div>
        <div>
          <img src={mainTwo} alt="" className="mr-10 imganim" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Main;
