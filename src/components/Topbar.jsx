import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
function Topbar() {
  return (
    <nav className="bg-white border py-4 items-center flex justify-between">
      <div className="ml-8 w-20 h-16 self-center">
        <img
          src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg"
          alt="koinLogo"
        />
      </div>
      <div className="hidden md:flex justify-center items-center gap-10 mr-8">
        <p className="text-base font-bold">Crypto Taxes</p>
        <p className="text-base font-bold">Free Tools</p>
        <p className="text-base font-bold"> Resource Center</p>
        <button class="bg-gradient-to-r from-[#276DEA] to-[#0655FB] text-white font-medium py-2 px-6 rounded-lg text-base">
          Get Started
        </button>
      </div>
      <div className="flex md:hidden justify-center items-center gap-10 mr-8">
        <GiHamburgerMenu className="w-8 h-8" />
      </div>
    </nav>
  );
}

export default Topbar;
