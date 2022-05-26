import React from "react";
import Heading from "./Heading";

function About() {
  return (
    <div className=" h-[500px] mt-16 md:container mx-auto lg:max-w-5xl">
      <Heading heading={"About Us"} />
      <p className="m-10 text-center">
        Aysha Tutorial Coaching Classes is an initiative by Er.Alamin Ali
        (Founder & Managing Director) to establish a professional coaching
        insititute in Phulbari, Hallidayganj and Hatsingimari.
      </p>
      <p className="m-10 text-center">
        This has led many students to achieve knowledge based quality education,
        specially those students who have the potential and dedication to clear
        board examinations with good scores as well as other competitive
        examinations like JEE/NEET.
      </p>
    </div>
  );
}

export default About;
