import { useRef, useEffect, useState } from "react";
import image1 from "scorpion.jpg";
import image2 from "spider2099.png";
import image3 from "spiderman.jpg";
import image4 from "spidergwen.png";
import image5 from "wolverine.jpg";
import image6 from "landscape.jpg";
import image7 from "heist.jpg";

function ImageSlider() {
  const container = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const images = [image1, image2, image3, image4, image5, image6, image7];

  useEffect(() => {
    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (!isPaused && container.current) {
          container.current.scrollLeft += 1;
        }
      }, 16);
    };

    startScrolling();

    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  const scrollLeft = () => {
    if (container.current) {
      container.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (container.current) {
      container.current.scrollLeft += 300;
    }
  };

  return (
    <div className="w-full mt-8">
      <div className="flex justify-between items-center mb-2">
        <button
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={scrollLeft}
        >
          Prev
        </button>
        <button
          className="px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition"
          onClick={scrollRight}
        >
          {" "}
          Next
        </button>
      </div>

      <div
        ref={container}
        className="flex space-x-4 overflow-x-auto scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ scrollBehavior: "smooth" }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`artwork ${index + 1}`}
            className="h-48 rounded shadow-md flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
