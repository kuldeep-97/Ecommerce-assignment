export default function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 ">
      <div className="bg-gray-50 shadow-lg rounded-2xl w-full max-w-md p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-500 text-center mb-6">
          Have questions? We'd love to hear from you.
        </p>

        {/* Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />

          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-[#40bfff] text-white font-medium py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

