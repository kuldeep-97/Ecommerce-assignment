
function Pagination({ currentPage, totalPages, setCurrentPage }) {

  const handlePageChange = (page) => {

    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }

  };

  return (
    <div className="flex justify-center items-center space-x-8 mt-7 bg-gray-100 p-4 rounded-md">


      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i + 1)}
          className={`px-3 py-1 font-semibold text-xl rounded-md ${currentPage === i + 1
            ? "bg-[#40bfff] text-white"
            : "hover:bg-gray-300"
            }`}
        >
          {i + 1}
        </button>
      ))}

    </div>
  );
}

export default Pagination;
