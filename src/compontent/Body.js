import { useState, useEffect } from "react";
import Card from "./Card";

const Body = () => {
  const [listOfHotel, setListOfRes] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const data = await fetch("http://localhost:3000/restaurants");
    const json = await data.json();
    setListOfRes(json);
    setFilteredList(json); // initially show all
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
          onClick={()=>{
            const filteredList = listOfHotel.filter(({eta}) => {
              // HERE
                const time = parseInt(eta)
                return time <= 18
            });
            setFilteredList(filteredList)
          }}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Filter by time
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
