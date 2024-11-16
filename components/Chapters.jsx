import React from "react";

function Chapters({ chapterNum, chapterTitle, chapterDesc, onChapterSelct, bgGrad }) {
  return (
    <>
      <div className="flex flex-col gap-6 homeTextBold">
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={onChapterSelct}
        >
          <h1 className="text-4xl text-slate-600 font-medium">{chapterNum}</h1>
          <h1 className="text-6xl text-slate-600 font-medium">
            {chapterTitle}
          </h1>
          <h1 className="text-5xl text-slate-600 font-medium">{chapterDesc}</h1>
        </div>
        <div className={`w-full h-1 shadow-lg rounded-lg ${bgGrad}`}></div>
      </div>
    </>
  );
}

export default Chapters;
