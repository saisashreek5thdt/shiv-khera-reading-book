"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function SpanishWinner() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/lang/spanish");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/spanish/ability");
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
          <h1 className="text-5xl text-slate-700">Importancia de la Actitud</h1>
          <h1 className="text-5xl text-slate-700">Ventaja de los Ganadores</h1>
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

export default SpanishWinner;
