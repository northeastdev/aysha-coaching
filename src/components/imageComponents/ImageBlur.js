import React from "react";

function ImageBlur({ name, score, standard }) {
  return (
    <div className=" w-full h-full bg-slate-200/10 backdrop-blur-lg text-white  text-xs rounded-sm px-2 flex items-center justify-between">
      <p>{name}</p>
      <p>Class: {standard}</p>
      <p>{score}%</p>
    </div>
  );
}

export default ImageBlur;
