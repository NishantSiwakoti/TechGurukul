import hero from "../../../assets/3.png";
import { useTitle } from "../../../hooks/useTitle";
export const Whyus = () => {
  useTitle("About Us");

  return (
    <section>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
            Why choose<span className="text-orange-500"> TechGurukul?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-zinc-500 dark:text-zinc-400">
            TechGurukul offers resources and transformative learning experiences
            to shape your career in the tech landscape.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img src={hero} alt="Illustration" className="w-full h-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-700 dark:bg-purple-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">
                    5K+
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Students Graduated
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-red-500 dark:bg-red-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    3L-10L
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Salary Range
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-400 dark:bg-orange-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-orange-400 dark:text-orange-400">
                    50+
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Hiring Partners
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-700 dark:bg-purple-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-purple-700 dark:text-purple-700">
                    30+
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Industry Mentors
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                    1:1
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Career Support
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-600 dark:bg-green-700"></div>
                </div>
                <div className="ml-4">
                  <div className="text-2xl font-bold text-green-700 dark:text-green-400">
                    500+
                  </div>
                  <div className="text-base text-zinc-500 dark:text-zinc-400">
                    Interview Coding Questions
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
