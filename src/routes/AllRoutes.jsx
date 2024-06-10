import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  ProductsList,
  ProductDetail,
  Login,
  Register,
  CartPage,
  OrderPage,
  DashboardPage,
  PageNotFound,
} from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { Testimonials } from "../pages/Home/components/Testimonials";
import { Whyus } from "../pages/Home/components/Whyus";
import LoadingBar from "react-top-loading-bar";
import { OrderSuccess } from "../pages/Order/components/OrderSuccess";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="courses" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        {/* <Route path="about" element={<About />} /> */}

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="about" element={<Whyus />} />

        <Route path="cart" element={<CartPage />} />
        <Route
          path="order-summary"
          element={
            <ProtectedRoute>
              <OrderPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/ordersuccess" element={<OrderSuccess />} /> */}
      </Routes>
    </>
  );
};
