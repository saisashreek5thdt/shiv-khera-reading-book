"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timerTxt = setTimeout(() => {
      setShowText(true);
    }, 1000); // Delay animation
    return () => clearTimeout(timerTxt);
  }, []);

  useEffect(() => {
    // Display the button after 15 seconds
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 8000);

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
        <div
          className={`${
            showText ? "bottomTop" : "opacity-0"
          } transition-transform duration-1000 text-center`}
        >
          <h1 className="headingText text-[7rem] text-slate-200 font-medium">
            YOU CAN
          </h1>
          <h1 className="headingText text-[10rem] text-slate-200 font-medium">
            WIN
          </h1>
          <p className="homeText text-5xl text-slate-200 font-medium">
            Winners don&apos;t do different things,
          </p>
          <p className="homeText text-5xl text-slate-200 font-medium">
            they do things differently
          </p>
        </div>
        <div
            className={`${ showButton ? "slideIn" : "opacity-0"} mt-5 homeText w-48 h-12 flex items-center justify-center text-3xl bg-slate-500 text-slate-50 font-medium headingText rounded-lg hover:shadow-lg cursor-pointer`}
            onClick={btnHandler}
          >
            GET IN
          </div>
      </div>
    </>
  );
}
