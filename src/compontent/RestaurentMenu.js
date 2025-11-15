import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`http://localhost:3000/restaurants/${resID}`);
        const data = await res.json();
        setRestaurant(data);
      } catch (err) {
        console.error("Error fetching:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, [resID]);

  if (loading) return <h2>Loading menu...</h2>;
  if (!restaurant) return <h2>Restaurant not found 😢</h2>;

  return (
    <div>
      <h1>{restaurant.resName} Menu 🍽️</h1>

      {restaurant.menu && restaurant.menu.length > 0 ? (
        restaurant.menu.map((item) => (
          <div key={item.id}>
            <img src={item.image} alt={item.name} width="200" />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ₹{item.price}</p>
            <p>Rating: ⭐ {item.rating}</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No menu available</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
