import Typewriter from "typewriter-effect";

const Position = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-lg md:text-4xl lg:text-4xl dark:text-white">I am</p>
      <span className="text-purple-600 text-lg md:text-4xl lg:text-4xl">
        <Typewriter
          options={{
            strings: ["ERP Developer", "React Frontend Developer"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
};

export default Position;
