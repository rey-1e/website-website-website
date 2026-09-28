export type AdmissionsSectionProps = {
  contentType: string;
  headingText?: string;
  linkHref?: string;
  linkText?: React.ReactNode;
  linkSecondLine?: React.ReactNode;
};

export const AdmissionsSection = (props: AdmissionsSectionProps) => {
  return props.contentType === "heading" ? (
    <h4
      className={`box-border caret-transparent clear-both text-indigo-950 text-[18.24px] leading-[21.888px] break-words text-center no-underline mx-auto font-ubuntu md:text-3xl md:leading-9`}
    >
      {props.headingText}
    </h4>
  ) : (
    <p
      className={`box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words no-underline mb-[14.592px] md:text-base md:leading-[29.7143px] md:mb-4`}
    >
      <a
        href={props.linkHref}
        className={`box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words underline md:text-base md:leading-[29.7143px]`}
      >
        {props.linkText}
        {props.linkSecondLine ? (
          <>
            <br
              className={`box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words no-underline md:text-base md:leading-[29.7143px]`}
            />
            {props.linkSecondLine}
          </>
        ) : null}
      </a>
    </p>
  );
};
