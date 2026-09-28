import { PrimaryMenu } from "@/sections/SiteHeader/components/PrimaryMenu";
import { SiteLogo } from "@/sections/SiteHeader/components/SiteLogo";
import { SecondaryMenu } from "@/sections/SiteHeader/components/SecondaryMenu";

export const DesktopNavigation = () => {
  return (
    <div className="bg-white box-border caret-transparent hidden md:block text-[14.592px] leading-[43.776px] outline-none relative no-underline z-[90] mx-auto md:text-base md:leading-[29.7143px]">
      <div className="content-center box-border caret-transparent grid text-[14.592px] h-[106px] leading-[43.776px] max-w-full min-h-[72px] outline-none no-underline mx-auto px-5 md:text-base md:leading-[29.7143px] md:max-w-[1240px] md:min-h-[85px]">
        <div className="items-center box-border caret-transparent gap-x-5 grid text-[14.592px] grid-cols-[1fr_auto_1fr] leading-[43.776px] min-h-0 min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto]">
          <div className="items-center box-border caret-transparent flex text-[14.592px] h-full leading-[43.776px] min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent flex grow flex-wrap text-[14.592px] h-full justify-end leading-[43.776px] min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-w-[auto]">
              <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] min-h-0 min-w-0 outline-none no-underline w-full md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] md:w-auto">
                <div className="box-border caret-transparent grow text-[14.592px] leading-[43.776px] min-h-0 min-w-0 order-4 outline-none no-underline w-full ml-auto md:grow-0 md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] md:order-none md:w-auto">
                  <div className="box-border caret-transparent grow text-[14.592px] h-full leading-[43.776px] min-w-max outline-none no-underline w-full md:grow-0 md:text-base md:leading-[29.7143px] md:w-auto">
                    <PrimaryMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex text-[14.592px] h-full justify-center leading-[43.776px] min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] min-h-0 min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto]">
              <SiteLogo />
            </div>
          </div>
          <div className="items-center box-border caret-transparent flex text-[14.592px] h-full justify-end leading-[43.776px] min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-w-[auto]">
            <div className="items-center box-border caret-transparent flex grow flex-wrap text-[14.592px] h-full justify-start leading-[43.776px] min-w-0 outline-none no-underline md:text-base md:leading-[29.7143px] md:min-w-[auto]">
              <div className="items-center box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] min-h-0 min-w-0 outline-none no-underline w-full md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] md:w-auto">
                <div className="box-border caret-transparent grow text-[14.592px] leading-[43.776px] min-h-0 min-w-0 order-4 outline-none no-underline w-full ml-auto md:grow-0 md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] md:order-none md:w-auto">
                  <div className="box-border caret-transparent grow text-[14.592px] h-full leading-[43.776px] min-w-max outline-none no-underline w-full md:grow-0 md:text-base md:leading-[29.7143px] md:w-auto">
                    <SecondaryMenu />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
