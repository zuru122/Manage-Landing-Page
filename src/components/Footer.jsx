import React from "react";

function Footer() {
  return (
    <footer id="footer" className="bg-very-dark-blue">
      {/* flex container */}
      <div className="container flex flex-col-reverse justify-between py-10 px-6 space-y-8 md:flex-row md:space-y-0">
        {/* logo and social links container */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 space-y-reverse md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>

          {/* logo */}
          <div>
            <img src="logo.svg" alt="Logo" className="h-8" />
          </div>

          {/* social links container */}
          <div className="flex justify-center space-x-4">
            <a href="#">
              <img src="icon-facebook.svg" alt="Facebook" />
            </a>
            <a href="#">
              <img src="icon-twitter.svg" alt="Twitter" />
            </a>
            <a href="#">
              <img src="icon-instagram.svg" alt="Instagram" />
            </a>
            <a href="#">
              <img src="icon-pinterest.svg" alt="Pinterest" />
            </a>
            <a href="#">
              <img src="icon-youtube.svg" alt="YouTube" />
            </a>
          </div>
        </div>

        {/* List container */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-bright-red">
              Home
            </a>
            <a href="#" className="hover:text-bright-red">
              Pricing
            </a>
            <a href="#" className="hover:text-bright-red">
              Products
            </a>
            <a href="#" className="hover:text-bright-red">
              About
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <a href="#" className="hover:text-bright-red">
              Careers
            </a>
            <a href="#" className="hover:text-bright-red">
              Community
            </a>
            <a href="#" className="hover:text-bright-red">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* input container */}
        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 text-center bg-white py-2 px-4 rounded-full focus:outline-none"
                placeholder="Update in your inbox"
              />
              <button className="px-6 py-2 text-white bg-bright-red rounded-full hover:bg-bright-red-light focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
