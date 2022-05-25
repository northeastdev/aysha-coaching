import React from "react";

function Heading({ heading }) {
  return (
    <header className="font-bold text-xl text-slate-700 text-center">
      {heading}
    </header>
  );
}

export default Heading;
