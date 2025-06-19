import Card from "./Card";

function Project() {
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      <div className="w-full">
        <Card>
          <h2 className="text-3xl font-bold text-black mb-2">Projects</h2>
          <p className="text-lg text-gray-800">
            Below are a couple of my{" "}
            <span className="font-semibold">Personal Projects</span>, each with
            their GitHub link or Product link.
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full mb-10">
        <div className="pt-8 max-w-[700px]">
          {/* Project 1 */}
          <Card>
            <img
              src="/blackjack.png"
              alt="Cover of Super-BlackJack"
              className="rounded-lg"
            ></img>
            <a
              href="https://snessuperblackjack.netlify.app"
              className="text-black mt-4 block"
              target="_blank"
            >
              Click Here To Play!
            </a>
          </Card>
        </div>
        <div className="pt-8 max-w-[700px]">
          {/* Project 2 */}
          <Card>
            <img
              src="/wheelfortune.png"
              alt="Cover of Wheel of Fortune Game"
              className="rounded-lg"
            ></img>
            <a
              href="https://github.com/statisluc/Wheel-Of-Fortune-Terminal-Game/blob/main/wheel_of_fortune.py"
              className="text-black mt-4 block"
              target="_blank"
            >
              Click Here For GitHub Repository!
            </a>
          </Card>
        </div>
        <div className="pt-8 max-w-[700px]">
          {/* Project 3 */}
          <Card>
            <img
              src="gasulator.png"
              alt="Cover Page of Gasulator App"
              className="rounded-lg"
            ></img>
            <p className="text-lg text-gray-800 font-bold mt-4 block">
              COMING OUT SOON
            </p>
          </Card>
        </div>
        <div className="pt-8 max-w-[700px]">
          {/* Project 4 */}
          <Card>
            <img
              src="blackjackmobile.png"
              alt="Cover Page of BlackJack Mobile"
              className="rounded-lg"
            ></img>
            <p className="text-lg text-gray-800 font-bold mt-4 block">
              COMING OUT SOON
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
