export const Hero = () => {
  return (
    <div className="items-center bg-center box-border caret-transparent text-black flex text-[14.592px] justify-center leading-[27.0994px] ml-[calc(50%_-_187.5px)] mr-[calc(50%_-_187.5px)] max-w-[375px] min-h-[600px] outline-[3px] break-words relative no-underline w-screen overflow-clip p-[14.592px] md:text-base md:leading-[29.7143px] md:ml-[calc(50%_-_640px)] md:mr-[calc(50%_-_640px)] md:max-w-screen-xl md:p-4">
      <span className="bg-black box-border caret-transparent block text-[14.592px] leading-[27.0994px] opacity-30 outline-[3px] break-words absolute no-underline z-[1] inset-0 md:text-base md:leading-[29.7143px]"></span>
      <video
        autoPlay
        muted
        loop
        playsInline
        src="http://uat.skncoe.sinhgad.edu/wp-content/uploads/2022/05/video-short-sinhgad-institutes.mp4"
        className="box-border caret-transparent text-[14.592px] h-full leading-[27.0994px] object-cover outline-[3px] break-words absolute no-underline align-baseline w-full z-0 inset-0 md:text-base md:leading-[29.7143px]"
      ></video>
      <div className="box-border caret-transparent text-[14.592px] leading-[27.0994px] max-w-none min-h-[auto] min-w-[auto] outline-[3px] break-words no-underline w-full z-[1] mx-0 md:text-base md:leading-[29.7143px] md:max-w-[1200px] md:mx-auto">
        <p className="box-border caret-transparent text-white text-[14.592px] leading-[27.0994px] break-words no-underline mb-[14.592px] md:text-base md:leading-[29.7143px] md:mb-4">
          Sinhgad Technical Education Society’s
        </p>
        <h1 className="box-border caret-transparent clear-both text-white text-4xl leading-[50.4px] break-words text-left no-underline mb-5 font-ubuntu md:text-[80px] md:leading-[112px]">
          NBN Sinhgad Technical Institutes Campus
        </h1>
        <p className="box-border caret-transparent text-slate-50 text-[14.592px] leading-[27.0994px] break-words no-underline md:text-base md:leading-[29.7143px]">
          We are committed to producing not only good engineers but good human
          beings, also.
        </p>
      </div>
    </div>
  );
};
