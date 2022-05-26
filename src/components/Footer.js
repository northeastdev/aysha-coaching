import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#64fcd9] w-full p-5 m:p-12">
      <div className="md:flex justify-between">
        <div className="flex justify-between md:flex-col">
          <h4 className="text-sm font-semibold">
            Aysha Tutorial Coaching Classes
          </h4>
          <div>
            {/* <i className="uil uil-instagram mr-7 text-3xl text-slate-800"></i> */}
            <a
              href="https://www.facebook.com/aysha.tutorial.1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-facebook text-3xl text-slate-800"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-28 md:m-0 justify-between gap-20 text-xs text-slate-700 font-semibold ">
          <div className="flex flex-col text-center md:text-left gap-5">
            <Link to="/about">About Us</Link>
            <Link to="/fees">Fees</Link>
            {/* <a href="/">Faculties</a>
            <a href="/">Career</a>
            <a href="/">Syllabus</a>
            <a href="/">Photo Gallery</a> */}
          </div>
          <div className="mx-auto">
            <iframe
              className="shadow-lg shadow-teal-500 rounded-lg w-72 h-64"
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
      <div className="text-xs flex flex-col-reverse mt-12">
        <div className=" text-slate-600">©️ Copyright 2022</div>
        <div>
          <a
            className="font-semibold text-slate-800 hover:text-slate-600"
            href="https://northeastdev.github.io/"
          >
            Made with 💗 by NortheastDev
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
