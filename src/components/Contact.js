import React, { useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section id="contact">
      <Heading heading={"Contact Us"} />
      <Subheading subheading={"Have any doubts? Get in touch."} />

      <div className="grid max-w-2xl my-12 sm:grid-cols-2 md:mx-auto  mx-3">
        <div>
          <div className="flex mb-8">
            <i className=" text-3xl text-violet-600 mr-3 uil uil-phone contact__icon"></i>
            <div>
              <h3 className="text-lg font-medium">Call Me</h3>
              <span className=" text-sm text-slate-400">
                +916009250851 | +918486779678
              </span>
            </div>
          </div>

          <div className="flex mb-8">
            <i className="text-3xl text-violet-600 mr-3 uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="text-lg font-medium">Email</h3>
              <span className=" text-sm text-slate-400">
                scienceclass730@gmail.com
              </span>
            </div>
          </div>

          <div className="flex mb-8">
            <i className="text-3xl text-violet-600 mr-3 uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="text-lg font-medium">Location</h3>
              <span className=" text-sm text-slate-400">
                Ground Floor, Near SBI ATM, <br /> Hallidayganj (Singimari){" "}
                <br /> West Garo Hills, Meghalaya - 794104
              </span>
            </div>
          </div>
        </div>

        <form
          action="https://formsubmit.co/scienceclass730@gmail.com"
          method="POST"
          className="grid lg:w-[460px] gap-6"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className=" bg-violet-100 rounded-lg pt-3 pb-1 px-4">
              <label className=" text-sm" for="">
                Name
              </label>
              <input
                onChange={(event) => setName(event.target.value)}
                className="w-full bg-violet-100 text-slate-600 outline-none text-sm border-none pt-1 pr-2 pb-2"
                type="text"
                value={name}
                name="name"
                required
              ></input>
            </div>
            <div className="bg-violet-100 rounded-lg pt-3 pb-1 px-4">
              <label className="text-sm" for="">
                Email
              </label>
              <input
                onChange={(event) => setEmail(event.target.value)}
                className="w-full bg-violet-100 text-slate-600 outline-none text-sm border-none pt-1 pr-2 pb-2"
                value={email}
                name="email"
                type="email"
                required
              ></input>
            </div>
          </div>
          <div className="bg-violet-100 rounded-lg pt-3 pb-1 px-4">
            <label className="text-sm" for="">
              Message
            </label>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              className="w-full bg-violet-100 text-slate-600 outline-none text-sm border-none pt-1 pr-2 pb-2"
              value={message}
              name="message"
              id=""
              cols="30"
              rows="7"
              required
            ></textarea>
          </div>

          <div>
            <button className="inline-flex items-center bg-violet-600 text-white px-4 shadow-violet-200 shadow-lg py-2 rounded-full text-sm font-medium">
              Send
              <i className=" text-xl ml-2 transition-all uil uil-message"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
