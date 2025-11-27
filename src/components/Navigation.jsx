import React from "react";

function Navigation() {
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex  items-center justify-between">
        {/* logo */}
        <div className="pt-2">
          <img src="logo.svg" alt="" />
        </div>
        {/* menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-dark-grayish-blue">
            Pricing
          </a>
          <a href="#" className="hover:text-dark-grayish-blue">
            Product
          </a>
          <a href="#" className="hover:text-dark-grayish-blue">
            About Us
          </a>
          <a href="#" className="hover:text-dark-grayish-blue">
            Career
          </a>
          <a href="#" className="hover:text-dark-grayish-blue">
            Community
          </a>
        </div>

        {/* Button */}
        <a
          href="#"
          className="hidden p-3 px-6 pt-2 text-white bg-bright-red rounded-full baseline hover:bg-bright-red-light md:block "
        >
          Get started
        </a>

        {/* Hamburger icon  */}
        <button
          id="menu-btn"
          className="block hamburger md:hidden focus:outline-none cursor-pointer"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"></div>
        <div
          id="menu"
          className="absolute z-50 flex flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white/90 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md rounded-lg"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Career</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
