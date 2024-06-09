import { Link } from "react-router-dom";

export const DropdownLoggedOut = ({ setDropdown }) => {
  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-12 right-0 z-10 w-56 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform scale-95"
    >
      <ul
        className="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/login"
            className="block py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/register"
            className="block py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
          >
            Register
          </Link>
        </li>
      </ul>
    </div>
  );
};
