import React, { useState, useEffect } from "react";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  // Close mobile menu automatically if screen is md or larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = showMenu ? "hidden" : "auto";
  }, [showMenu]);

  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex container */}
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <div className="pt-2">
          <img src="logo.svg" alt="Logo" />
        </div>

        {/* Desktop Menu */}
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

        {/* Desktop Button */}
        <a
          href="#"
          className="hidden md:block p-3 px-6 pt-2 text-white bg-bright-red rounded-full hover:bg-bright-red-light"
        >
          Get started
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="absolute top-3 right-6 z-50 flex flex-col justify-between w-8 h-8 md:hidden focus:outline-none"
        >
          <span
            className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
              showMenu ? "rotate-45 translate-y-4" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-opacity duration-300 ${
              showMenu ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
              showMenu ? "-rotate-45 -translate-y-3" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        {showMenu && (
          <>
            {/* Backdrop */}
            <div
              onClick={() => setShowMenu(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            ></div>

            {/* Menu Content */}
            <div
              id="menu"
              className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center py-8 space-y-6 font-bold bg-white/90 w-[90%] max-w-sm drop-shadow-md rounded-lg transition-all duration-300 ease-in-out md:hidden"
            >
              <a href="#" onClick={() => setShowMenu(false)}>
                Pricing
              </a>
              <a href="#" onClick={() => setShowMenu(false)}>
                Product
              </a>
              <a href="#" onClick={() => setShowMenu(false)}>
                About Us
              </a>
              <a href="#" onClick={() => setShowMenu(false)}>
                Career
              </a>
              <a href="#" onClick={() => setShowMenu(false)}>
                Community
              </a>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
