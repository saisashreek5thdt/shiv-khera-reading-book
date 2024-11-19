"use client";
import VideoPlayer from "@/components/VideoPlayer";
import React from "react";
import { useRouter } from "next/navigation";
import FooterMain from "@/components/FooterMain";

function FrenchVideo() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const prevPageHandler = (e) => {
    e.preventDefault();
    router.push("/pages/french/ability");
  };

  const nextPageHandler = (e) => {
    e.preventDefault();
    router.push("/lang/french");
  };

  return (
    <>
      <div
        className="w-full h-screen flex items-center justify-center bg-chapterBG chapterBG"
        style={{
          backgroundImage: "url('/chapterBG.png')",
          backgroundRepeat: "no-repeat",
        }}
      >
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

export default FrenchVideo;
