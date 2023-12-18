import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import deko1 from "/Galerii/Dekoratsioonid/deko1.jpg?url";
import deko2 from "/Galerii/Dekoratsioonid/deko2.jpg?url";
import deko3 from "/Galerii/Dekoratsioonid/deko3.jpg?url";
import deko4 from "/Galerii/Dekoratsioonid/deko4.jpg?url";
import deko5 from "/Galerii/Dekoratsioonid/deko5.jpg?url";

function ImageSlider() {
  const slides = [
    {
      url: deko1,
    },
    {
      url: deko2,
    },
    {
      url: deko3,
    },
    {
      url: deko4,
    },
    {
      url: deko5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-[400px] md:h-[700px] md:max-w-[1200px] w-full m-auto py-2 px-4 relative group mt-8">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>

      {/* Left arrow */}
      <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right arrow */}
      <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <img
            key={slideIndex}
            src={slide.url}
            alt={`Slide ${slideIndex + 1}`}
            onClick={() => goToSlide(slideIndex)}
            className={`h-16 w-auto mx-1 cursor-pointer transition-transform duration-300 ${
              currentIndex === slideIndex ? "scale-110" : "scale-100"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
