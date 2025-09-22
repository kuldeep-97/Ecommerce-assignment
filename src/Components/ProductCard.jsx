import { useState } from "react";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative text-center mt-5">

      {/* HOT Label */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded">
        HOT
      </div>

      {/* Image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full  object-cover rounded-md"
        /> </Link>

      {/* Title */}
      <h3 className="text-base font-bold text-gray-600 mt-3 mb-1">{product.title}</h3>

      {/* Rating */}
      <div>
        <StarRating productRating={product.ratingValue}></StarRating>
      </div>


      {/* Price */}
      <div>
        <span className="text-[#40bfff] font-bold text-lg mr-3">
          ${product.discountPrice}
        </span>
        <span className="line-through text-gray-400 text-sm mr-2">
          ${product.price}
        </span>
        <span className="text-red-400 text-sm font-bold">
          {product.discountPercent}% Off
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
