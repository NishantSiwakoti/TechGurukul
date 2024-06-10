import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context";
import { Rating } from "./Rating";

export const ProductCard = ({ product }) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const { id, name, overview, poster, price, rating, best_seller } = product;

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`} className="relative">
        {best_seller && (
          <span className="absolute top-4 left-2 px-3 bg-orange-500 bg-opacity-90 text-white rounded-sm">
            Best Seller
          </span>
        )}
        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </Link>
      <div className="p-5">
        <Link to={`/products/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>

        <div className="flex items-center my-2">
          <Rating rating={rating} />
        </div>

        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>Rs. </span>
            <span>{price}</span>
          </span>
          {!inCart && (
            <button
              onClick={() => addToCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-[#8710d8] rounded-md hover:bg-purple-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Add to Cart <i className="ml-1"></i>
            </button>
          )}
          {inCart && (
            <button
              onClick={() => removeFromCart(product)}
              className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${
                product.in_stock ? "" : "cursor-not-allowed"
              }`}
              disabled={product.in_stock ? "" : "disabled"}
            >
              Remove course <i className="ml-1"></i>
            </button>
          )}
        </p>
      </div>
    </div>
  );
};
