import Image from "next/image";
import React from "react";
import { PluggLogo } from "../assets/";

const Hero = () => {
  return (
    <section className="flex flex-col bg-[#E5ECEA] h-auto">
      <div
        id="logo-section"
        className="w-full flex flex-row py-6 justify-between items-center navbar"
      >
        <Image src={PluggLogo} alt="Plugg-Logo" className="w-[81px] " />
        <p className=" flex flex-1 text-black">PLUGG</p>
      </div>

      <div
        id="plugg-Solgan"
        className="flex flex-row justify-between items-center w-full"
      >
        <h1 className="flex-1 font-poppins font-semibold text-black">
          {" "}
          Get Paid
        </h1>
      </div>
    </section>
  );
};

export default Hero;
