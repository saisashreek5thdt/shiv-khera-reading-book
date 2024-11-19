"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function EngAbility() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/winner");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/video");
  };

  return (
    <>
      <div className="w-full bg-chapterBG">
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
        </div>
      </div>
      <FooterMain
        onPrev={prevPageHandler}
        onClick={langIconHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default EngAbility;
