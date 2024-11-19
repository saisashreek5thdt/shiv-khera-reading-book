"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function EngWinner() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/lang/eng");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/ability");
  };

  return (
    <>
      <div
        className="w-full bg-chapterBG chapterBG overflow-hidden"
        style={{
          backgroundImage: "url('/chapterBG.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-screen flex flex-col gap-4 items-center justify-center homeTextBold font-medium">
          <h1 className="text-5xl text-slate-700">Importance of Attitude</h1>
          <h1 className="text-5xl text-slate-700">Winner&apos;s Edge</h1>
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

export default EngWinner;
