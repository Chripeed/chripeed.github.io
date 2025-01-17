import { useState, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

interface Slide {
  url: string;
}

interface ImageSliderProps {
  slides: Slide[];
}

function ImageSlider({ slides }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const previewContainerRef = useRef<HTMLDivElement>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

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

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);

    const container = previewContainerRef.current;
    if (!container) return;

    // Ensure the slide index is within bounds and element exists.
    const imageEl = container.childNodes[slideIndex] as HTMLElement | null;
    if (!imageEl) return;

    const scrollPosition =
      imageEl.offsetLeft - container.offsetWidth / 2 + imageEl.offsetWidth / 2;

    container.scrollLeft = scrollPosition;
  };

  const openFullscreenImage = () => {
    setFullscreenImage(slides[currentIndex].url);
  };

  interface FullscreenModalProps {
    image: string | null;
    onClose: () => void;
  }

  const FullscreenModal: React.FC<FullscreenModalProps> = ({
    image,
    onClose,
  }) => {
    if (!image) return null;
    return (
      <div className="fixed inset-0 bg-deep-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
        <img
          src={image}
          alt="Fullscreen"
          className="max-w-full max-h-full z-10 p-12"
        />
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
      <div className="md:hidden group-hover:block absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right arrow */}
      <div className="md:hidden group-hover:block absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-deep-black/80 text-pure-white cursor-pointer">
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
