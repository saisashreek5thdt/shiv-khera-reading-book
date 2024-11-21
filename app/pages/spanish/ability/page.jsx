"use client";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function SpanishAbility() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/spanish/winner");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/spanish/video");
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
            La habilidad nos enseña cómo lo hacemos,
          </h1>
          <h1 className="text-5xl text-slate-700">
            la motivación determina por qué hacemos,
          </h1>
          <h1 className="text-5xl text-slate-700">
            y la actitud decide qué tan bien lo hacemos.
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

export default SpanishAbility;