import React from "react";

function Wave() {
  return (
    <React.Fragment>
      <svg
        className="absolute -top-3 rotate-180 -z-10 sm:blur-sm sm:opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="url(#paint0_linear_2_85)"
          fillOpacity=""
          d="M0,128L60,149.3C120,171,240,213,360,213.3C480,213,600,171,720,149.3C840,128,960,128,1080,144C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_2_85"
            x1="1512.05"
            y1="184.942"
            x2="0.050515"
            y2="184.02"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#64FCD9" />
            <stop offset="1" stopColor="#00F5E6" />
          </linearGradient>
        </defs>
      </svg>
    </React.Fragment>
  );
}

export default Wave;
