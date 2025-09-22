import { useState } from "react";
import { products } from "../Data/Products.js";
import ProductCard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";
import { useOutletContext } from "react-router-dom";

function Home() {
  
  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { filters } = useOutletContext();

  // filter apply
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
    <div>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        {currentPosts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

    
      {filteredProducts.length === 0 && (
        <p className="text-center text-gray-500 mt-6">No products found</p>
      )}

      {/* Pagination Component */}
      {filteredProducts.length > postsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default Home;

