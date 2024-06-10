import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { Search } from "../Sections/Search";
import { DropdownLoggedOut, DropdownLoggedIn } from "../index";
import { useCart } from "../../context";
import "@fortawesome/fontawesome-free/css/all.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const activeClass =
    "block py-2 px-3 text-white font-bold bg-[#15803d] rounded md:bg-transparent md:text-[#a435f0] md:p-0 dark:text-white md:dark:text-[#a435f0]";
  const inActiveClass =
    "block py-2 px-3 text-gray-900 font-bold rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#29c964] md:p-0 dark:text-white md:dark:hover:text-[#29c964] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
  const { cartList } = useCart();
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  useEffect(() => {
    // console.log(`Dark mode is ${darkMode ? "enabled" : "disabled"}`);
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-10">
      <nav className={`bg-gray-100 ${darkMode ? "dark:bg-dark" : ""}`}>
        <div className="border-b border-slate-200 dark:border-b-1 flex justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Tech<span className="text-purple-600">Gurukul</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex list-none gap-7 p-0">
              {" "}
              {/* Apply list-none class */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/testimonials"
                  className={({ isActive }) =>
                    isActive ? activeClass : inActiveClass
                  }
                >
                  Testimonials
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <span
              onClick={() => {
                setDarkMode(!darkMode);
                console.log(`Dark mode toggled to ${!darkMode}`);
              }}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5"
            >
              {darkMode ? (
                <i className="fas fa-moon"></i>
              ) : (
                <i className="fas fa-sun"></i>
              )}
            </span>
            <span
              onClick={() => setSearchSection(!searchSection)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 fas fa-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl fas fa-shopping-cart relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-[#a435f0] px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="fas fa-user-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>
            {dropdown &&
              (token ? (
                <DropdownLoggedIn setDropdown={setDropdown} />
              ) : (
                <DropdownLoggedOut setDropdown={setDropdown} />
              ))}
          </div>
        </div>
      </nav>
      {searchSection && <Search setSearchSection={setSearchSection} />}
    </header>
  );
};
