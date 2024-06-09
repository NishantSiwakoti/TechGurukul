import man1 from "../../../assets/man1.png";
import man2 from "../../../assets/man2.png";
import man3 from "../../../assets/man3.png";
import man4 from "../../../assets/man4.png";

export default function Widget() {
  return (
    <div className=" p-6">
      <h2 className="text-center underline text-blue-600 dark:text-blue-400 text-2xl font-bold mb-20">
        OUR SELECTED STUDENTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-blue-900 text-white p-4 rounded-lg relative">
          <img
            className="w-20 h-20 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"
            src={man1}
            alt="Student 1"
          />
          <div className="pt-10 text-center">
            <p className="font-bold">Congratulations</p>
            <p className="bg-orange-500 text-white inline-block px-2 py-1 rounded">
              Rajesh Hamal
            </p>
            <p className="mt-2">( PYTHON DEVELOPER )</p>
            <p className="font-bold text-yellow-400">Compnay</p>
          </div>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg relative">
          <img
            className="w-20 h-20 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"
            src={man2}
            alt="Student 2"
          />
          <div className="pt-10 text-center">
            <p className="font-bold">Congratulations</p>
            <p className="bg-orange-500 text-white inline-block px-2 py-1 rounded">
              Ramesh Silwal
            </p>
            <p className="mt-2">( GRAPHIC DESIGNER )</p>
            <p className="font-bold text-yellow-400">Infotech</p>
          </div>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg relative">
          <img
            className="w-20 h-20 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"
            src={man3}
            alt="Student 3"
          />
          <div className="pt-10 text-center">
            <p className="font-bold">Congratulations</p>
            <p className="bg-orange-500 text-white inline-block px-2 py-1 rounded">
              Rahul Sharma
            </p>
            <p className="mt-2">( Python Django Intern )</p>
            <p className="font-bold text-yellow-400">Dynamic</p>
          </div>
        </div>
        <div className="bg-blue-900 text-white p-4 rounded-lg relative">
          <img
            className="w-20 h-20 rounded-full absolute -top-8 left-1/2 transform -translate-x-1/2"
            src={man4}
            alt="Student 4"
          />
          <div className="pt-10 text-center">
            <p className="font-bold">Congratulations</p>
            <p className="bg-orange-500 text-white inline-block px-2 py-1 rounded">
              Jitendra Yadav
            </p>
            <p className="mt-2">( REACT INTERN )</p>
            <p className="font-bold text-yellow-400">InfoTech technology</p>
          </div>
        </div>
      </div>
    </div>
  );
}
