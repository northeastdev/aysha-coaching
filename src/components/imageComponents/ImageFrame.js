import React from "react";
import ImageBlur from "./ImageBlur";

function ImageFrame({ students }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className=" w-[345px] h-[290px] rounded-sm bg-cover"
        style={{
          backgroundImage: `url(${students[0].avatar})`,
        }}
      >
        <div className="h-[50px] relative top-[240px] rounded-sm">
          <ImageBlur
            name={students[0].name}
            score={students[0].score}
            standard={students[0].class}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 w-[345px] mt-1">
        <div
          className="bg-slate-300 h-36 rounded-sm bg-cover"
          style={{ backgroundImage: `url(${students[1].avatar})` }}
        >
          <div className="h-[35px] relative top-[109px]">
            <ImageBlur
              name={students[1].name}
              score={students[1].score}
              standard={students[1].class}
            />
          </div>
        </div>
        <div
          className="bg-slate-300 h-36 rounded-sm bg-cover "
          style={{ backgroundImage: `url(${students[2].avatar})` }}
        >
          <div className="h-[35px] relative top-[109px]">
            <ImageBlur
              name={students[2].name}
              score={students[2].score}
              standard={students[2].class}
            />
          </div>
        </div>
        <div
          className="bg-slate-300 h-36 rounded-sm bg-cover"
          style={{ backgroundImage: `url(${students[3].avatar})` }}
        >
          <div className="h-[35px] relative top-[109px]">
            <ImageBlur
              name={students[3].name}
              score={students[3].score}
              standard={students[3].class}
            />
          </div>
        </div>
        <div
          className="bg-slate-300 h-36 rounded-sm bg-cover"
          style={{ backgroundImage: `url(${students[4].avatar})` }}
        >
          <div className="h-[35px] relative top-[109px]">
            <ImageBlur
              name={students[4].name}
              score={students[4].score}
              standard={students[4].class}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageFrame;
