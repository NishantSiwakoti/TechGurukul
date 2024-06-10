import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({ setSearchSection }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchQuery}`);
  };

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
      <form onSubmit={handleSearch} className="flex items-center justify-end">
        <div className="relative flex items-center rounded-full border border-gray-300 overflow-hidden bg-white dark:bg-gray-800">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent w-full p-2 pl-4 text-sm text-gray-700 dark:text-gray-200 focus:outline-none"
            placeholder="Search..."
            autoComplete="off"
            required
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 focus:outline-none transition duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
