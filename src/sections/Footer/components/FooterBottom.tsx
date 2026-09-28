import { Copyright } from "@/sections/Footer/components/Copyright";
import { SocialLinks } from "@/sections/Footer/components/SocialLinks";

export const FooterBottom = () => {
  return (
    <div className="content-center box-border caret-transparent grid text-[14.592px] leading-[27.0994px] min-h-20 outline-[3px] no-underline w-full p-6 md:text-base md:leading-[29.7143px] md:pt-5 md:pb-10 md:px-0">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
        <div className="items-start box-border caret-transparent gap-x-[50px] grid text-[14.592px] grid-cols-[1fr] leading-[27.0994px] max-w-[1200px] min-h-20 outline-[3px] no-underline mx-auto md:text-base md:grid-cols-[repeat(2,1fr)] md:leading-[29.7143px]">
          <div className="items-start box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:mb-0">
            <div className="items-center box-border caret-transparent text-zinc-500 flex flex-wrap text-[12.768px] leading-[23.712px] outline-[3px] text-center no-underline w-full md:text-sm md:leading-[26px] md:text-left">
              <div className="box-border caret-transparent text-[12.768px] leading-[23.712px] min-h-[auto] min-w-[auto] outline-[3px] text-center no-underline w-full md:text-sm md:leading-[26px] md:text-left">
                <Copyright />
              </div>
            </div>
          </div>
          <div className="items-start box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:mb-0">
            <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] no-underline w-full md:text-base md:leading-[29.7143px]">
              <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:text-base md:leading-[29.7143px]">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
