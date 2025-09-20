import { useState } from "react";

function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center space-x-12 mt-7 bg-gray-100 p-4 rounded-md">
      {/* Prev Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1  rounded-md hover:bg-gray-200 disabled:opacity-50"
        disabled={currentPage === 1}
      />

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1  rounded-md ${
            currentPage === i + 1
              ? "bg-[#40bfff] text-white"
              : "hover:bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1  rounded-md hover:bg-gray-200 disabled:opacity-50"
        disabled={currentPage === totalPages}
      />
    </div>
  );
}

export default PaginationDemo;
