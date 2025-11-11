import { useState, useEffect } from "react";
import Card from "./Card";

const Body = () => {
  const [listOfHotel, setListOfRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [btn, setBtn] = useState("filter by time");

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const data = await fetch("http://localhost:3000/restaurants");
    const json = await data.json();
    setListOfRes(json);
    setFilteredList(json); // initially show all
  };

  // Filter Btn Logic !
  const handleFilter = () => {
    if (btn === "filter by time") {
      const filtered = listOfHotel.filter(({ eta }) => {
        const time = parseInt(eta); // convert "27 mins" → 27
        return time <= 18;
      });
      setFilteredList(filtered);
      setBtn("reset");
    } else {
      // 🔁 Reset to show all
      setFilteredList(listOfHotel);
      setBtn("filter by time");
    }
  };
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
        <button
          onClick={handleFilter}
          className={`px-4 py-2 text-white rounded-md transition ${
            btn === "filter by time"
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {btn}
        </button>
      </div>

      {/* Restaurants List */}
      <div className="text-3xl text-center mb-4">
        <h2>All Restaurants 🥗</h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center flex-wrap gap-6 mt-10">
        {filteredList.map((res) => (
          <Card key={res.id} Hot={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
