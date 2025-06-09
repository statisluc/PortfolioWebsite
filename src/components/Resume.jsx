import Card from "./Card";

function Resume() {
  return (
    <section className="relative h-[300vh] w-full">
      <div className="sticky top-0 h-screen w-full flex justify-center items-center">
        <Card>
          <h2 className="text-3xl font-bold text-black mb-4">Resume</h2>

          <div className="w-full h-[75vh] overflow-y-scroll border border-gray-300 rounded">
            <iframe
              src="Alexander-E.F.-Valdez-Resume.pdf"
              className="w-full h-full"
              title="Resume"
            />
          </div>
          <a
            href="Alexander-E.F.-Valdez-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center"
          >
            Open Resume In New Tab
          </a>
        </Card>
      </div>
    </section>
  );
}

export default Resume;
