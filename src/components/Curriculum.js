import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";

function Curriculum() {
  return (
    <div className="my-24 h-auto">
      <Heading heading={"Curriculum"} />
      <Subheading
        subheading={
          "We offer classes to students of Clas VIII - XI and Class XII (Science)"
        }
      />
      <div className="flex justify-between items-center mx-16 lg:mx-40 gap-3 pt-12">
        <div>
          <header className="text-sm text-slate-500">
            The following subjects are covered extensibly.
          </header>
          <ul className="mt-4 list-outside flex flex-col gap-1">
            <li>Physics</li>
            <li>Chemistry</li>
            <li>Mathematics</li>
            <li>Advance Mathematics</li>
            <li>Biology</li>
            <li>English</li>
            <li>Assamese</li>
            <li>Social Science</li>
            <li>Health Education</li>
          </ul>
        </div>
        <div className=" hidden md:block ">
          <img
            className="rounded-md max-w-md"
            src="https://media.istockphoto.com/photos/group-of-elementary-students-having-computer-class-with-their-teacher-picture-id1358014313?b=1&k=20&m=1358014313&s=170667a&w=0&h=t_bvZVk1eQhR1SiiuRphbJ3kljcJJ46QAsOQ8EnuLbA="
            alt="classroom"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
