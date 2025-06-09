import Card from "./Card";

function Resume() {
  return (
    <div className="w-full max-w-screen-md mx-auto px-4 min-h-screen flex flex-col justify-center text-center items-center">
      <Card>
        <h2 className="text-3xl font-bold text-black mb-2">Resume</h2>
        <p className="text-lg text-gray-800">
          I literally fucking hate this project
        </p>
      </Card>
    </div>
  );
}

export default Resume;
