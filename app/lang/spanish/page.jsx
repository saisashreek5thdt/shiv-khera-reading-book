"use client";
import Chapters from "@/components/Chapters";
import FooterMain from "@/components/FooterMain";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function SpanishMenu() {
  const router = useRouter();

  const langIconHandler = (e) => {
    e.preventDefault();
    router.push("/menu");
  };

  const chapterOneHandler = (e) => {
    e.preventDefault();
    router.push("/pages/spanish/winner");
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
              chapterNum={`Capítulo 1`}
              chapterTitle={`Importancia de la Actitud`}
              chapterDesc="Ventaja de los Ganadores"
              bgGrad="bg-gradient-to-r from-teal-500 from-10% via-emerald-500 via-30% to-slate-50 to-90%"
              onChapterSelct={chapterOneHandler}
            />
            <Chapters
              chapterNum={`Capítulo 2`}
              chapterTitle={`Construye una actitud positiva`}
              chapterDesc="Llegar a tu destino"
              bgGrad="bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-slate-50 to-90%"
              onChapterSelct={() => {}}
            />
            <Chapters
              chapterNum={`Capítulo 3`}
              chapterTitle={`Éxito`}
              chapterDesc="Estrategias Ganadoras"
              bgGrad="bg-gradient-to-r from-indigo-500 from-10% via-fuchsia-500 via-30% to-slate-50 to-90%"
              onChapterSelct={() => {}}
            />
            <Chapters
              chapterNum={`Capítulo 4`}
              chapterTitle={`Atributos de Éxito`}
              chapterDesc="Camino de Éxito"
            />
          </div>
        </div>
      </div>
      <FooterMain onClick={langIconHandler} />
    </>
  );
}

export default SpanishMenu;
