import { Link } from "react-router-dom";
import { useCart } from "../../../context";

export const CartCard = ({ product }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-wrap justify-between items-center border-b dark:border-slate-700 max-w-4xl mx-auto my-5 p-5 mb-5 rounded-lg shadow-lg bg-white dark:bg-slate-800">
      <div className="flex items-center space-x-4">
        <Link to={`products/${product.id}`} className="flex-shrink-0">
          <img
            className="w-32 rounded-lg transition-transform transform hover:scale-105"
            src={product.poster}
            alt={product.name}
          />
        </Link>
        <div className="ml-4">
          <Link to={`products/${product.id}`}>
            <p className="text-xl font-semibold dark:text-slate-200">
              {product.name}
            </p>
          </Link>
          <button
            onClick={() => removeFromCart(product)}
            className="text-base mt-2 text-red-500 hover:text-red-700 transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-xl mt-2 font-bold dark:text-slate-200">
        <span>Rs. {product.price}</span>
      </div>
    </div>
  );
};
