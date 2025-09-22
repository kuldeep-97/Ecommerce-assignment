import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import { useState } from "react";



const MainLayout = () => {

  const [filters, setFilters] = useState({
    price: [500, 7500],
    color: "",
    brand: "",
  });

  return (

    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar onFilterChange={setFilters} />
        <main className="flex-1 p-3 ">
            <Outlet context={{ filters }} />
        </main>
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout;