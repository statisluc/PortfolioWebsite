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
}

export default ImageSlider;
