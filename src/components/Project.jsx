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
            their GitHub link or product link.
          </p>
        </Card>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
        <div className="pt-8 max-w-[300px]">
          <Card>
            <p className="text-lg text-gray-800">
              Quick little test
              <br />
              and when you expand onto the note, we see how long it goes and
              when you expand onto the note, we see how long it goes and when
              you expand onto the note, we see how long it goes and when you
              expand onto the note, we see how long it goes and when you expand
              onto the note, we see how long it goes
            </p>
          </Card>
        </div>
        <div className="pt-8 max-w-[300px]">
          <Card>
            <p className="text-lg text-gray-800">
              Quick little testand when you expand onto the note, we see how
              long it goes and when you expand onto the note, we see how long it
              goes and when you expand onto the note, we see how long it goes
              and when you expand onto the note, we see how long it goes and
              when you expand onto the note, we see how long it goesand when you
              expand onto the note, we see how long it goes and when you expand
              onto the note, we see how long it goes and when you expand onto
              the note, we see how long it goes and when you expand onto the
              note, we see how long it goes and when you expand onto the note,
              we see how long it goesand when you expand onto the note, we see
              how long it goes and when you expand onto the note, we see how
              long it goes and when you expand onto the note, we see how long it
              goes and when you expand onto the note, we see how long it goes
              and when you expand onto the note, we see how long it goes
            </p>
          </Card>
        </div>
        <div className="pt-8 max-w-[300px]">
          <Card>
            <p className="text-lg text-gray-800">
              Quick test random computer programming jargon like array list note
              tuple jargon like array list note tuplejargon like array list note
              tuplejargon like array list note tuplejargon like array list note
              tuplejargon like array list note tuplejargon like array list note
              tuplejargon like array list note tuple
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Project;
