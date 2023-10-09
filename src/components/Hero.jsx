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
        <div className="flex flex-col justify-start items-start ml-[77px]">
          <p className="flex-1 font-Montserrat bold text-black text-[112.131px]">
            Get Paid
          </p>
          <p className=" text-[#4FC37E] text-[40.77px] semibold font-Montserrat">
            What you are already doing
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
