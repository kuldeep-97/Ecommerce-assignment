import { Link } from "react-router-dom";

const HeroBanner = () => {
  return (
    <div
      className={`flex items-center justify-between p-8 h-[350px] bg-[#40BFFF] mt-20`}
    >
      {/* Left text content */} 
      <div className="text-white max-w-md">
        <p className="mb-4 font-medium text-3xl ">Adidas Men Running <br /> Sneakers</p>
        <p>Performance and design. Taken right to the edge</p>
        <button className="border-b-2 border-white font-semibold hover:opacity-80">
          <Link to="/shopnow">  SHOP NOW
          </Link>
       
        </button>
      </div>

      {/* Right image */}
      <div>
        <img src={"Images/shoes.png"} alt="Product" className="w-80 drop-shadow-lg" />
      </div>
    </div>
  );
};

export default HeroBanner;
