import {products} from "../Data/Products.js";
import ProductCard from "../Components/ProductCard";
import Pagination from "../Components/Pagination";

function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
