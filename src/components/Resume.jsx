import Card from "./Card";

function Resume() {
  return (
    <div className="w-full overflow-y-auto max-w-screen-md mx-auto px-4 min-h-screen flex flex-col sticky top-0 flex justify-center items-center">
      <Card
        className="mt-20 mb-20"
        threshold={0}
        rootMargin="100% 0px 100% 0px"
      >
        <h2 className="text-3xl font-bold text-black mb-4 text-center">
          Resume
        </h2>

        <div className="w-[680px] h-[800px] overflow-y-scroll border border-gray-300 rounded flex justify-center items-center">
          <img src="Alexander-E.F.-Valdez-Resume.jpg"></img>
        </div>
        <div className="">
          <a
            href="Alexander-E.F.-Valdez-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center text-blue-500 justify-center text-center"
          >
            Open Resume In New Tab
          </a>
        </div>
      </Card>
    </div>
  );
}

export default Resume;
