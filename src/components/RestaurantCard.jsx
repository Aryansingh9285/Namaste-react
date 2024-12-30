import React from 'react'
import { CDN_URL } from './utils/costants';


const RestaurantCard = (props) => {
    const { resData } = props;
  
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-card-img"
          src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
          alt={name}
        />
        <h3>{resData.info.name}</h3>
        <h4>{resData.info.cuisines}</h4>
        <h4>Rating: {resData.info.avgRating}</h4>
        <h4>{resData.info.costForTwo}</h4>
      </div>
    );
  };

export default RestaurantCard