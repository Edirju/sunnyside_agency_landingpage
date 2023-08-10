

// eslint-disable-next-line react/prop-types
export const Text = ({order, title, text, color}) => {
  return (
    <div
      className={`${order} text-center h-[437px] flex flex-col place-content-around py-6 px-6 tablet:h-auto lg:px-[65px] desktop:text-left desktop:pl-[165px] desktop:py-[140px] desktop:pr-[105px]`}
    >
      <h2 className="font-Fraunces text-[2rem] font-extrabold tablet:text-[1.25rem] lg:text-[2.5rem] desktop:leading-tight">
        {title}
      </h2>
      <p className=" font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8em] tablet:leading-[1.5rem] lg:text-[18px]">
        {text}
      </p>
      <div className="relative">
        <button className="uppercase font-Fraunces">Learn More</button>
        <div
          className={`w-[137px] h-[10px] ${color} rounded-full bg-opacity-25 absolute mx-auto right-0 left-0 bottom-0 -z-10 desktop:mx-0 desktop:left-[-10px]`}
        ></div>
      </div>
    </div>
  );
}

