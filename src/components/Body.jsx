import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "./resObj";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestorent, setListofRestorent] = useState([]);
  const [filteredrest, setFilteredres] = useState([])
  const [searchtext, setsearchtext] = useState("");

  console.log("Body Render");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      `https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=26.2435203&lng=78.1556778&carousel=true&third_party_vendor=1`
    );
    const json = await response.json();
    // console.log(
    //   json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setListofRestorent(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredres(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    )
  };

  // Conditional Rendering
  // if (ListofRestorent.length === 0){
  //   return <Shimmer/>
  // }

  return ListofRestorent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-box">
          <br />
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log({ searchtext });
              const filterRestaurant = ListofRestorent.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setFilteredres(filterRestaurant);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            setListofRestorent((prevList) =>
              prevList.filter((res) => res.info.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredrest.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
