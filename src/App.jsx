import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import HeroBanner from "./Components/HeroBanner";
import FilterItem from "./Components/FilterItem";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-3">
          <HeroBanner></HeroBanner>
          <FilterItem></FilterItem>
          <Home />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
