import { AnnouncementBar } from "@/sections/SiteHeader/components/AnnouncementBar";
import { DesktopNavigation } from "@/sections/SiteHeader/components/DesktopNavigation";
import { MobileNavigation } from "@/sections/SiteHeader/components/MobileNavigation";

export const SiteHeader = () => {
  return (
    <header className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-none relative no-underline z-[99] md:text-base md:leading-[29.7143px]">
      <AnnouncementBar />
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
};
