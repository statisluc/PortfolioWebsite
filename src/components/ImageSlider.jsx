import { useRef, useEffect, useState } from "react";
import image1 from "/scorpion.jpg";
import image2 from "/spider2099.png";
import image3 from "/spiderman.jpg";
import image4 from "/spidergwen.png";
import image5 from "/wolverine.jpg";
import image6 from "/landscape.jpg";
import image7 from "/heist.jpg";

function ImageSlider() {
  const containerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML += container.innerHTML;

    let scrollInterval;

    // const startScrolling = () => {
    //   scrollInterval = setInterval(() => {
    //     if (!isPaused && containerRef.current) {
    //       containerRef.current.scrollLeft += 1;
    //     }
    //   }, 16); // ~60fps
    // };
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && containerRef.current) {
          container.scrollLeft += 1;
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }, 16);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  // const scrollLeft = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft -= 300;
  //   }
  // };

  // const scrollRight = () => {
  //   if (containerRef.current) {
  //     containerRef.current.scrollLeft += 300;
  //   }
  // };

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center mb-2">
        {/* <button
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={scrollLeft}
        >
          ← Prev
        </button>
        <button
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={scrollRight}
        >
          Next →
        </button> */}
      </div>
      <div
        ref={containerRef}
        className="flex space-x-4 overflow-hidden scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: "smooth", pointerEvents: "none" }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Artwork ${index + 1}`}
            className="h-48 rounded shadow-md flex-shrink-0"
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
