import { useParams } from "react-router-dom";
import { products } from "../Data/Products";
import ProductCard from "../Components/ProductCard";

export default function CategoryPage() {
    const { category } = useParams();
    const categoryProducts = products.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className=" bg-gray-100 mx-auto p-6 shadow-md overflow-hidden relative text-center mt-12">
            <h1 className="text-3xl font-bold mb-6 capitalize">{category}</h1>

            {categoryProducts.length === 0 ? (
                <p className="text-gray-500">No products found in this category.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {categoryProducts.map((p) => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            )}
        </div>
    );
}
