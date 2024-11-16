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
  };

  return (
    <>
      <div className="bg-[#e1dcd8] menuBG h-screen flex">
        {/* Fixed Image Component */}
        <div className="w-1/3 relative">
          <div className="fixed top-0 left-0 w-1/3 h-screen">
            <Image
              src={"/menuImg.png"} // Replace with your image path
              alt="Fixed Example"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/* Scrollable Content Component */}
        <div className="w-2/3 overflow-y-scroll p-6">
          <div className="space-y-8">
            <Chapters
              chapterNum={`Chapter 1`}
              chapterTitle={`Importance of Attitude`}
              chapterDesc="Winner's Edge"
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
              chapterDesc="Winning Strategies"
              bgGrad="bg-gradient-to-r from-indigo-500 from-10% via-fuchsia-500 via-30% to-slate-50 to-90%"
              onChapterSelct={() => {}}
            />
            <Chapters
              chapterNum={`Chapter 4`}
              chapterTitle={`Attributes of Success`}
              chapterDesc="Path of Success"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EngMenu;
