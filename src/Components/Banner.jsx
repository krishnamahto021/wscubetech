import Typed from "react-typed";

export const Banner = () => {
  return (
    <>
      <div className="outerContainer bg-[#2669fb] w-full py-40 font-bold text-center">
        <div className="learn text-xl mt-5  md:text-2xl ">Learn With Us</div>
        <div className="grow text-white text-2xl mt-5 md:text-4xl">Grow With Us</div>
        <div className="typing text-white text-xl mt-5 md:text-2xl">
          Learn
          <Typed
            strings={["Web Development", "App Development", "Ethical Hacking"]}
            typeSpeed={100}
            loop={true}
            backSpeed={80}
            className="p-2"
          />
        </div>
      </div>
    </>
  );
};
