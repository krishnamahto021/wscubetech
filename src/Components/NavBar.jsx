import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className="navbar bg-[#2669fb] flex items-center justify-between p-4 ">
        <div className="logo ">
          <span className="text-4xl cursor-pointer">WsCubeTech</span>
        </div>
        {toggleMenu ? (
          <AiOutlineClose
            className="text-3xl md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        )}
        {/* Responsive design */}
        {toggleMenu ? (
          <div className="menuItems fixed flex flex-col gap-10  top-[4.55rem] left-0 p-4  bg-black text-white text-xl w-full h-screen  duration-300 md:hidden ">
            <div className="home cursor-pointer">Home</div>
            <div className="company cursor-pointer">Company</div>
            <div className="resources cursor-pointer">Resources</div>
            <div className="about cursor-pointer">About</div>
            <div className="contact cursor-pointer">Contact</div>
          </div>
        ) : (
          <div className="menuItems fixed top-[4.55rem] -left-full p-4  bg-black text-white text-xl w-full h-screen  duration-300 md:hidden ">
            <div className="home cursor-pointer">Home</div>
            <div className="company cursor-pointer">Company</div>
            <div className="resources cursor-pointer">Resources</div>
            <div className="about cursor-pointer">About</div>
            <div className="contact cursor-pointer">Contact</div>
          </div>
        )}

        <div className="menuItems  hidden md:flex gap-4 text-white text-xl ">
          <div className="home cursor-pointer">Home</div>
          <div className="company cursor-pointer">Company</div>
          <div className="resources cursor-pointer">Resources</div>
          <div className="about cursor-pointer">About</div>
          <div className="contact cursor-pointer">Contact</div>
        </div>
      </nav>
    </>
  );
};
