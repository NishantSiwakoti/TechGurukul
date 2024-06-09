import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.png";
import man4 from "../../../assets/man4.png";
import { useTitle } from "../../../hooks/useTitle";

export const Testimonials = () => {
  useTitle("Testimonials");
  return (
    <section>
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white sm:text-4xl">
              Testimonials
            </h2>
            <p className="mt-4 text-lg leading-6 text-zinc-500 dark:text-zinc-400">
              Unlock the potential to connect with the global community, shape a
              prosperous future, and advance your career trajectory by honing
              your skills through our platform.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <img className="w-12 h-12 rounded-full" src={man1} alt="" />
                <div>
                  <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">
                    Rahul Yadav
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    React Developer
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-zinc-600 dark:text-zinc-300">
                <p>
                  I extend my utmost gratitude to TechGurukul for curating
                  courses that align perfectly with my current needs. The
                  expertise of the instructors is truly remarkable!.
                </p>
              </blockquote>
              <div className="mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <img className="w-12 h-12 rounded-full" src={man2} alt="" />
                <div>
                  <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">
                    Ramesh Shirohiya
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Backend Developer
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-zinc-600 dark:text-zinc-300">
                <p>
                  TechGurukul deserves my heartfelt appreciation for offering
                  courses tailored precisely to my requirements. The
                  instructors' mastery is unparalleled, rendering the delivery
                  of lectures
                </p>
              </blockquote>
              <div className="mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://placehold.co/100x100"
                  alt="Bipul Dawadi"
                />
                <div>
                  <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">
                    Nabin Tajpuriya
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Graphics Designer
                  </p>
                </div>
              </div>
              <blockquote className="mt-4 text-zinc-600 dark:text-zinc-300">
                <p>
                  I am deeply grateful to TechGurukul for providing courses that
                  cater perfectly to my needs. The instructors' expertise is
                  exceptional, and their lectures are delivered with clarity and
                  excellence, elevating my learning journey to new heights.
                </p>
              </blockquote>
              <div className="mt-4">
                <span className="text-yellow-500">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
