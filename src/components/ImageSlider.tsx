import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import car1 from "/Galerii/Auto/galerii1.jpg?url";
import car2 from "/Galerii/Auto/galerii2.jpg?url";
import car3 from "/Galerii/Auto/galerii3.jpg?url";
import car4 from "/Galerii/Auto/galerii4.jpg?url";
import car5 from "/Galerii/Auto/galerii5.jpg?url";

function ImageSlider() {
  const slides = [
    {
      url: car1,
    },
    {
      url: car2,
    },
    {
      url: car3,
    },
    {
      url: car4,
    },
    {
      url: car5,
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

  const previewContainerRef = useRef(null);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);

    const imageEl = previewContainerRef.current.childNodes[slideIndex];

    // Calculate the scroll position
    const scrollPosition =
      imageEl.offsetLeft -
      previewContainerRef.current.offsetWidth / 2 +
      imageEl.offsetWidth / 2;

    // Scroll the container
    previewContainerRef.current.scrollLeft = scrollPosition;
  };

  const [fullscreenImage, setFullscreenImage] = useState(null);

  const openFullscreenImage = () => {
    setFullscreenImage(slides[currentIndex].url);
  };

  const FullscreenModal = ({ image, onClose }) => {
    if (!image) return null;

    return (
      <div className="fixed inset-0 bg-deep-black bg-opacity-90 flex items-center justify-center z-50">
        {/* Overlay with semi-transparent black background */}
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>

        {/* Image */}
        <img
          src={image}
          alt="Fullscreen"
          className="max-w-full max-h-full z-10"
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pure-white text-4xl z-10"
        >
          ⨉
        </button>
      </div>
    );
  };

  return (
    <div className="h-[400px] md:h-[700px] md:max-w-[1200px] w-full m-auto py-2 px-4 relative group mt-8 mb-28">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        onClick={openFullscreenImage}
      ></div>

      {/* Left arrow */}
      <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right arrow */}
      <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div ref={previewContainerRef} className="flex overflow-x-auto py-2">
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
      <FullscreenModal
        image={fullscreenImage}
        onClose={() => setFullscreenImage(null)}
      />
    </div>
  );
}

export default ImageSlider;
