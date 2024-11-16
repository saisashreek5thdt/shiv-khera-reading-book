"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const btnHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-slate-800 from-10% via-gray-800 via-30% to-zinc-900 to-90% flex flex-col items-center justify-center">
        <h1 className="headingText text-[7rem] text-slate-200 font-medium">
          YOU CAN
        </h1>
        <h1 className="headingText text-[8rem] text-slate-200 font-medium">
          WIN
        </h1>
        <p className="homeText text-5xl text-justify text-slate-200 font-medium">
          Winners don&apos;t do different things,
        </p>
        <p className="homeText text-5xl text-justify text-slate-200 font-medium">
          they do things differently
        </p>
        <div
          className="mt-5 w-48 h-12 flex items-center justify-center text-3xl bg-slate-500 text-slate-50 font-medium headingText rounded-lg hover:shadow-lg cursor-pointer"
          onClick={btnHandler}
        >
          GET IN
        </div>
      </div>
    </>
  );
}
