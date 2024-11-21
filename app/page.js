"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import "./animationWelcome.css";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const [showText, setShowText] = useState(false);

  const [showText1, setShowText1] = useState(false);

  const [showText2, setShowText2] = useState(false);

  const [showText3, setShowText3] = useState(false);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText(true);
    }, 1000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText1(true);
    }, 9000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText2(true);
    }, 18000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText3(true);
    }, 25000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    // Display the button after 15 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 40000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter();

  const btnHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-800 from-10% via-gray-800 via-30% to-zinc-900 to-90% flex flex-col items-center justify-center">
        <div>
          <div
            className={`flex flex-col items-center justify-center leading-snug text-center`}
          >
            <h1
              className={`${
                showText ? "textType1" : "opacity-0"
              } headingText text-[7.2rem] text-slate-200 font-medium text-center`}
            >
              YOU CAN
            </h1>
            <h1
              className={`${
                showText1 ? "textType2" : "opacity-0"
              } headingText text-[15rem] text-slate-200 font-medium`}
            >
              WIN
            </h1>
          </div>
          <div
            className={`flex flex-col items-center justify-center leading-snug text-center`}
          >
            <p className={`${
                showText2 ? "textType3" : "opacity-0"
              } homeText text-5xl text-slate-200 font-medium`}>
              Winners don&apos;t do different things,
            </p>
            <p className={`${
                showText3 ? "textType4" : "opacity-0"
              } homeText text-5xl text-slate-200 font-medium`}>
              they do things differently
            </p>
          </div>
        </div>
        <div
          className={`${
            showButton ? "slideIn" : "opacity-0"
          } mt-5 homeText w-48 h-12 flex items-center justify-center text-3xl bg-slate-500 text-slate-50 font-medium headingText rounded-lg hover:shadow-lg cursor-pointer`}
          onClick={btnHandler}
        >
          GET IN
        </div>
      </div>
    </>
  );
}
