import { HomePage } from "@/sections/HomePage";

export const MainContent = () => {
  return (
    <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
      <div className="box-border caret-transparent block flex-col text-[14.592px] leading-[27.0994px] max-w-full outline-[3px] no-underline mx-auto px-5 md:flex md:flex-row md:text-base md:leading-[29.7143px] md:max-w-[1240px]">
        <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-0 min-w-0 outline-[3px] no-underline w-full md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto]">
          <main className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline w-[90%] m-auto md:text-base md:leading-[29.7143px]">
            <HomePage />
          </main>
        </div>
      </div>
    </div>
  );
};
