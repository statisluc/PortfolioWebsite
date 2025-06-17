import Card from "./Card";

function Project() {
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      <Card>
        <h2 className="text-3xl font-bold text-black mb-2">Projects</h2>
        <p className="text-lg text-gray-800">I dont know what to do no more</p>
      </Card>
      <div className="pt-8 max-w-[300px]">
        <Card>
          <p className="text-lg text-gray-800">
            Quick little test
            <br />
            and when you expand onto the note, we see how long it goes and when
            you expand onto the note, we see how long it goes and when you
            expand onto the note, we see how long it goes and when you expand
            onto the note, we see how long it goes and when you expand onto the
            note, we see how long it goes
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Project;
