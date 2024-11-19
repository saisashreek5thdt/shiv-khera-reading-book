"use client";
import Image from "next/image";
import React from "react";
import Language from "../lang/page";
import FooterLang from "@/components/FooterLang";
import { useRouter } from "next/navigation";

function Menu() {
  const router = useRouter();

  const langPageHandler = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      {/* <div className="min-h-screen bg-[#e1dcd8] menuBG">
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
            <Language />
          </div>
        </div>
      </div> */}
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
        <div className="w-2/3 overflow-y-scroll p-3">
          <div className="space-y-8">
            <Language />
          </div>
        </div>
      </div>
      <FooterLang onClick={langPageHandler} />
    </>
  );
}

export default Menu;
