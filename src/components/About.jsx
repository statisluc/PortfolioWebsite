import Card from "./Card";
import ImageSlider from "./ImageSlider";

function About() {
  return (
    <div className="w-full  mx-auto px-4 min-h-screen flex flex-col justify-center items-center text-center">
      <div className="w-full flex flex-col items-center overflow-x-hidden mx-auto pt-8 pb-8 sm:max-w-[2000px] max-h-full">
        <Card>
          <h2 className="text-3xl font-bold text-black mb-2">About</h2>
          <p className="text-lg text-gray-800">
            Hey - my name is Alexander Valdez and I am a computer science
            student with a passion for building sleek and intuitive experiences.
            Whether it is web design or iOS development, I truly take pride in
            bringing ideas to life through my code.
            <br />
            My academic journey began in the world of pre-med - more
            specifically biology at{" "}
            <span className="font-bold">Binghamton University</span>, before
            making the transition to computer science. The vast field of
            computer science peaked my interest, with the opportunity to show
            creative and logical ideas through something as expansive as code
            via a programming language or framework. Since then, I have
            graduated from{" "}
            <span className="font-bold">
              SUNY Westchester Community College
            </span>{" "}
            and continue to study at{" "}
            <span className="font-bold">Western Governers University</span>.
            <br />
            Outside of programming, I'm also a visual artist (mostly focusing on
            comic book art). It keeps my imagination going, and akin to code,
            helps me develop my creative ideas. Feel free to look at some of my
            work below!
          </p>
          <ImageSlider />
        </Card>
      </div>
    </div>
  );
}

export default About;
