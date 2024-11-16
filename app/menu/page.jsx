import Image from "next/image";
import React from "react";
import Language from "../lang/page";

function Menu() {
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
            <Language />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;