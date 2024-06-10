import { useState } from "react";
import { useCart } from "../../../context";
import { CartCard } from "./CartCard";
import { Checkout } from "./Checkout";

export const CartList = () => {
  const [checkout, setCheckout] = useState(false);
  const { cartList, total } = useCart();

  return (
    <>
      <section className="text-center py-4 bg-purple-500 rounded-t-lg">
        <h1 className="text-3xl font-bold text-white dark:text-slate-100 mb-5">
          Shopping Cart
        </h1>
        <p className="text-lg font-medium text-gray-200 dark:text-slate-300">
          {cartList.length} items in your cart
        </p>
      </section>

      <section className="grid grid-cols-1 rounded-b-xl sm:grid-cols-2 rounded-b- md:grid-cols-3 gap-6 p-6 bg-gray-100 dark:bg-slate-700">
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>

      <section className="max-w-4xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg dark:bg-slate-900">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p className="text-xl font-semibold text-gray-800 dark:text-slate-100">
            Total Amount:
          </p>
          <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            Rs. {total}
          </p>
        </div>
        <div className="text-center">
          <button
            onClick={() => setCheckout(true)}
            type="button"
            className="px-10 py-3 rounded-md bg-purple-700 text-white font-semibold hover:bg-purple-800 dark:bg-purple-700 dark:hover:bg-purple-800 transition"
          >
            Checkout <i className="ml-2 bi bi-arrow-right"></i>
          </button>
        </div>
      </section>

      {checkout && <Checkout setCheckout={setCheckout} />}
    </>
  );
};
