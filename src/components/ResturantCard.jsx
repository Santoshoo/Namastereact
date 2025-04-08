import React from "react";
import { IMG_CDN_URL } from "../constants";

const ResturantCard = ({ name, cuisines, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={`${IMG_CDN_URL}/${cloudinaryImageId}`} alt={name} />
      <h2>{name}</h2>
      <h3>{cuisines ? cuisines.join(", ") : "N/A"}</h3>
    </div>
  );
};

export default ResturantCard;