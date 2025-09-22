import { useEffect, useState } from "react";


export default function Sidebar({ onFilterChange }) {
  const [price, setPrice] = useState([500, 7500]);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const categories = [
    { name: "Nike", count: 2 },
    { name: "Airmax", count: 48 },
    { name: "Nike", count: 14 },
    { name: "Adidas", count: 15 },
    { name: "Vans", count: 23 },
    { name: "All Stars", count: 1 },
    { name: "Adidas", count: 95 }
  ];

  const colors = ["#006cff", "#ff0000", "#171717", "#fff600", "#ff00ff ", "#EFDFDF"];
  const brands = [
    { name: "Nike", count: 99 },
    { name: "Nike", count: 99 },
    { name: "Adidas", count: 99 },
    { name: "Siemens", count: 99 },
  ];


  useEffect(() => {
    onFilterChange({
      price,
      color: selectedColor,
      brand: selectedBrand,
    });
  }, [price, selectedColor, selectedBrand]);



  return (

    
      <aside className=" w-[27%] bg-white  p-4 hidden md:block mt-19">
        {/* Categories */}
        <div className="mb-7 bg-gray-100 rounded-xl p-6 ">
          <h3 className="font-medium text-xl text-black-800 mb-13">Hot Deals</h3>
          <ul className="space-y-9 text-xl text-gray-900">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex justify-between hover:text-blue-500 cursor-pointer"
              >
                <span>{cat.name}</span>
                <span className="text-gray-400">{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price Range */}
        <div className="mb-7 bg-gray-100 rounded-xl p-6">
          <h3 className="font-medium text-xl text-black-800 mb-7">PRICES</h3>
          <p className="text-xl text-gray-600 mb-2">
            Range: ${price[0]} - ${price[1]}
          </p>
          <input
            type="range"
            min="700"
            max="7500"
            step="0.5"
            value={price[1]}
            onChange={(e) => setPrice([500, e.target.value])
            }
            className="w-full accent-blue-500"
          />
        </div>

        {/* Colors */}
        <div className="mb-7 bg-gray-100 rounded-xl p-6">
          <h3 className="font-medium text-xl text-black-800 mb-8">COLOR</h3>
          <div className="flex space-x-5">
            {colors.map((c, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(c)}
                className={`w-7 h-7 rounded-full border-2 ${selectedColor === c ? "border-blue-500" : "border-gray-300"
                  }`}
                style={{ backgroundColor: c }}
              ></button>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div className="mb-8 bg-gray-100 rounded-xl p-6">
          <h3 className="font-medium text-xl text-black-800 mb-10">BRAND</h3>
          <ul className="space-y-7 text-xl text-gray-900">
            {brands.map((brand, idx) => (
              <li
                key={idx}
                className="flex justify-between hover:text-blue-500 cursor-pointer"
                onClick={() => setSelectedBrand(brand.name)}
              >
                <span
                  className={`${selectedBrand === brand.name ? "text-blue-500" : ""
                    }`}
                >
                  {brand.name}
                </span>
                <span className="text-gray-400">{brand.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* More button */}
        <div className="bg-gray-100 rounded-md">
          <button className="w-full py-4   rounded-md text-black-600 hover:bg-gray-100 text-2xl font-medium ">
            More
          </button>
        </div>
      </aside>
    
  );
}
