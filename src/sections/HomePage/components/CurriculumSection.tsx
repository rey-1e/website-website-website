import { DepartmentCard } from "@/sections/HomePage/components/DepartmentCard";

export const CurriculumSection = () => {
  return (
    <div className="bg-white box-border caret-transparent text-[14.592px] leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] break-words no-underline w-screen p-[29.184px] md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl md:px-0 md:py-16">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] max-w-none outline-[3px] break-words no-underline mx-auto md:text-base md:leading-[29.7143px] md:max-w-[1200px]">
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:my-0">
          <div className="self-start box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline w-full md:basis-2/5 md:grow-0 md:text-base md:leading-[29.7143px]">
            <h2 className="box-border caret-transparent clear-both text-indigo-950 text-[32px] leading-[41.6px] break-words no-underline font-ubuntu md:text-[42px] md:leading-[54.6px]">
              Curriculum Overview
            </h2>
          </div>
          <div className="self-start box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline w-full md:basis-3/5 md:grow-0 md:text-base md:leading-[29.7143px]">
            <p className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline md:text-base md:leading-[29.7143px]">
              NBN Sinhgad Technical Institutes Campus ( NBNSTIC ) at a Glance is
              private unaided institution that was established in the year 2011.
              The institute offers five undergraduate engineering programmes of
              four year duration namely Mechanical Engineering, Electronics
              &amp; Telecommunication Engineering, Computer Engineering,
              Information Technology and Electrical Engineering. The institute
              also offers one postgraduate programme of two years duration
              namely Masters of Business Administration.
            </p>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline w-full mx-auto my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:mt-8 md:mb-4">
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/Mechanical-1.jpg"
            imageSizes="(max-width: 428px) 100vw, 428px"
            imageClassName="aspect-[auto_428_/_297] w-[428px]"
            title="Mechanical"
            description="Established in 2011, the Department of Mechanical Engineering remains among the premier departments of NBNSTIC. The mechanical department offers courses at the graduate level. "
            href="http://nbnstic.sinhgad.edu/departments-mechanical-hods-desk/"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
          />
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/Computer.jpg"
            imageSizes="(max-width: 360px) 100vw, 360px"
            imageClassName="aspect-[auto_360_/_250] w-[360px]"
            title="Computer"
            description="The Department of Computer Engineering was established in the year 2011 with the University of Pune affiliation and approved by AICTE with objective of divulging quality education in the field of Computing."
            href="http://nbnstic.sinhgad.edu/departments-computer-hods-desk/"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
            showExtraContainer={true}
          />
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/E_TC.jpg"
            imageSizes="(max-width: 492px) 100vw, 492px"
            imageClassName="aspect-[auto_492_/_342] w-[492px]"
            title="E & TC"
            description="The Department of Electronics and Telecommunication Engineering (E & TC) was established in the year 2011 with an intake of 60 students in undergraduate engineering course which eventually has increased. "
            href="http://nbnstic.sinhgad.edu/departments-entc-hod-desk/"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
          />
        </div>
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline w-full mx-auto my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:mt-8 md:mb-4">
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/unnamed-2-1.jpg"
            imageSizes="(max-width: 360px) 100vw, 360px"
            imageClassName="aspect-[auto_360_/_250] w-[360px]"
            title="Information Technology"
            description="Welcome to The Department of Information Technology at NBNSTIC. We started our journey in the year of 2011 with the Savitribai Phule Pune University affiliation."
            href="http://nbnstic.sinhgad.edu/departments-it-hods-desk//"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
          />
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/unnamed-3-1.jpg"
            imageSizes="(max-width: 360px) 100vw, 360px"
            imageClassName="aspect-[auto_360_/_250] w-[360px]"
            title="MBA"
            description="I welcome you all to the Department of Management Studies at NBNSTIC, Pune. We train managers to face the challenges in life & career by imparting academically and professionally."
            href="http://nbnstic.sinhgad.edu/departments-mba-hod-desk/"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
          />
          <DepartmentCard
            imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/Engineering-1st-year.jpg"
            imageSizes="(max-width: 488px) 100vw, 488px"
            imageClassName="aspect-[auto_488_/_339] w-[488px]"
            title="First Year Engineering Sciences"
            description="The Department is committed to serve the needs of various branches of engineering by offering students academic experience of thinking, learning, and implementing, foster effective learning environment."
            href="http://nbnstic.sinhgad.edu/departments-fe-hods-desk/"
            cardClassName="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] border border-zinc-300 p-2.5 border-solid"
          />
        </div>
        <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline w-full mt-[14.592px] mx-auto md:flex-nowrap md:text-base md:leading-[29.7143px] md:mt-8">
          <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
            <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline md:flex-nowrap md:text-base md:leading-[29.7143px]">
              <DepartmentCard
                imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/1.jpg"
                imageClassName="aspect-[auto_300_/_168] h-[250px] w-[360px]"
                title="Electrical Engineering "
                description="Welcome to The Department of Electrical Engineering at NBNSTIC, Pune. We started our journey in the year of 2011 with the Savitribai Phule Pune University affiliation."
                href="http://nbnstic.sinhgad.edu/department-electrical-engineering-hods-desk/"
                showExtraContainer
              />
            </div>
          </div>
          <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]"></div>
          <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]"></div>
        </div>
      </div>
    </div>
  );
};
