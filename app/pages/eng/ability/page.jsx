"use client";
import React from "react";
import { useRouter } from "next/navigation";

function EngAbility() {

  const router = useRouter();

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/video");
  };

  return (
    <>
      <div className="w-full chapterBG">
        <div className="h-screen flex flex-col gap-4 items-center justify-center homeTextBold font-medium">
          <h1 className="text-5xl text-slate-700">
            Ability teaches us how we do,
          </h1>
          <h1 className="text-5xl text-slate-700">
            motivation determines why we do,
          </h1>
          <h1 className="text-5xl text-slate-700">
            and attitude decides how well we do.
          </h1>
          <h1 className="pt-10 text-5xl text-slate-600 homeText font-medium cursor-pointer" onClick={nextPageHandler}>Next</h1>
        </div>
      </div>
    </>
  );
}

export default EngAbility;