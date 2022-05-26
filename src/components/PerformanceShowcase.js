import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import ImageFrame from "./imageComponents/ImageFrame";
import Subheading from "./Subheading";
import useContenful from "./useContenful";

function PerformanceShowcase() {
  const {
    getClassTenStudents,
    getClassElevenStudents,
    getClassTwelveStudents,
  } = useContenful();

  const dummyStudents = [
    {
      name: "1st",
      class: "",
      score: "",
      avatar: "",
    },
    {
      name: "2nd",
      class: "",
      score: "",
      avatar: "",
    },
    {
      name: "3rd",
      class: "",
      score: "",
      avatar: "",
    },
    {
      name: "4th",
      class: "",
      score: "",
      avatar: "",
    },
    {
      name: "5th",
      class: "",
      score: "",
      avatar: "",
    },
  ];

  const [classTenStudents, setClassTenStudents] = useState(dummyStudents);
  const [classElevenStudents, setClassElevenStudents] = useState(dummyStudents);
  const [classTwelveStudents, setClassTwelveStudents] = useState(dummyStudents);

  useEffect(() => {
    getClassTenStudents().then((response) => setClassTenStudents(response));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getClassElevenStudents().then((response) =>
      setClassElevenStudents(response)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getClassTwelveStudents().then((response) =>
      setClassTwelveStudents(response)
    );
  });

  return (
    <div className=" mb-24 mx-auto">
      <Heading heading={"Wall of Pride"} />
      <Subheading subheading={"Latest Student Performances"} />
      <div className="mt-14 flex items-center md:justify-center lg:justify-center xl:justify-center gap-1 xl:gap-8 overflow-auto whitespace-nowrap">
        <ImageFrame students={classTwelveStudents} />
        <ImageFrame students={classElevenStudents} />
        <ImageFrame students={classTenStudents} />
      </div>
    </div>
  );
}

export default PerformanceShowcase;
