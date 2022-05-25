import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import useContenful from "./useContenful";

function Announcement() {
  const [announcement, setAnnouncement] = useState("");
  const { getAnnouncement } = useContenful();

  useEffect(() => {
    getAnnouncement().then((response) => setAnnouncement(response[0]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Heading heading={"Announcement"} />
      <div className="bg-slate-100 mt-6 py-3 shadow-inner h-16 flex items-center md:justify-center px-3 gap-4 overflow-auto whitespace-nowrap">
        <div className="text-2xl text-slate-500/60 inline-block">
          <i className="uil uil-megaphone"></i>
        </div>
        <p className="inline-block">{announcement}</p>
      </div>
    </React.Fragment>
  );
}

export default Announcement;
