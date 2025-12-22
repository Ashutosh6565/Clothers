import React from "react";
import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductaDetails from "../components/Products/ProductaDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";

const placeholderProducts = [
  {
    _id: 1,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/400/400??/random=3" }],
  },
  {
    _id: 2,
    name: "Product 2",
    price: 150,
    images: [{ url: "https://picsum.photos/400/400??/random=4" }],
  },
  {
    _id: 3,
    name: "Product 3",
    price: 200,
    images: [{ url: "https://picsum.photos/400/400??/random=5" }],
  },
  {
    _id: 4,
    name: "Product 4",
    price: 250,
    images: [{ url: "https://picsum.photos/400/400??/random=6" }],
  },
  {
    _id: 5,
    name: "Product 5",
    price: 300,
    images: [{ url: "https://picsum.photos/400/400??/random=7" }],
  },
  {
    _id: 6,
    name: "Product 6",
    price: 350,
    images: [{ url: "https://picsum.photos/400/400??/random=8" }],
  },
  {
    _id: 7,
    name: "Product 7",
    price: 400,
    images: [{ url: "https://picsum.photos/400/400??/random=9" }],
  },
  {
    _id: 8,
    name: "Product 8",
    price: 450,
    images: [{ url: "https://picsum.photos/400/400??/random=10" }],
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Sellers</h2>
      <ProductaDetails />
      {/* top wears for the women */}
      <div className="container mx-auto">
        <h2 className="text-center text-3xl font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection/>
      <FeaturesSection/>
    </div>
  );
};

export default Home;
