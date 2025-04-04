import React from "react";
import { IMG_CDN_URL,resturantList } from "../constants";

const ResturantCard = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+cloudinaryImageId} />
      <h2>{name}</h2>
      {/* <h3>{cuisines.join(",")}</h3> */}
      {/* <h4>{burgerKing.rating} stars</h4> */}
    </div>
  );
};
export default ResturantCard;