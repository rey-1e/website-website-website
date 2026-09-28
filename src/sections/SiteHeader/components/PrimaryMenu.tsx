import { NavigationMenuItem } from "@/components/navigation/NavigationMenuItem";
import { DropdownItem } from "@/sections/SiteHeader/components/DropdownItem";

export const PrimaryMenu = () => {
  return (
    <nav
      aria-label="Primary Site Navigation"
      className="box-border caret-transparent grow text-[14.592px] h-full leading-[43.776px] outline-none no-underline md:text-base md:leading-[29.7143px]"
    >
      <div className="content-center items-center box-border caret-transparent block flex-wrap text-[14.592px] h-full leading-[43.776px] outline-none no-underline w-full md:inline-flex md:text-base md:leading-[29.7143px] md:w-auto">
        <ul className="self-center bg-stone-50 md:bg-transparent box-border caret-transparent flex flex-wrap text-[14.592px] leading-[43.776px] list-none min-h-0 min-w-0 relative no-underline pl-0 md:text-base md:leading-[29.7143px] md:min-h-[auto] md:min-w-[auto] m-0">
          <NavigationMenuItem
            href="http://nbnstic.sinhgad.edu/"
            label="Home"
            linkVariantClass="text-violet-950 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/about-us/"
                  label="About Us"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/contact-us/"
                  label="Contact Us"
                />
              </>
            }
          />

          <NavigationMenuItem
            href="http://nbnstic.sinhgad.edu/principals-desk/"
            label="Principal’s Desk"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={false}
          />

          <NavigationMenuItem
            href="http://nbnstic.sinhgad.edu/admissions/"
            label="Admissions"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-intake/"
                  label="Intake"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/academics-fee-structure/"
                  label="Fee Structure"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/admission-procedure-2/"
                  label="Admission Procedure"
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/required-documents-2/"
                  label="Required Documents"
                />
              </>
            }
          />

          <NavigationMenuItem
            href="#"
            label="School"
            linkVariantClass="text-zinc-800 font-normal"
            hasSubmenu={true}
            submenu={
              <>
                <DropdownItem
                  href="#"
                  label="Engineering"
                  hasSubmenu={true}
                  submenu={
                    <>
                      <DropdownItem
                        href="#"
                        label="Engineering Sciences-FE"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/engineering-sciences-fe-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/First-Year-Engineering-2019-Patt.Syllabus_05.072019-1.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                      <DropdownItem
                        href="#"
                        label="Mechanical Engineering"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/mech-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/Mechanical-Engineering-Structure-Syllabus.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                      <DropdownItem
                        href="#"
                        label="Computer Engineering"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/comp-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/Computer-Engineering-Structure-Syllabus.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                      <DropdownItem
                        href="#"
                        label="Electrical Engineering"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/electrical-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/Electrical-Engineering-Structure-Syllabus.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                      <DropdownItem
                        href="#"
                        label="Electronics & Telecommunication"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/entc-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/Electronics-Telecommunication-Structure-Syllabus.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                    </>
                  }
                />
                <DropdownItem
                  href="#"
                  label="Management"
                  hasSubmenu={true}
                  submenu={
                    <>
                      <DropdownItem
                        href="#"
                        label="MBA"
                        hasSubmenu={true}
                        submenu={
                          <>
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/mba-faculty/"
                              label="Faculty"
                            />
                            <DropdownItem
                              href="http://nbnstic.sinhgad.edu/wp-content/uploads/2022/11/MBA-Revised-Syllabus-2019-Pattern.pdf"
                              label="Syllabus"
                            />
                          </>
                        }
                      />
                    </>
                  }
                />
                <DropdownItem
                  href="http://nbnstic.sinhgad.edu/non-teaching-staff/"
                  label="Non-Teaching Staff Members"
                />
              </>
            }
          />
        </ul>
      </div>
    </nav>
  );
};
