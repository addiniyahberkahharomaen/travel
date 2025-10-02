import React from "react";
import logo from "../src/assets/logo.png";

function Nav() {
  return (
    <div className="flex p-1">
      <nav className="font-bold flex justify-center bg-gradient-to-r from-green-900 via-yellow-700 to-green-800 bg-clip-text text-transparent">
      {/* kiri */}
        <div className="flex">
            <img src={logo} alt="logo" className="w-16 h-16" />
        <div className="flex flex-col">
          <a href="#" className="hover:text-slate-900 text-2xl">
            PT ADHIN BERKAH HAROMAEN
          </a>
          <a href="#" className="text-sm italic font-semibold">
            BERKAH, MULIA, BERLIMPAH
          </a>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
