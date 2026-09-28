export type DepartmentCardProps = {
  imageUrl: string;
  imageSizes?: string;
  imageClassName: string;
  title: string;
  description: string;
  href: string;
  cardClassName?: string;
  showExtraContainer?: boolean;
};

export const DepartmentCard = (props: DepartmentCardProps) => {
  return (
    <div
      className={`box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline md:basis-0 md:text-base md:leading-[29.7143px]${props.cardClassName ? ` ${props.cardClassName}` : ""}`}
    >
      <figure className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline mb-[29.184px] md:text-base md:leading-[29.7143px] md:mb-8">
        <img
          src={props.imageUrl}
          alt=""
          sizes={props.imageSizes}
          className={`box-border caret-transparent inline text-[14.592px] leading-[27.0994px] max-w-full outline-[3px] break-words no-underline align-bottom md:text-base md:leading-[29.7143px] ${props.imageClassName}`}
        />
      </figure>
      <h4 className="box-border caret-transparent clear-both text-indigo-950 text-[18.24px] leading-[21.888px] break-words no-underline mb-5 font-ubuntu md:text-3xl md:leading-9">
        {props.title}
      </h4>
      <p className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline mb-[14.592px] md:text-base md:leading-[29.7143px] md:mb-4">
        {props.description}
      </p>
      <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline mt-6 md:text-base md:leading-[29.7143px]">
        <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]">
          <a
            href={props.href}
            className="bg-indigo-950 box-border caret-transparent text-white inline-block text-[14.592px] font-bold leading-[14.592px] outline-[3px] break-words text-center no-underline px-6 py-[15px] rounded-sm font-ubuntu md:text-base md:leading-4"
          >
            Read More
          </a>
        </div>
      </div>
      {props.showExtraContainer ? (
        <div className="items-center box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 no-underline mt-6 md:text-base md:leading-[29.7143px]"></div>
      ) : null}
    </div>
  );
};
