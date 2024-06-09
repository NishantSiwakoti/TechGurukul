import { useTitle } from "../../hooks/useTitle";
import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Whyus } from "./components/Whyus";
import Widget from "./components/Widget";

export const HomePage = () => {
  useTitle("Home");

  return (
    <main>
      <Hero />
      <Whyus />
      <FeaturedProducts />
      <Widget />
      <Testimonials />
    </main>
  );
};
