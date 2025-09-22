import { products } from "../Data/Products";
import ProductCard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function ShopNow() {

  const { filters } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;

  const filteredProducts = products.filter((p) => {
    return (
      p.price >= filters.price[0] &&
      p.price <= filters.price[1] &&
      (!filters.color || p.color === filters.color) &&
      (!filters.brand || p.brand === filters.brand)
    );
  });

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredProducts.slice(firstPostIndex, lastPostIndex);
  const totalPages = Math.ceil(filteredProducts.length / postsPerPage);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-18 ">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Shop Now</h1>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentPosts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

