export default function Contact() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Page</h1>
      <form className="flex flex-col gap-2 mt-4">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <textarea placeholder="Message" className="border p-2"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2">Send</button>
      </form>
    </div>
  );
}
