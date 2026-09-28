export const MobileMenuToggle = () => {
  return (
    <button
      type="button"
      aria-label="Main menu toggle"
      className="items-center bg-indigo-950 caret-transparent text-white flex text-[21.888px] leading-[40.6491px] outline-dotted outline-1 text-center no-underline align-middle p-[10.944px] rounded-sm font-ubuntu md:text-2xl md:leading-[44.5714px] md:outline-[3px] md:p-3"
    >
      <span className="self-center box-border caret-transparent flex text-[21.888px] leading-[40.6491px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-2xl md:leading-[44.5714px] md:min-h-0 md:min-w-0">
        <span className="content-center items-center self-center box-border caret-transparent flex flex-wrap text-[21.888px] leading-[40.6491px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-2xl md:leading-[44.5714px] md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/icon-8.svg"
            alt="Icon"
            className="box-border caret-transparent text-[21.888px] h-5 leading-[40.6491px] outline-[3px] no-underline align-baseline w-5 md:text-2xl md:leading-[44.5714px]"
          />
        </span>
        <span className="content-center items-center self-center box-border caret-transparent flex flex-wrap text-[21.888px] leading-[40.6491px] min-h-[auto] min-w-[auto] outline-[3px] no-underline md:text-2xl md:leading-[44.5714px] md:min-h-0 md:min-w-0">
          <img
            src="https://c.animaapp.com/0ry8afAhJKWqRoD6weOh_Q/assets/icon-9.svg"
            alt="Icon"
            className="box-border caret-transparent hidden text-[21.888px] h-5 leading-[40.6491px] outline-[3px] no-underline align-baseline w-5 md:text-2xl md:leading-[44.5714px]"
          />
        </span>
      </span>
    </button>
  );
};
