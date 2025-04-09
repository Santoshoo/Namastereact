import React, { use } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestrurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState({});
  const params = useParams();
  const { id } = params;
  console.log(id);
  useEffect(() => {
    getRestrurantMenuInfo();
  }, []);
  const getRestrurantMenuInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=${id}`
    );
    const res = await data.json();
    console.log(res);
    setRestaurantMenu(res);
  };
  return (!restaurantMenu)? <Shimmer/>:(
    <div>
      <div>
        <h1>Restrurant Menu :{id}</h1>
        <h2>{restaurantMenu.name}</h2>
        <h3>{restaurantMenu.city}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          Object.values(restaurantMenu?.menu?.items)?.map((item)=
          <li key={item.id}>{item.name}</li>)
        </ul>
      </div>
      {/* console.log(restaurantMenu.menu.items); */}
    </div>
  );
};

export default RestrurantMenu;
