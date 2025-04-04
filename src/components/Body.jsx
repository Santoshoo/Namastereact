import React from "react";
import ResturantCard from "./RestrurantCard";
import { resturantList } from "../constants";

const Body = () => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-btn">Search</button>
        </div>
      <div className="body">
        {resturantList.map((resturant) => {
          return <ResturantCard {...resturant.data} key={resturant.data.id} />;
        })}
      </div>
    </>
  );
};