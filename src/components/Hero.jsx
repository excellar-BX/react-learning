import React from "react";
import pic from "../assets/hero2.png";
import Button from "./Button";
const Hero = () => {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[700px] " src={pic} alt="" />
        <div className="absolute top-20 left-[25%] flex flex-col justify-center items-center ">
            <p className="text-center text-5xl font-semibold text-white" >Enterprise deep learning platform</p>
          <p className=" text-xl text-white/80 text-center max-w-[600px] py-5  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            dicta, doloremque adipisci sunt aliquam inventore corporis atque
            libero tenetur eveniet ratione. Suscipit corporis veritatis magnam
            unde numquam minima pariatur aspernatur.
          </p>
          <Button value="Regiter Now for free" className="rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
