import Card from "./Card";
import CardWrapper from "./CardWrapper";

function Project() {
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      {/* <div className="w-full"> */}
      <Card>
        <h2 className="text-3xl font-bold text-black mb-2">Projects</h2>
        <p className="text-lg text-gray-800">
          Below are a couple of my{" "}
          <span className="font-semibold">Personal Projects</span>, each with
          their GitHub link or Product link.
        </p>
      </Card>
      {/* </div> */}

      <div className="flex flex-col sm:flex-row sm:space-x-6 w-full mb-10">
        <div className="flex flex-col space-y-6 sm:w-1/2">
          <div className="pt-8 max-w-[700px]">
            {/* Project 1 */}
            {/* <Card>
              <img
                src="/blackjack.png"
                alt="Cover of Super-BlackJack"
                className="rounded-lg"
              ></img>
              <a
                href="https://snessuperblackjack.netlify.app"
                className="text-black mt-4 block bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none transition-colors duration-200"
                target="_blank"
              >
                Click Here To Play!
              </a>
            </Card> */}
            <CardWrapper
              imgsrc="blackjack.png"
              imgalt="Cover of Super-BlackJack"
              overlayText="Select your character and duel your opponent with this twist on the famous card game of Blackjack"
              ctaText="Click Here To Play!"
              href="https://snessuperblackjack.netlify.app"
              ctaclassName="mt-4 block bg-blue-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-blue-800 focus:outline-none transition-colors duration-200"
            />
          </div>

          <div className="pt-8 max-w-[700px]">
            {/* Project 2 */}
            {/* <Card>
              <img
                src="gasulator.png"
                alt="Cover Page of Gasulator App"
                className="rounded-lg"
              ></img>
              <p className="text-lg text-gray-800 font-bold mt-4 block">
                COMING OUT SOON
              </p>
            </Card> */}
            <CardWrapper
              imgsrc="gasulator.png"
              imgalt="Cover of Gasulator App"
              overlayText="Coming Soon for Android and iOS Devices!"
              ctaText="COMING OUT SOON"
              ctaclassName="text-black text-gray-800 text-lg font-bold mt-4 block"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-6 sm:w-1/2 mt-6 sm:mt-0">
          <div className="pt-8 max-w-[700px]">
            {/* Project 3 */}
            {/* <Card>
              <img
                src="/wheelfortune.png"
                alt="Cover of Wheel of Fortune Game"
                className="rounded-lg"
              ></img>
              <a
                href="https://github.com/statisluc/Wheel-Of-Fortune-Terminal-Game/blob/main/wheel_of_fortune.py"
                className="text-black mt-4 block bg-gray-500 text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-600 focus:outline-none transition-colors duration-200"
                target="_blank"
              >
                Click Here For GitHub Repository!
              </a>
            </Card> */}
            <CardWrapper
              imgsrc="wheelfortune.png"
              imgalt="Cover of Wheel Of Fortune Game"
              overlayText="Check out the code behind one of my first school projects. Terminal game of Wheel of Fortune"
              ctaText="Click Here For Github Repository!"
              href="https://github.com/statisluc/Wheel-Of-Fortune-Terminal-Game/blob/main/wheel_of_fortune.py"
              ctaclassName="text-white mt-4 block bg-gray-500 font-bold px-6 py-3 rounded-full shadow-md hover:bg-gray-600 focus:outline-none transition-colors duration-200"
            />
          </div>
          <div className="pt-8 max-w-[700px]">
            {/* Project 4 */}
            {/* <Card>
              <img
                src="blackjackmobile.png"
                alt="Cover Page of BlackJack Mobile"
                className="rounded-lg"
              ></img>
              <p className="text-lg text-gray-800 font-bold mt-4 block">
                COMING OUT SOON
              </p>
            </Card> */}
            <CardWrapper
              imgsrc="blackjackmobile.png"
              imgalt="Cover Page of BlackJack Mobile"
              overlayText="Coming Soon for iOS Devices!"
              ctaText="COMING OUT SOON"
              ctaclassName="text-black text-gray-800 text-lg font-bold mt-4 block"
            />
          </div>
          <div className="pt-8 max-w-[700px]">
            {/* Project 5 */}
            <CardWrapper
              imgsrc="boxer.png"
              imgalt="Cover Page of Boxing App"
              overlayText="Coming Soon for iOS Devices!"
              ctaText="COMING OUT"
              ctaclassName="text-black text-gray-800 text-lg font-bold mt-4 block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
