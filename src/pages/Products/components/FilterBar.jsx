import { useFilter } from "../../../context";
import { useEffect } from "react";

export const FilterBar = ({ setShow }) => {
  const { state, dispatch } = useFilter();

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };
    document.addEventListener("keydown", closeOnEsc);
    return () => document.removeEventListener("keydown", closeOnEsc);
  }, [setShow]);

  return (
    <section className="filter fixed z-50 inset-0 flex justify-end bg-gray-900 bg-opacity-50 transition-opacity">
      <div className="w-72 h-full bg-white dark:bg-gray-800 p-5 shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Filters
          </h5>
          <button
            onClick={() => setShow(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            aria-label="Close Filters"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="space-y-5">
          <div className="border-b pb-3">
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              Sort by
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "lowtohigh" },
                    })
                  }
                  checked={state.sortBy === "lowtohigh"}
                  id="price-sort-1"
                  type="radio"
                  name="price-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="price-sort-1"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Price - Low to High
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "SORT_BY",
                      payload: { sortBy: "hightolow" },
                    })
                  }
                  checked={state.sortBy === "hightolow"}
                  id="price-sort-2"
                  type="radio"
                  name="price-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="price-sort-2"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Price - High to Low
                </label>
              </div>
            </div>
          </div>

          <div className="border-b pb-3">
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              Rating
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "4STARSABOVE" },
                    })
                  }
                  checked={state.ratings === "4STARSABOVE"}
                  id="rating-sort-1"
                  type="radio"
                  name="rating-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="rating-sort-1"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  4 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "3STARSABOVE" },
                    })
                  }
                  checked={state.ratings === "3STARSABOVE"}
                  id="rating-sort-2"
                  type="radio"
                  name="rating-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="rating-sort-2"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  3 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "2STARSABOVE" },
                    })
                  }
                  checked={state.ratings === "2STARSABOVE"}
                  id="rating-sort-3"
                  type="radio"
                  name="rating-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="rating-sort-3"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  2 Stars & Above
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "RATINGS",
                      payload: { ratings: "1STARSABOVE" },
                    })
                  }
                  checked={state.ratings === "1STARSABOVE"}
                  id="rating-sort-4"
                  type="radio"
                  name="rating-sort"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="rating-sort-4"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  1 Stars & Above
                </label>
              </div>
            </div>
          </div>

          <div className="border-b pb-3">
            <p className="font-semibold text-gray-600 dark:text-gray-300">
              Other Filters
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "BEST_SELLER_ONLY",
                      payload: { bestSellerOnly: !state.bestSellerOnly },
                    })
                  }
                  checked={state.bestSellerOnly}
                  id="best-seller"
                  type="checkbox"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="best-seller"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Best Seller Only
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onChange={() =>
                    dispatch({
                      type: "ONLY_IN_STOCK",
                      payload: { onlyInStock: !state.onlyInStock },
                    })
                  }
                  checked={state.onlyInStock}
                  id="only-instock"
                  type="checkbox"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="only-instock"
                  className="ml-3 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  INSTOCK Only
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => dispatch({ type: "CLEAR_FILTER" })}
              className="w-full text-center text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg py-2 transition-colors"
            >
              Clear Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
