"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";
import "../../../animation.css";

function EngAbility() {
  const [showText1, setShowText1] = useState(false);

  const [showText2, setShowText2] = useState(false);

  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText1(true);
    }, 1000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText2(true);
    }, 9000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText3(true);
    }, 17000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

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
      <div
        className="w-full bg-chapterBG chapterBG"
        style={{
          backgroundImage: "url('/chapterBG.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-screen flex flex-col gap-4 items-center justify-center homeTextBold font-medium">
          <h1
            className={`${
              showText1 ? "textType3" : "opacity-0"
            } transition-transform duration-1000 text-center text-5xl text-slate-700`}
          >
            Ability teaches us how we do,
          </h1>
          <h1
            className={`${
              showText2 ? "textType4" : "opacity-0"
            } transition-transform duration-1000 text-center text-5xl text-slate-700`}
          >
            motivation determines why we do,
          </h1>
          <h1
            className={`${
              showText3 ? "textType5" : "opacity-0"
            } transition-transform duration-1000 text-center text-5xl text-slate-700`}
          >
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
