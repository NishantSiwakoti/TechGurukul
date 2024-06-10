import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components";
import { useCart } from "../context";
import { getProduct } from "../services";

export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useTitle(product.name);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProduct(id);
        setProduct(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
        });
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const productInCart = cartList.find((item) => item.id === product.id);

    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, product.id]);

  return (
    <main className="container mx-auto p-6 dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img
              className="rounded-lg w-full h-auto"
              src={product.poster}
              alt={product.name}
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-slate-200 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-700 dark:text-slate-300 mb-4">
              {product.overview}
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200 mb-4">
              <span className="mr-1">Rs.</span>
              <span>{product.price}</span>
            </p>
            <div className="mb-4">
              <Rating rating={product.rating} />
            </div>
            <div className="flex flex-wrap items-center mb-4">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 bg-amber-50 dark:bg-amber-900 border rounded-lg px-3 py-1 mr-2 mb-2">
                  BEST SELLER
                </span>
              )}
              {product.in_stock ? (
                <span className="font-semibold text-emerald-600 bg-slate-100 dark:bg-emerald-900 border rounded-lg px-3 py-1 mr-2 mb-2">
                  IN STOCK
                </span>
              ) : (
                <span className="font-semibold text-rose-700 bg-slate-100 dark:bg-rose-900 border rounded-lg px-3 py-1 mr-2 mb-2">
                  OUT OF STOCK
                </span>
              )}
              <span className="font-semibold text-blue-500 bg-slate-100 dark:bg-blue-900 border rounded-lg px-3 py-1 mb-2">
                {product.size} MB
              </span>
            </div>
            <div className="mb-4">
              {!inCart ? (
                <button
                  onClick={() => addToCart(product)}
                  className={`w-full lg:w-auto inline-flex items-center justify-center py-2 px-5 text-lg font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 transition ${
                    product.in_stock ? "" : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={!product.in_stock}
                >
                  Add To Cart <i className="ml-1 bi bi-plus-lg"></i>
                </button>
              ) : (
                <button
                  onClick={() => removeFromCart(product)}
                  className={`w-full lg:w-auto inline-flex items-center justify-center py-2 px-5 text-lg font-medium text-white bg-red-600 rounded-lg hover:bg-red-800 transition ${
                    product.in_stock ? "" : "cursor-not-allowed opacity-50"
                  }`}
                  disabled={!product.in_stock}
                >
                  Remove Item <i className="ml-1 bi bi-trash3"></i>
                </button>
              )}
            </div>
            <p className="text-lg text-gray-700 dark:text-slate-300">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
