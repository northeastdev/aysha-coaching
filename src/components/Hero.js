import React from "react";
import Boy from "./svgComponents/Boy";
import GirlSvg from "./svgComponents/Girl";
import ScrollSvg from "./svgComponents/ScrollSvg";
import Wave from "./svgComponents/Wave";

function Hero() {
  return (
    <React.Fragment>
      <div className="opacity-100 relative h-auto">
        <div className="flex flex-col items-center justify-center gap-9 py-12 px-10 lg:pt-40 text-center">
          <div>
            <h1 className="text-3xl leading-[48px] lg:text-5xl lg:leading-[4rem] font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-700">
              Aysha Tutorial Coaching Classes
            </h1>
            <h2 className="bg-clip-text pt-3 text-transparent bg-gradient-to-r from-[#536976] to-[#292E49] font-semibold lg:font-bold text-3xl lg:text-4xl leading-10 lg:leading-[3.5rem]">
              Redefining Education
            </h2>
          </div>
          <p className="text-sm lg:text-lg leading-5 text-slate-600">
            We believe that you don’t need to pay exorbitant fees to receive
            <br />
            <span className="font-semibold">quality education.</span>
          </p>

          <button className="font-semibold rounded-full py-2 px-7 mt-4 text-xs lg:text-sm bg-yellow-200">
            <a href="tel:+916009250851">Call Now</a>
          </button>
          <ScrollSvg />
          <Wave />
          <div className="relative w-full">
            <GirlSvg />
            <Boy />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Hero;
