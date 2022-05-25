import React from "react";

function Footer() {
  return (
    <div className=" bg-[#64fcd9] px-6 pt-14">
      <div className="flex md:gap-40 justify-around">
        <h4 className="text-xs font-semibold w-1/3">
          Aysha Tutorial Coaching Classes
        </h4>
        <div>
          <i className="uil uil-instagram mr-7 text-3xl text-slate-800"></i>
          <i className="uil uil-facebook text-3xl text-slate-800"></i>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly py-16 text-xs text-slate-700 font-semibold ">
        <div className="flex justify-center items-center md:items-start flex-col gap-5">
          <a href="/">About Us</a>
          <a href="/">Career</a>
          <a href="/">Syllabus</a>
          <a href="/">Fees</a>
          <a href="/">Faculties</a>
          <a href="/">Photo Gallery</a>
        </div>
        <div className="pt-16 md:pt-0">
          <iframe
            className=" border border-teal-800 rounded-lg w-72 h-64"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.161632729555!2d89.89471421517399!3d25.73216791610219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e2ad1eeea8b9ab%3A0x4a4192c49719c04a!2sAysha%20Tutorial%20Coaching%20Classes%2C%20Hallidayganj!5e0!3m2!1sen!2sin!4v1653023693499!5m2!1sen!2sin"
            // width="400"
            // height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
