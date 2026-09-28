import { Hero } from "@/sections/HomePage/components/Hero";
import { AdmissionsSection } from "@/sections/HomePage/components/AdmissionsSection";
import { LatestNewsSection } from "@/sections/HomePage/components/LatestNewsSection";
import { LearningSection } from "@/sections/HomePage/components/LearningSection";
import { CurriculumSection } from "@/sections/HomePage/components/CurriculumSection";

export const HomePage = () => {
  return (
    <article className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] no-underline md:text-base md:leading-[29.7143px]">
      <header className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-left no-underline md:text-base md:leading-[29.7143px]"></header>
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px] after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-neutral-700 after:table after:text-[14.592px] after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-[27.0994px] after:list-outside after:list-disc after:outline-[3px] after:break-words after:pointer-events-auto after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-poppins after:md:text-base after:md:leading-[29.7143px]">
        <Hero />
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:my-0">
          <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
            <div className="items-center bg-indigo-950 box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] justify-center leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] break-words gap-y-6 no-underline w-screen p-5 md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl">
              <div className="box-border caret-transparent text-[10px] leading-[18.5714px] min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline">
                <a
                  href="http://nbnstic.sinhgad.edu/contact-us/"
                  className="bg-white box-border caret-transparent text-white inline-block font-bold leading-[10px] outline-[3px] break-words text-center no-underline px-[13.33px] py-[6.67px] rounded-sm border-2 border-solid border-white font-ubuntu"
                >
                  CONTACT US
                </a>
              </div>
            </div>
          </div>
        </div>
        <AdmissionsSection
          contentType="heading"
          headingText="Admissions 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/NBNSTIC-Against-CAP-Vacancy-Round-Admission-Process-Handbook-2026-27.pdf"
          linkText="Against CAP Vacancy Round Admission Process Handbook 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/FE-Against-CAP-General-Merit-List-AY-2026-27.pdf"
          linkText="FE Against CAP General Merit List AY 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/FE-Institute-Level-General-Merit-List-AY-2026-27.pdf"
          linkText="FE Institute Level General Merit List AY 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/Direct-Second-Year-Against-CAP-Genereal-Merit-List-AY-2026-27.pdf"
          linkText="Direct Second Year Against CAP General Merit List AY 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/FE-Against-CAP-Vacancy-Round-Admission-Notification-2026-27.pdf"
          linkText="FE Against CAP Vacancy Round Admission Notification 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/FE-Institute-Level-Admission-Round-Notification-2026-27.pdf"
          linkText="FE Institute Level Admission Round Notification 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/09/DSE-Against-CAP-Vacancy-Round-Admission-Notification-2026-27.pdf"
          linkText="DSE Against CAP Vacancy Round Admission Notification 2026-27"
        />
        <AdmissionsSection
          contentType="link"
          linkHref="http://nbnstic.sinhgad.edu/wp-content/uploads/2026/08/MBA-Direct-Second-Year-Lateral-Entry-General-Merit-List-AY-2026-27.pdf"
          linkText="Admission Notice For Direct Second Year (Lateral Entry) Of Full Time post Graduate Degree Course In Management (MBA) For Academic Year 2026-27"
          linkSecondLine="General Merit List"
        />
        <AdmissionsSection contentType="heading" headingText="Latest News" />
        <hr className="bg-stone-300 caret-transparent text-zinc-500 text-[14.592px] h-px leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] break-words no-underline w-screen border-zinc-500 my-5 border-x-0 md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl" />
        <LatestNewsSection />
        <LearningSection />
        <CurriculumSection />
      </div>
    </article>
  );
};
