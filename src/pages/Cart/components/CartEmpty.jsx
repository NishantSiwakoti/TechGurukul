import { NavLink } from "react-router-dom";
import searches from "../../../assets/search.png";
export function CartEmpty() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 dark:text-white">Shopping Cart</h1>
      <p className="text-lg font-semibold mb-6 dark:text-gray-300">
        0 Courses in cart
      </p>
      <div className="border rounded-lg p-8 flex flex-col items-center">
        <img src={searches} alt="" className="mb-4 w-52" />
        <p className="text-zinc-600 dark:text-gray-300 mb-6">
          Your cart is empty. Keep shopping to find a course!
        </p>
        <NavLink to="/products">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
            Keep shopping
          </button>
        </NavLink>
      </div>
    </div>
  );
}
