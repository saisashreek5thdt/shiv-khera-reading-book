"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Chapters from "@/components/Chapters";

function EngMenu() {

  const router = useRouter();

  const chapterOneHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/winner");
  }

  return (
    <>
      <div className="min-h-screen bg-[#e1dcd8] menuBG">
        <div className="grid grid-cols-1 gap-4 sm:order-2 lg:grid-cols-5 lg:gap-2">
          <div className="h-screen rounded-lg lg:col-span-2">
            <Image
              src={"/menuImg.png"}
              alt="Menu Picture"
              width={1600}
              height={300}
            />
          </div>
          <div className="h-screen rounded-lg sm:order-1 lg:col-span-3">
            <div className="mt-8 mx-16 flex flex-col gap-8 items-start justify-center">
              <Chapters
                chapterNum={`Chapter 1`}
                chapterTitle={`Importance of Attitude`}
                chapterDesc="Winner&apos;s Edge"
                bgGrad="bg-gradient-to-r from-teal-500 from-10% via-emerald-500 via-30% to-slate-50 to-90%"
                onChapterSelct={chapterOneHandler}
              />
              <Chapters
                chapterNum={`Chapter 2`}
                chapterTitle={`Build a Positive Attitude`}
                chapterDesc="Reaching your Destination"
                bgGrad="bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-slate-50 to-90%"
                onChapterSelct={() => {}}
              />
              <Chapters
                chapterNum={`Chapter 3`}
                chapterTitle={`Success`}
                chapterDesc="Winning strategies"
                bgGrad="bg-gradient-to-r from-indigo-500 from-10% via-fuchsia-500 via-30% to-slate-50 to-90%"
                onChapterSelct={() => {}}
              />
              <Chapters
                chapterNum={`Chapter 4`}
                chapterTitle={`Attributes of Success`}
                chapterDesc="Path of success"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EngMenu;
