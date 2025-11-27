import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Anisha Li",
      image: "avatar-anisha.png",
      text: `“Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”`,
    },
    {
      name: "Ali Bravo",
      image: "avatar-ali.png",
      text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    },

    {
      name: "Richard Watts",
      image: "avatar-richard.png",
      text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
  ];
  return (
    <section id="testimonial">
      {/* Container to heading and testimonial blocks  */}
      <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
        {/* Heading  */}
        <h2 className="text-4xl font-bold text-center">
          What's different about Manage?
        </h2>

        {/* Testimonials container  */}

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          {/* Testimonial 1  */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? "flex" : "hidden md:flex"
              } mb-12 flex-col items-center p-6 space-y-6 rounded-lg bg-very-light-gray md:w-1/3`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 -mt-14"
              />
              <h5 className="text-lg font-bold">{testimonial.name}</h5>
              <p className="text-sm text-dark-grayish-blue">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>

        <div className="my-16">
          <a
            href=""
            className="p-3 px-6 pt-2 text-white bg-bright-red rounded-full baseline hover:bg-bright-red-light"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
