"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Chapters from "@/components/Chapters";
import FooterMain from "@/components/FooterMain";

function FrenchMenu() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const chapterOneHandler = (e) => {
    e.preventDefault();
    router.push("/pages/french/winner");
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
              chapterNum={`Chapitre 1`}
              chapterTitle={`Importance de l'attitude`}
              chapterDesc="L'Avantage des Gagnants"
              bgGrad="bg-gradient-to-r from-teal-500 from-10% via-emerald-500 via-30% to-slate-50 to-90%"
              onChapterSelct={chapterOneHandler}
            />
            <Chapters
              chapterNum={`Chapitre 2`}
              chapterTitle={`Construire une attitude positive`}
              chapterDesc="Atteindre votre destination"
              bgGrad="bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-slate-50 to-90%"
              onChapterSelct={() => {}}
            />
            <Chapters
              chapterNum={`Chapitre 3`}
              chapterTitle={`Succès`}
              chapterDesc="Stratégies gagnantes"
              bgGrad="bg-gradient-to-r from-indigo-500 from-10% via-fuchsia-500 via-30% to-slate-50 to-90%"
              onChapterSelct={() => {}}
            />
            <Chapters
              chapterNum={`Chapitre 4`}
              chapterTitle={`Attributs du succès`}
              chapterDesc="Chemin du succès"
            />
          </div>
        </div>
      </div>
      <FooterMain onClick={langIconHandler} />
    </>
  );
}

export default FrenchMenu;
