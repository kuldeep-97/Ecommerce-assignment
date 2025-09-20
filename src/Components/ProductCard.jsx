import StarRating from "./StarRating";
const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative text-center mt-5">

      {/* HOT Label */}
      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-3 py-2 rounded">
        HOT
      </div> 

      {/* Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full  object-contain bg-gray-50"
      />

      {/* Title */}
      <h3 className="text-base font-bold text-gray-600 mt-3 mb-1">{product.title}</h3>

      {/* Rating */}
      <div>
        <StarRating productRating={product.rating}></StarRating>
      </div>
     

      {/* Price */}
      <div>
        <span className="text-[#40bfff] font-bold text-lg mr-3">
          ${product.discount_price}
        </span>
        <span className="line-through text-gray-400 text-sm mr-2">
          ${product.Original_price}
        </span>
        <span className="text-red-400 text-sm font-bold">
          {product.discount}% Off
        </span>
      </div>
    </div>
  );
};
export default ProductCard;
