/** @format */

import HeadingTitle from "../heading";

export default function AboutMe() {
  function CardUI(value: string, text: any) {
    return (
      <div className="border border-solid border-[#3f3f3f] rounded-md w-[280px] px-8 pb-7">
        <div className="text-[#ffb400] text-[60px] font-semibold relative after:content-['+'] after:text-[30px] after:absolute after:top-2 after:right-[-20px] w-fit">
          {value}
        </div>
        <div className="relative left-10 before:absolute before:content-[''] before:h-[2px] before:w-[30px] before:bg-slate-400 before:top-4 before:left-[-35px]">
          {text.top}
          <span className="block">{text.bottom}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-[1100px] m-auto">
      <div className="flex justify-center mb-5">
        <HeadingTitle />
      </div>

      <div className="flex justify-between">
        <div className="w-[40%]">
          <h3 className="text-[20px] font-semibold mb-6">PERSONAL INFOS</h3>
          <div className="flex justify-between text-[15px]">
            <div className="flex flex-col gap-6">
              <div>
                First Name: <span className="text-lg font-medium">Steve</span>
              </div>
              <div>
                Last Name: <span className="text-lg font-medium">Milner</span>
              </div>
              <div>
                Age: <span className="text-lg font-medium">27 Years</span>
              </div>
              <div>
                Nationality:{" "}
                <span className="text-lg font-medium">Tunisian</span>
              </div>
              <div>
                Freelance:
                <span className="text-lg font-medium"> Available</span>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                Address: <span className="text-lg font-medium">Steve</span>
              </div>
              <div>
                Phone: <span className="text-lg font-medium">Milner</span>
              </div>
              <div>
                Email: <span className="text-lg font-medium">27 Years</span>
              </div>
              <div>
                Skype: <span className="text-lg font-medium">Tunisian</span>
              </div>
              <div>
                Langages: <span className="text-lg font-medium">Available</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[52%]">
          {/* <CardUI value="12" text={{ top: "YEARS OF", bottom: "EXPERIENCE" }} /> */}
          <div>{CardUI("3", { top: "YEARS OF", bottom: "EXPERIENCE" })}</div>
          <div className="flex justify-end">
            {CardUI("4", { top: "COMPLETED", bottom: "PROJECTS" })}
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col relative">
          <div className="circle">
            <div className="mask full-1">
              <div className="fill-1"></div>
            </div>
            <div className="mask half">
              <div className="fill-1 rotate-[180deg]"></div>
            </div>
            <div className="inside-circle"> 85% </div>
          </div>
        </div>
      </div>
    </div>
  );
}
