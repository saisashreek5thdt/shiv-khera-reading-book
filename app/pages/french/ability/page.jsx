"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function FrenchAbility() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/french/winner");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/french/video");
  };

  return (
    <>
      <div
        className="w-full bg-chapterBG chapterBG"
        style={{
          backgroundImage: "url('/chapterBG.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-screen flex flex-col gap-4 items-center justify-center homeTextBold font-medium">
          <h1 className="text-5xl text-slate-700">
            La capacité nous apprend comment nous agissons,
          </h1>
          <h1 className="text-5xl text-slate-700">
            la motivation détermine pourquoi nous agissons,
          </h1>
          <h1 className="text-5xl text-slate-700">
            et l&apos;attitude détermine notre réussite.
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

export default FrenchAbility;
