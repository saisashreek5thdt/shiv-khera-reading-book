"use client";
import React from "react";
import { useRouter } from "next/navigation";

function EngWinner() {

  const router = useRouter();

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/ability");
  };

  return (
    <>
      <div className="w-full chapterBG overflow-hidden">
        <div className="h-screen flex flex-col gap-4 items-center justify-center homeTextBold font-medium">
          <h1 className="text-5xl text-slate-700">Importance of Attitude</h1>
          <h1 className="text-5xl text-slate-700">Winner&apos;s Edge</h1>
          <h1 className="pt-10 text-5xl text-slate-600 homeText font-medium cursor-pointer" onClick={nextPageHandler}>Next</h1>
        </div>        
      </div>
    </>
  );
}

export default EngWinner;
