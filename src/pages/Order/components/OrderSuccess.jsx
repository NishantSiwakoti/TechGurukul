import React from "react";
import { NavLink } from "react-router-dom";
import { FaCheck, FaShoppingCart } from "react-icons/fa"; // Import FontAwesome icons

export const OrderSuccess = () => {
  return (
    <section className="min-h-screen">
      <div className="flex justify-center mt-16">
        <div className="bg-white text-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
          <div className="flex justify-center mb-4">
            {/* Right tick icon */}
            <FaCheck className="text-4xl text-green-500" />
          </div>
          <h2 className="text-center text-black text-xl font-semibold mb-2">
            Thank you for your order!
          </h2>
          <p className="text-center mb-4 text-black">Your Order ID: 1</p>
          <p className="text-center mb-4 text-black">
            Please login with the email that you have provided us on our
            website.
            <NavLink to="/login">
              <span className="text-purple-800 font-bold"> Login</span>
            </NavLink>
          </p>
          <p className="text-center mb-6 text-black">
            Payment ID: xyz_123456789
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
              <NavLink to="/products">
                {/* Cart icon */}
                <span className="flex">
                  Continue Shopping
                  <FaShoppingCart className="ml-2 mt-1" />
                </span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
