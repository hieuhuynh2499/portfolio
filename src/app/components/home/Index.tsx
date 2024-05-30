/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

import { Arrow } from "@/app/icons/arrow";

/** @format */

export default function HomeComponent() {
  return (
    <div className="flex min-h-screen p-12 bg-black">
      <div className="flex w-screen">
        <div className="h-full w-[600px] bg-slate-500"></div>
        <div className="flex justify-center items-center grow">
          <div className="max-w-[550px]">
            <h1 className="text-[#ffb400] text-[55px] font-bold mb-5">
              I am web developer
            </h1>
            <p className="text-white mb-8 font-medium">
              I am a Tunisian based web designer & front‑end developer focused
              on crafting clean & user‑friendly experiences, I am passionate
              about building excellent software that improves the lives of those
              around me.
            </p>
            <div className="text-white border border-solid border-[#ffb400] py-3 px-12 rounded-full w-[250px] relative font-semibold uppercase group cursor-pointer">
              <span className="z-10 relative">more about me</span>
              <div className="bg-[#ffb400] h-[46px] w-[46px] absolute top-[1px] right-[1px] rounded-full group-hover:w-[246px] transition-all ease-in-out delay-100"></div>
              <div className="absolute top-[14px] right-[12px]">
                <Arrow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
