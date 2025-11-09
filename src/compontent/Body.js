import Card from "./Card";

const Body = () => {
  return (
    <div className="min-h-screen bg-gray-200 px-4 py-6">
      
      {/* Search Box */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Search
        </button>
      </div>

      {/* Filter Button */}
      <div className="flex justify-center mb-6">
        <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Filter by time
        </button>
      </div>


    {/* Restaurents List */}
    <div className="text-3xl text-center">
        <h2>All Restaurents 🥗</h2>
    </div>

      {/* Card */}
      <div className="flex justify-center">
        <Card />
      </div>
    </div>
  );
};

export default Body;