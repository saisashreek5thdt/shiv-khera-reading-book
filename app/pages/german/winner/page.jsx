"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function GermanWinner() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/lang/german");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/german/ability");
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
          <h1 className="text-5xl text-slate-700">Bedeutung der Einstellung</h1>
          <h1 className="text-5xl text-slate-700">Vorteil der Gewinner</h1>
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

export default GermanWinner;
