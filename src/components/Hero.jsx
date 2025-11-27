import React from "react";

function Hero() {
  return (
    <section id="hero">
      {/* flex container */}
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:flex-row md:space-y-0">
        {/* left item */}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-left md:text-5xl">
            Bring everyone together to build better product
          </h1>
          <p className="max-w-md text-center text-dark-grayish-blue md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <div className="flex justify-center md:justify-start">
            <a
              href="#"
              className="p-3  px-6 pt-2 text-white bg-bright-red rounded-full baseline hover:bg-bright-red-light "
            >
              Get Started
            </a>
          </div>
        </div>

        {/* right item "image'*/}
        <div className="md:w-1/2">
          <img src="/public/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
