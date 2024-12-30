import React from "react";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "./resObj";

const Body = () => {
  const [ListofRestorent, setListofRestorent] = useState(resObj);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListofRestorent(
              ListofRestorent.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {ListofRestorent.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
