import { SiteHeader } from "@/sections/SiteHeader";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="accent-auto bg-slate-50 box-border caret-transparent text-neutral-700 block text-[14.592px] not-italic normal-nums font-normal tracking-[normal] leading-[27.0994px] list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto relative text-start no-underline indent-[0px] normal-case visible border-separate font-poppins md:text-base md:leading-[29.7143px]">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] relative no-underline md:text-base md:leading-[29.7143px]">
        <SiteHeader />
        <MainContent />
        <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:text-base md:leading-[29.7143px]"></div>
        <Footer />
      </div>
    </body>
  );
};
