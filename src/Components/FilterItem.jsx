import { Menu } from "lucide-react";

const FilterItem = () => {
    return (
        <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm mt-4">

            {/* Left section */}
            <div className="flex items-center space-x-16 ">
                <span className="text-gray-700 font-medium">24 Items</span>

                {/* Sort By */}
                <div className="flex items-center space-x-3">
                    <label className="text-gray-900">Sort By</label>
                    <select className="border border-blue-200 rounded-md px-4 py-1  focus:outline-none">
                        <option>Name</option>
                        <option>Price</option>
                        <option>Popularity</option>
                    </select>
                </div>

                {/* Show */}
                <div className="flex items-center space-x-3 ml-10">
                    <label className="text-gray-900">Show</label>
                    <select className="border border-blue-200 pr-7 rounded-md px-2 py-1 focus:outline-none">
                        <option>12</option>
                        <option>24</option>
                        <option>36</option>
                    </select>
                </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-3">
                <button className="rounded-md bg-gray-100 hover:bg-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <circle cx="5" cy="5" r="2" />
                        <circle cx="12" cy="5" r="2" />
                        <circle cx="19" cy="5" r="2" />
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                        <circle cx="5" cy="19" r="2" />
                        <circle cx="12" cy="19" r="2" />
                        <circle cx="19" cy="19" r="2" />
                    </svg>
                </button>


                <button className="p-2 rounded-md hover:bg-gray-200 text-gray-500">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default FilterItem;
