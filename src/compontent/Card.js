const Card = ({Hot})=>{
  const{resName , cuisine, eta, rating, image} = Hot

    return  (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img
        src={image}
        alt="imagge"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{resName}</h2>
        <p className="text-sm text-gray-600 mt-1">
          {cuisine}
        </p>
        <div className="flex justify-between items-center mt-3 text-sm text-gray-700">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
            ⭐ {rating}
          </span>
          <span className="text-gray-500">delivery in {eta}</span>
        </div>
      </div>
    </div>
  );
};


export default Card;