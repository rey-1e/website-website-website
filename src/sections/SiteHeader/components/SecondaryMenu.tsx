import { NavigationMenuItem } from "@/components/navigation/NavigationMenuItem";
import { DropdownItem } from "@/sections/SiteHeader/components/DropdownItem";

export const SecondaryMenu = () => {
  return (
    <nav
      aria-label="Secondary Site Navigation"
      className="box-border caret-transparent grow text-[14.592px] h-full leading-[43.776px] outline-none no-underline md:text-base md:leading-[29.7143px]"
    >
      <div className="content-center items-center box-border caret-transparent block flex-wrap text-[14.592px] h-full leading-[43.776px] outline-none no-underline w-full md:inline-flex md:text-base md:leading-[29.7143px] md:w-auto">
        <ul className="self-center bg-stone-50 md:bg-transparent box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] list-none min-h-0 min-w-0 relative no-underline pl-0 md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] m-0">
          <NavigationMenuItem
            href="#"
            label="Academics"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/institute-feedback-2/"
                  label="Institute Feedback"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-academic-calender/"
                  label="Academic Calendar"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-teaching-learning-practices/"
                  label="Teaching Learning Practices"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/research/"
                  label="Research"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/industry-interaction/"
                  label="Industry Interaction"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-events/"
                  label="Events"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-library/"
                  label="Library"
                  hasSubmenu={true}
                  submenu={
                    <DropdownItem
                      href="https://drive.google.com/drive/folders/18ruVonNdPEVk-LeUhbFKB_D5_nR47FN4?usp=drive_link"
                      label="Question Paper"
                    />
                  }
                />
              </>
            }
          />

          <NavigationMenuItem
            href="#"
            label="Addendum"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/details-ssc-computer-it-club/"
                  label="Infrastructure"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/placements-nbnstic/"
                  label="Training & Placements"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/Best-Practices_20221105_0001.pdf"
                  label="Curricular Activities"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/details-committees/"
                  label="Committees"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/grievances-redressal/"
                  label="Grievances Redressal"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/electoral-literacy-club/"
                  label="Electoral Literacy Club"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/02/Institutional_preparedness_for_NEP.pdf"
                  label="Institutional preparedness for NEP"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/RTI-Act-2005.pdf"
                  label="RTI Act 2005"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/institute-social-responsibility/"
                  label="Institute Social Responsibility"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/details-faqs/"
                  label="FAQ"
                />
              </>
            }
          />

          <NavigationMenuItem
            href="#"
            label="AFFL. & ACRED"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/iqac-2/"
                  label="IQAC"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/aqar-2/"
                  label="AQAR"
                />
                <DropdownItem
                  href="http://www.unipune.ac.in/"
                  label="SPPU"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/aicte/"
                  label="AICTE"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/nirf/"
                  label="NIRF"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/aishe-certificate/"
                  label="AISHE Certificate"
                />
                <DropdownItem
                  href="#"
                  label="NAAC"
                  hasSubmenu={true}
                  submenu={
                    <>
                      <DropdownItem
                        href="#"
                        label="Cycle 2"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/09/NAAC-Certificate_cycle2.pdf"
                              label="NAAC Certificate"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/04/SSR_-Cycle-2.pdf"
                              label="SSR"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/STUDENTS-SATISFACTION-SURVEY_2021-22_SEM-II_RESPONSES.pdf"
                              label="Student Satisfaction Survey (SSS)"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/06/NAAC-Peer-Team-Visit-Photos.pdf"
                              label="NAAC Peer Team Visit Photos"
                            />
                          </>
                        }
                      />
                      <DropdownItem
                        href="#"
                        label="Cycle 1"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/06/NAAC-Certificate.pdf"
                              label="Certificate"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2023/06/NAAC_SSR_Cycle-1_NBNSTIC.pdf"
                              label="NAAC SSR"
                            />
                          </>
                        }
                      />
                    </>
                  }
                />
              </>
            }
          />
        </ul>
      </div>
    </nav>
  );
};
