import MainLayout from "./Layout/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./Pages/Contact";
import HeroBanner from "./Components/HeroBanner";
import FilterItem from "./Components/FilterItem";
import Home from "./Pages/Home";
import ProductDetail from "./Components/ProductDetail";
import CategoryPage from "./Pages/CategoryPage";
import ShopNow from "./Pages/Shopnow";



// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/", element: (
          <>
            <HeroBanner />
            <FilterItem />
            <Home />
          </>
        )
      },
      { path: "/product/:id", element: <ProductDetail /> },
      { path: "/shopnow/", element: <ShopNow /> },
      { path: "/category/:category", element: <CategoryPage /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);



export default function App() {
  return (
    <main><RouterProvider router={router} /></main>
  );
}



