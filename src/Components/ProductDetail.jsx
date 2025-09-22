import { useParams } from "react-router-dom";
import { products } from "../Data/Products";
import StarRating from "./StarRating";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-red-500 mt-10">Product Not Found!</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 mt-20 items-center bg-gray-100 ">
      {/* Image */}
      <div className="flex justify-center">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] object-contain rounded-lg "
        />
      </div>

      {/* Details */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.category.toUpperCase()}</p>

        <div className="flex items-center space-x-3 mb-4">
          <span className="text-2xl font-semibold text-green-600">
            ₹{product.discountPrice}
          </span>
          <span className="line-through text-gray-500">₹{product.price}</span>
          <span className="text-red-500">{product.discountPercent}% OFF</span>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <StarRating productRating={product.ratingValue} />
          <span className="ml-2 text-gray-600">({product.ratingCount} Reviews)</span>
        </div>

        {/* Button */}
        <button className="bg-[#40bfff] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
