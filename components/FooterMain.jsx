import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoLanguageSharp } from "react-icons/io5";

function FooterMain({ onPrev, onClick, onNext }) {
  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-14 bg-gradient-to-r from-cyan-800 from-10% via-emerald-400 via-30% to-teal-900 to-90% text-[#e1dcd8] flex items-center justify-between">
        <div className="pl-4 flex items-center justify-between gap-4">
          <div
            className="w-10 h-10 bg-white text-slate-700 flex items-center justify-center rounded-full cursor-pointer"
            onClick={onPrev}
          >
            <FiChevronLeft className="text-2xl" />
          </div>
        </div>
        <div
          className="flex flex-col items-center justify-center gap-10 cursor-pointer"
          onClick={onClick}
        >
          <div className="w-10 h-10 bg-white text-slate-700 flex items-center justify-center rounded-full cursor-pointe">
            <IoLanguageSharp className="text-2xl" />
          </div>
        </div>
        <div className="pr-4 flex items-center justify-between gap-4">
          <div
            className="w-10 h-10 bg-white text-slate-700 flex items-center justify-center rounded-full cursor-pointer"
            onClick={onNext}
          >
            <FiChevronRight className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterMain;
