"use client";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";
import { useRouter } from "next/navigation";

function EngVideo() {
  const router = useRouter();

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center chapterBG">
        <VideoPlayer src={`/Demo.mp4`} />
        <h1
          className="pt-10 text-5xl text-slate-600 homeText font-medium cursor-pointer"
          onClick={nextPageHandler}
        >
          Menu
        </h1>
      </div>
    </>
  );
}

export default EngVideo;
