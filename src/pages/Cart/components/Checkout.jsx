import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context";
import { createOrder, getUser } from "../../../services";

export const Checkout = ({ setCheckout }) => {
  const { cartList, total, clearCart } = useCart();
  const [user, setUser] = useState({ name: "", email: "" });
  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchData();
  }, []);

  function validateForm() {
    return (
      user.name &&
      user.email &&
      cardNumber &&
      expiryMonth &&
      expiryYear &&
      securityCode
    );
  }

  async function handleOrderSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill in all fields", {
        closeButton: true,
        position: "bottom-center",
      });
      return;
    }

    try {
      const orderData = await createOrder(cartList, total, user);
      clearCart();
      navigate("/ordersuccess", { state: { data: orderData, status: true } });
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
      });
    }
  }

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <button
          onClick={() => setCheckout(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 8.586L4.707 3.293a1 1 0 00-1.414 1.414L8.586 10l-5.293 5.293a1 1 0 001.414 1.414L10 11.414l5.293 5.293a1 1 0 001.414-1.414L11.414 10l5.293-5.293a1 1 0 00-1.414-1.414L10 8.586z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div className="p-8">
          <h3 className="mb-6 text-2xl font-semibold text-center text-gray-800 dark:text-white">
            <i className="bi bi-credit-card mr-2"></i>CARD PAYMENT
          </h3>
          <form onSubmit={handleOrderSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label
                htmlFor="card"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Card Number:
              </label>
              <input
                type="number"
                id="card"
                className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <div>
                <label
                  htmlFor="month"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Expiry Month:
                </label>
                <input
                  type="number"
                  id="month"
                  className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                  value={expiryMonth}
                  onChange={(e) => setExpiryMonth(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="year"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Expiry Year:
                </label>
                <input
                  type="number"
                  id="year"
                  className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                  value={expiryYear}
                  onChange={(e) => setExpiryYear(e.target.value)}
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Security Code:
              </label>
              <input
                type="number"
                id="code"
                className="w-full p-3 text-sm text-gray-800 bg-gray-100 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
                required
              />
            </div>
            <p className="my-4 text-xl font-bold text-center text-green-500">
              Total: Rs. {total}
            </p>
            <button
              type="submit"
              className="w-full px-5 py-3 text-sm font-medium text-center text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <i className="mr-2 bi bi-lock-fill"></i>PAY NOW
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
