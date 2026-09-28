import { ImageCarousel } from "@/sections/HomePage/components/ImageCarousel";
import { FeatureStory } from "@/sections/HomePage/components/FeatureStory";
import { AchievementStory } from "@/sections/HomePage/components/AchievementStory";

export const LearningSection = () => {
  return (
    <div className="bg-white box-border caret-transparent text-[14.592px] leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] outline-[3px] break-words no-underline w-screen p-[29.184px] md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl md:px-0 md:py-16">
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] max-w-none outline-[3px] break-words no-underline mx-auto md:text-base md:leading-[29.7143px] md:max-w-[1200px]">
        <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words no-underline p-5 md:text-base md:leading-[29.7143px]">
          <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] max-w-none outline-[3px] break-words no-underline mx-auto md:text-base md:leading-[29.7143px] md:max-w-[1200px]">
            <h2 className="box-border caret-transparent clear-both text-indigo-950 text-[32px] leading-[41.6px] break-words no-underline mb-5 font-ubuntu md:text-[42px] md:leading-[54.6px]">
              Learning Begins
              <br className="box-border caret-transparent text-[32px] leading-[41.6px] outline-[3px] break-words no-underline md:text-[42px] md:leading-[54.6px]" />
              With Us
            </h2>
            <hr className="bg-stone-300 caret-transparent text-zinc-500 text-[14.592px] h-px leading-[27.0994px] max-w-[375px] break-words no-underline w-full border-zinc-500 mx-auto my-5 border-x-0 md:text-base md:leading-[29.7143px] md:max-w-screen-xl" />
            <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline w-full mx-auto my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:mt-8 md:mb-4">
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
                <p className="box-border caret-transparent text-xl leading-[37.1429px] break-words text-left no-underline">
                  We, at NBNSTIC offer supportive and inspirational environments
                  for young enquiring minds to learn and grow with us. Our
                  passion for learning means we achieve more than outstanding
                  results.
                  <br className="box-border caret-transparent outline-[3px] break-words no-underline" />
                  We strive to build confident and creative thinkers and aim at
                  delivering an education that is truly relevant to their
                  future.
                </p>
              </div>
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
                <p className="box-border caret-transparent text-xl leading-[37.1429px] break-words no-underline">
                  We are an early learning academy focused on social-emotional
                  development and early literacy and numeracy. Our students walk
                  out with the character and confidence to make their mark in
                  the world, equipped with the knowledge and real-world skills
                  that take them way ahead in the industry they may serve.
                </p>
              </div>
            </div>
            <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline md:text-base md:leading-[29.7143px]"></div>
            <hr className="bg-slate-50 caret-transparent text-slate-50 text-[14.592px] h-px leading-[27.0994px] break-words no-underline border-slate-50 mb-[21.888px] border-x-0 md:text-base md:leading-[29.7143px] md:mb-6" />
            <div className="box-border caret-transparent clear-both text-[14.592px] h-[100px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]"></div>
            <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:my-0">
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
                <ImageCarousel />
              </div>
              <FeatureStory />
            </div>
            <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:my-0">
              <AchievementStory />
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]">
                <div className="box-border caret-transparent flex text-[14.592px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]">
                  <figure className="box-border caret-transparent flex flex-col text-[14.592px] leading-[27.0994px] max-w-full min-h-[auto] min-w-[auto] break-words relative no-underline md:text-base md:leading-[29.7143px]">
                    <img
                      sizes="(max-width: 480px) 150px"
                      src="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/APPATHON-photo.jpg"
                      alt=""
                      title=""
                      className="aspect-[auto_720_/_1013] shadow-[rgba(0,0,0,0.44)_0px_0px_0px_0px] box-border caret-transparent flex text-[14.592px] leading-[27.0994px] max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline w-[720px] md:text-base md:leading-[29.7143px]"
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent clear-both text-[14.592px] h-20 leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]"></div>
            <hr className="bg-slate-50 caret-transparent text-slate-50 text-[14.592px] h-px leading-[27.0994px] break-words no-underline border-slate-50 mb-[21.888px] border-x-0 md:text-base md:leading-[29.7143px] md:mb-6" />
            <div className="box-border caret-transparent clear-both text-[14.592px] h-[50px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]"></div>
            <div className="box-border caret-transparent clear-both text-[14.592px] h-[50px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]"></div>
            <hr className="bg-slate-50 caret-transparent text-slate-50 text-[14.592px] h-px leading-[27.0994px] break-words no-underline border-slate-50 mb-[21.888px] border-x-0 md:text-base md:leading-[29.7143px] md:mb-6" />
            <div className="box-border caret-transparent clear-both text-[14.592px] h-[50px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]"></div>
            <p className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline md:text-base md:leading-[29.7143px]"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
