export default function Footer() {
  return (
    <footer className="bg-[#BCDDFE] mt-2 ">
      {/* 1st row */}
      <div className="max-w-7xl mx-auto px-22 pt-10 pb-8 grid grid-cols-1 md:grid-cols-3 gap-40  mt-4">
        {/* Logo + About */}
        <div>
          <div className="flex items-center mb-3 ">
            <img src="./Images/Icon.png" alt="logo" className="w-8 h-8" />
            <span className="text-2xl font-bold ml-2">E-Comm</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">
            Follow Us
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">
            Contact Us
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            E-Comm, 4578 <br /> Marmora Road, <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>


      {/* 2nd row */}
      <div className="max-w-7xl mx-auto px-22 pt-6 pb-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-50 mb-5">
        {/* Infomation */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">Service</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">
            My Account
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Our Offers */}
        <div>
          <h3 className="font-semibold text-xl text-gray-900 mb-3">
            Our Offers
          </h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="border-t border-white mb-7">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <img src="./Images/visa.webp" alt="Visa" className="h-6" />
            <img src="./Images/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="./Images/paypal.webp" alt="PayPal" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
