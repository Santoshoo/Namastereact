import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard"; // Correct default import
import { resturantList } from "../constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const filterData = (searchText, restaurants) => {
    return restaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  const [searchText, setSearchText] = useState("");
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
    const [Allrestaurants, setAllRestaurants] = useState([]);

    // const [restaurants, setRestaurants] = useState(resturantList);


 useEffect(() => {
   getRestaurants();
 }, []); 

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING" // Replace with actual API endpoint
    );
    const json = await data.json();
    console.log(json);
    // setRestaurants(json);
  }

  //Conditional Rendering
  //if retrurant has empty=Shimmer UI
  //if restrurant has data=Actual Data
  

  return (Allrestaurants.length===0)? <Shimmer/>:(
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, Allrestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="body">
        {Allrestaurants.map((restaurant) => {
          return <ResturantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;