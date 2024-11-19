"use client";
import { useRouter } from "next/navigation";
import React from "react";

function Language() {
  const router = useRouter();

  const lang01Handler = (e) => {
    e.preventDefault();
    router.push("/lang/eng");
  };

  const lang02Handler = (e) => {
    e.preventDefault();
    router.push("/lang/spanish");
  };

  const lang03Handler = (e) => {
    e.preventDefault();
    router.push("/lang/french");
  };

  const lang04Handler = (e) => {
    e.preventDefault();
    router.push("/lang/german");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center homeText">
        <h1 className="mt-16 text-5xl font-medium text-slate-600">
          Please Select your Language
        </h1>
        <div className="mt-16 flex flex-col gap-8 homeTextBold">
          {/* English Language 01 */}
          <h1
            className="text-6xl font-medium text-slate-700 cursor-pointer"
            onClick={lang01Handler}
          >
            English
          </h1>
          {/* spanish Language 02 */}
          <h1
            className="text-6xl font-medium text-slate-700 cursor-pointer"
            onClick={lang02Handler}
          >
            Español
          </h1>
          {/* French Language 03 */}
          <h1
            className="text-6xl font-medium text-slate-700 cursor-pointer"
            onClick={lang03Handler}
          >
            Français
          </h1>
          {/* German Language 04 */}
          <h1
            className="text-6xl font-medium text-slate-700 cursor-pointer"
            onClick={lang04Handler}
          >
            Deutsch
          </h1>
        </div>
      </div>
    </>
  );
}

export default Language;
