"use client";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function EngVideo() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/eng/ability");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/lang/eng");
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-chapterBG">
        <VideoPlayer src={`/Demo.mp4`} />
      </div>
      <FooterMain
        onPrev={prevPageHandler}
        onClick={langIconHandler}
        onNext={nextPageHandler}
      />
    </>
  );
}

export default EngVideo;
