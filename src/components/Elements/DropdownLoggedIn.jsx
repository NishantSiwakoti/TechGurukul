import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../../services";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        data.email ? setUser(data) : handleLogout();
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchData();
  }, []); // eslint-disable-line

  function handleLogout() {
    logout();
    setDropdown(false);
    navigate("/");
  }

  return (
    <div
      id="dropdownAvatar"
      className="select-none absolute top-12 right-0 z-10 w-56 bg-white rounded-lg shadow-lg dark:bg-gray-800 transition-transform transform scale-95"
    >
      <div className="py-4 px-5 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{user.email}</div>
      </div>
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
            to="/dashboard"
            className="block py-2 px-5 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-2 border-t border-gray-100 dark:border-gray-600">
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white transition-colors duration-150"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
