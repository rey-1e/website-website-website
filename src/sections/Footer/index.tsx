import { FooterLinks } from "@/sections/Footer/components/FooterLinks";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="bg-slate-50 box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
      <div className="content-center box-border caret-transparent hidden text-[14.592px] leading-[27.0994px] min-h-10 outline-[3px] no-underline w-full px-5 py-10 md:grid md:text-base md:leading-[29.7143px] md:pt-12 md:pb-[100px] md:px-12">
        <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-0 min-w-0 outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto]">
          <div className="items-start box-border caret-transparent gap-x-0 grid text-[14.592px] grid-cols-[1fr] leading-[27.0994px] max-w-[1200px] min-h-10 outline-[3px] no-underline mx-auto md:text-base md:leading-[29.7143px]">
            <div className="items-start box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-0 min-w-0 outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] md:mb-0">
              <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline w-full md:text-base md:leading-[29.7143px]">
                <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
                  <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] text-center no-underline md:text-base md:leading-[29.7143px]">
                    <div className="bg-indigo-950 box-border caret-transparent text-[14.592px] h-[100px] leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] no-underline w-screen md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterLinks />
      <FooterBottom />
    </footer>
  );
};
