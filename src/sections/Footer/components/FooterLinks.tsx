import { FooterNavigation } from "@/sections/Footer/components/FooterNavigation";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";

export const FooterLinks = () => {
  return (
    <div className="content-center box-border caret-transparent grid text-[14.592px] leading-[27.0994px] outline-[3px] no-underline w-full p-[13px] md:text-base md:leading-[29.7143px]">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
        <div className="items-center box-border caret-transparent gap-x-[50px] grid text-[14.592px] grid-cols-[1fr] leading-[27.0994px] max-w-[1200px] outline-[3px] no-underline mx-auto md:text-base md:grid-cols-[repeat(3,1fr)] md:leading-[29.7143px]">
          <div className="items-center box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:mb-0">
            <FooterNavigation
              variant="widget1"
              ariaLabel="Footer Widget 1"
              mandatoryDisclosureHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/03/Mandatory-Disclosure-NBNSSOE-2025-26.pdf"
              mandatoryDisclosureText="Mandatory Disclosure"
              disclaimerHref="#"
              disclaimerText="Disclaimer"
              alumniHref="#"
              alumniText="Alumni"
              grievanceHref="#"
              grievanceText="Grievance"
              logoUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/site-logo.svg"
              placementsHref=""
              placementsText=""
              libraryHref=""
              libraryText=""
              careersHref=""
              careersText=""
              mailLoginHref=""
              mailLoginText=""
              addressLineOne=""
              addressLineTwo=""
            />
          </div>
          <div className="items-center box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:mb-0">
            <FooterLogo />
          </div>
          <div className="items-center box-border caret-transparent text-[14.592px] justify-center leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] no-underline mb-2.5 md:text-base md:leading-[29.7143px] md:mb-0">
            <FooterNavigation
              variant="widget3"
              ariaLabel="Footer Widget 3"
              mandatoryDisclosureHref=""
              mandatoryDisclosureText=""
              disclaimerHref=""
              disclaimerText=""
              alumniHref=""
              alumniText=""
              grievanceHref=""
              grievanceText=""
              logoUrl=""
              placementsHref="http://placements.sinhgad.edu/"
              placementsText="Placements"
              libraryHref="http://library.sinhgad.edu/"
              libraryText="Library"
              careersHref="mailto://hr@sinhgad.edu"
              careersText="Careers"
              mailLoginHref="http://mail.sinhgad.edu/"
              mailLoginText="Mail Login"
              addressLineOne="NBN Sinhgad Technical Institute's Campus. , Ambegaon (Bk.), Off. Sinhgad Rd.,"
              addressLineTwo="Pune – 411041"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
