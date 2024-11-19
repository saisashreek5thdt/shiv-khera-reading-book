import React from "react";
import { FiHome } from "react-icons/fi";

function FooterLang({ onClick }) {
  return (
    <>
      <div className="fixed bottom-0 right-0 w-full h-14 bg-gradient-to-r from-slate-800 from-10% via-gray-800 via-30% to-zinc-900 to-90% text-[#e1dcd8] flex items-center justify-center">
        <div
          className="flex items-center justify-center gap-10 cursor-pointer"
          onClick={onClick}
        >
          <div className="w-10 h-10 bg-white text-slate-700 flex items-center justify-center rounded-full cursor-pointe">
            <FiHome className="text-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterLang;
