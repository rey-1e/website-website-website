export type NewsCardProps = {
  imageUrl: string;
  imageSizes: string;
  imageClass: string;
  figureClass: string;
  href: string;
  title: string;
};

export const NewsCard = (props: NewsCardProps) => {
  return (
    <div className="bg-white shadow-[rgba(23,43,77,0.1)_0px_0px_5px_0px] box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words no-underline border border-zinc-300 p-2.5 border-solid md:basis-0 md:text-base md:leading-[29.7143px]">
      <figure
        className={`box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline md:text-base md:leading-[29.7143px] ${props.figureClass}`}
      >
        <img
          src={props.imageUrl}
          alt=""
          sizes={props.imageSizes}
          className={`box-border caret-transparent inline text-[14.592px] leading-[27.0994px] max-w-full outline-[3px] break-words no-underline align-bottom md:text-base md:leading-[29.7143px] ${props.imageClass}`}
        />
      </figure>
      <p className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline md:text-base md:leading-[29.7143px]">
        <u className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words underline md:text-base md:leading-[29.7143px]">
          <a
            href={props.href}
            className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words underline md:text-base md:leading-[29.7143px]"
          >
            {props.title}
          </a>
        </u>
      </p>
    </div>
  );
};
