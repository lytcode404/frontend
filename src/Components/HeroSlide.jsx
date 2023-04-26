import React from "react";

function HeroSlide() {
  return (
    <div class="relative h-80v">
      <div class="absolute inset-0 z-0">
        <img
          class="object-cover w-full h-full"
          src="https://picsum.photos/305"
          alt="Hero Image"
        />
      </div>
      <div class="absolute inset-0 z-10 bg-opacity-50 bg-gray-900"></div>
      <div class="absolute inset-0 z-20 flex items-center justify-end pb-10">
        <div class="container mx-auto px-4 mt-auto">
          <div class="text-center">
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
              Welcome to My Website
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-white font-medium mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a
              href="#"
              class="bg-white text-gray-900 py-3 px-6 rounded-lg uppercase tracking-wide font-medium hover:bg-gray-200 transition duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSlide;
