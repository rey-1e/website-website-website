export type FooterNavigationProps = {
  variant: string;
  ariaLabel: string;
  mandatoryDisclosureHref: string;
  mandatoryDisclosureText: string;
  disclaimerHref: string;
  disclaimerText: string;
  alumniHref: string;
  alumniText: string;
  grievanceHref: string;
  grievanceText: string;
  logoUrl: string;
  placementsHref: string;
  placementsText: string;
  libraryHref: string;
  libraryText: string;
  careersHref: string;
  careersText: string;
  mailLoginHref: string;
  mailLoginText: string;
  addressLineOne: string;
  addressLineTwo: string;
};

export const FooterNavigation = (props: FooterNavigationProps) => {
  return (
    <aside
      aria-label={props.ariaLabel}
      role="region"
      className="box-border caret-transparent text-zinc-500 text-[14.592px] leading-[27.0994px] outline-[3px] text-center no-underline w-full md:text-base md:leading-[29.7143px] md:text-left"
    >
      {props.variant === "widget1" ? (
        <>
          <section className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] text-center no-underline md:text-base md:leading-[29.7143px] md:text-left mb-[40.8576px] md:mb-[44.8px]">
            <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] gap-y-6 text-center no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:text-left md:my-0">
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:basis-0 md:text-base md:leading-[29.7143px] md:text-left">
                <ul className="box-border caret-transparent text-[14.592px] leading-[27.0994px] list-none break-words text-center no-underline pl-0 md:text-base md:leading-[29.7143px] md:text-left">
                  <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                    <a
                      href={props.mandatoryDisclosureHref}
                      className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                    >
                      {props.mandatoryDisclosureText}
                    </a>
                  </li>
                  <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                    <a
                      href={props.disclaimerHref}
                      className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                    >
                      {props.disclaimerText}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:basis-0 md:text-base md:leading-[29.7143px] md:text-left">
                <ul className="box-border caret-transparent text-[14.592px] leading-[27.0994px] list-none break-words text-center no-underline pl-0 md:text-base md:leading-[29.7143px] md:text-left">
                  <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                    <a
                      href={props.alumniHref}
                      className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                    >
                      {props.alumniText}
                    </a>
                  </li>
                  <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                    <a
                      href={props.grievanceHref}
                      className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                    >
                      {props.grievanceText}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
            <img
              src={props.logoUrl}
              alt=""
              className="aspect-[auto_1_/_1] box-border caret-transparent inline text-[14.592px] leading-[27.0994px] max-w-full outline-[3px] text-center no-underline w-px md:text-base md:leading-[29.7143px] md:text-left"
            />
          </section>
        </>
      ) : (
        <section className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
          <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] gap-y-6 text-center no-underline my-[14.592px] md:flex-nowrap md:text-base md:leading-[29.7143px] md:text-left md:my-0">
            <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:basis-0 md:text-base md:leading-[29.7143px] md:text-left">
              <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 text-center no-underline md:flex-nowrap md:text-base md:leading-[29.7143px] md:text-left">
                <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:grow-0 md:text-base md:leading-[29.7143px] md:text-left">
                  <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 text-center no-underline md:flex-nowrap md:text-base md:leading-[29.7143px] md:text-left">
                    <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:grow-0 md:text-base md:leading-[29.7143px] md:text-left">
                      <ul className="box-border caret-transparent text-[14.592px] leading-[27.0994px] list-none break-words text-center no-underline pl-0 md:text-base md:leading-[29.7143px] md:text-left">
                        <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                          <a
                            href={props.placementsHref}
                            className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                          >
                            {props.placementsText}
                          </a>
                        </li>
                        <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                          <a
                            href={props.libraryHref}
                            className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                          >
                            {props.libraryText}
                          </a>
                        </li>
                        <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                          <a
                            href={props.careersHref}
                            className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                          >
                            {props.careersText}
                          </a>
                        </li>
                        <li className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                          <a
                            href={props.mailLoginHref}
                            className="box-border caret-transparent text-zinc-800 text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left"
                          >
                            {props.mailLoginText}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline md:basis-0 md:text-base md:leading-[29.7143px] md:text-left">
              <div className="box-border caret-transparent gap-x-6 flex flex-wrap text-[14.592px] leading-[27.0994px] outline-[3px] break-words gap-y-6 text-center no-underline md:flex-nowrap md:text-base md:leading-[29.7143px] md:text-left">
                <div className="self-start box-border caret-transparent basis-full grow text-[14.592px] leading-[27.0994px] min-h-[auto] outline-[3px] break-words text-center no-underline w-full md:grow-0 md:text-base md:leading-[29.7143px] md:text-left">
                  <p className="box-border caret-transparent text-[14.592px] leading-[27.0994px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left">
                    {props.addressLineOne}
                    <br className="box-border caret-transparent text-[14.592px] leading-[27.0994px] outline-[3px] break-words text-center no-underline md:text-base md:leading-[29.7143px] md:text-left" />
                    {props.addressLineTwo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </aside>
  );
};
