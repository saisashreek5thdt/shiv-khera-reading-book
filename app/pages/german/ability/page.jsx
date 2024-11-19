"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function GermanAbility() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/german/winner");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/german/video");
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
            Fähigkeit lehrt uns, wie wir es tun.
          </h1>
          <h1 className="text-5xl text-slate-700">
            Motivation bestimmt, warum wir handeln.
          </h1>
          <h1 className="text-5xl text-slate-700">
            und die Einstellung entscheidet, wie gut wir abschneiden.
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

export default GermanAbility;
