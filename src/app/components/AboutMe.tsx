import People from "../../../public/people-02.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center justify-between pt-20 md:gap-4 lg:flex-row">
      <div>
        <img
          src={People.src}
          alt=""
          className="h-60 w-60 rounded-full bg-purple-950"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pt-2 md:w-96">
        <h1 className="mb-4 text-center text-3xl font-semibold">
          Im Amy, and id love to work on yout next project
        </h1>
        <p className="text-center">
          I love working with others to create beatiful design solutions. Ive
          designed everything from brand illustrations to compelte mobile apps.
          Im also handy with a camera!
        </p>

        <div>
          <button className="rounded-full bg-red-400 p-4 px-7 py-2 text-white transition-all duration-300 hover:scale-105">
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
