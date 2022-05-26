import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import useContenful from "./useContenful";

function FreeTutorial() {
  const { getYoutubeLink } = useContenful();
  const [youtubeLink, setYoutubeLink] = useState([]);

  useEffect(() => {
    getYoutubeLink().then((response) => setYoutubeLink(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderYoutubeVideos = () => {
    return youtubeLink.map((link) => {
      return (
        <div className="mx-auto">
          <iframe
            className="w-[340px] h-52 sm:w-[530px] sm:h-72 md:w-[650px] md:h-96"
            src={link.youtubeEmbedLink}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    });
  };

  return (
    <div className="mb-24">
      <Heading heading={"Free Tutorials"} />
      <Subheading
        subheading={
          "Check out these free tutorial classes on our youtube channel"
        }
      />
      <div className=" sm:mx-6 lg:mx-28 flex items-center gap-3 mt-16 overflow-auto whitespace-nowrap">
        {renderYoutubeVideos()}
      </div>
    </div>
  );
}

export default FreeTutorial;
