import { Link } from "react-router-dom";
import ero from "../../../assets/2.png"; // Ensure the path is correct

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
      <div className="text my-5">
        <h1 className="text-5xl  font-bold">
          Shaping the Future of
          <span className=" text-purple-700 dark:text-purple-500">
            {" "}
            Tech Education
          </span>
        </h1>
        <p className="text-2xl my-7 px-1 dark:text-slate-300">
          Explore Full Stack Web Development, Data Science and Machine Learning,
          Cybersecurity and Ethical Hacking, Mobile App Development (iOS &
          Android), and so on.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-700"
        >
          Explore courses
        </Link>
      </div>
      <div className="visual my-5">
        <img className="rounded-lg max-h-[1200px]" src={ero} alt="Hero" />
      </div>
    </section>
  );
};
