import { MobileLogo } from "@/sections/SiteHeader/components/MobileLogo";
import { MobileMenuToggle } from "@/sections/SiteHeader/components/MobileMenuToggle";

export const MobileNavigation = () => {
  return (
    <div className="box-border caret-transparent block text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:hidden md:text-base md:leading-[29.7143px]">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] relative no-underline md:text-base md:leading-[29.7143px]">
        <div className="bg-white box-border caret-transparent grid text-[14.592px] leading-[43.776px] min-h-[72px] outline-[3px] relative no-underline z-[4] mx-auto px-5 md:block md:text-base md:leading-[29.7143px] md:min-h-[85px] md:px-0">
          <div className="items-center box-border caret-transparent gap-x-5 grid text-[14.592px] grid-cols-[auto_auto] leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-h-0 md:min-w-0">
            <div className="items-center box-border caret-transparent flex text-[14.592px] h-full leading-[43.776px] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-w-0">
              <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-h-0 md:min-w-0">
                <MobileLogo />
              </div>
            </div>
            <div className="items-center box-border caret-transparent flex text-[14.592px] h-full justify-end leading-[43.776px] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-w-0">
              <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-h-0 md:min-w-0">
                <div className="box-border caret-transparent text-[14.592px] leading-[43.776px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px] md:min-h-0 md:min-w-0">
                  <MobileMenuToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
