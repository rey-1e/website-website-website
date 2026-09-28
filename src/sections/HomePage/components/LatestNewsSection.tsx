import { NewsCard } from "@/sections/HomePage/components/NewsCard";

export const LatestNewsSection = () => {
  return (
    <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline mx-auto my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_524.8px)] md:mr-[calc(50%_-_524.8px)] md:mt-8 md:mb-4">
      <NewsCard
        imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/stesRacingTeam-300x164.png"
        imageSizes="(max-width: 300px) 100vw, 300px"
        imageClass="aspect-[auto_300_/_164] w-[300px]"
        figureClass=""
        href="https://www.stesracing.org/About-us"
        title="STES Racing Team of Sinhgad Institutes ranks 4th in Overall performance at Formula Bharat 21-22"
      />
      <NewsCard
        imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/rocketry-1-1-1024x1024.png"
        imageSizes="(max-width: 1024px) 100vw, 1024px"
        imageClass="aspect-[auto_1024_/_1024] h-[153px] w-[153px]"
        figureClass="clear-both table text-center mx-auto"
        href="https://stesrocketry.in/competitions"
        title="Sinhgad Institutes Rocketry Team bags second position in Latin American Space Challenge 2021 – Only team from India"
      />
      <NewsCard
        imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/IMG-20211123-WA0065-1024x576.jpg"
        imageSizes="(max-width: 1024px) 100vw, 1024px"
        imageClass="aspect-[auto_1024_/_576] w-[1024px]"
        figureClass=""
        href="http://sinhgad.edu/2021/Cyber_Security.pdf"
        title="Cyber Security Program by Sinhgad Institutes with Pune Cyber Police"
      />
      <NewsCard
        imageUrl="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/gcp-1024x576.png"
        imageSizes="(max-width: 1024px) 100vw, 1024px"
        imageClass="aspect-[auto_1024_/_576] w-[1024px]"
        figureClass=""
        href="http://www.uniindia.com/~/sinhgad-institutes-collaborates-with-google-cloud-now-authorized-google-cloud-facilitator/Business Economy/news/2387980.html"
        title="Sinhgad Institutes Collabrates with Google Cloud"
      />
    </div>
  );
};
