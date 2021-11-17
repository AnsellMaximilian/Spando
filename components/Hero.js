import React from "react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container h-full mx-auto p-4 flex flex-col justify-center bg-right-top bg-no-repeat bg-contain h-60 text-center md:text-left lg:h-125 md:bg-hero-md">
        <h1 className="text-5xl font-bold md:w-2/3 lg:w-1/2">
          Belajar <span className="text-red-700">Sp</span>
          <span className="text-yellow-400">any</span>
          <span className="text-red-700">ol</span> dari sudut pandang pemula.
        </h1>
      </div>
    </section>
  );
}
