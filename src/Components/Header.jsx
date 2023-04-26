import React from "react";
import Navbar from './Navbar.jsx'

function Header() {
  return (
    <>
      <>
        <header className=" bg-gray-200 py-2 text-sm text-center transition-all">
          <span className="inline-block mr-4">phoneNumber: 3123564568 | 14151474254</span>
          <span className="inline-block">email:  456897554@gmail.com | 1214215@gmail.com</span>
        </header>

        <Navbar/>
      </>
    </>
  );
}

export default Header;
