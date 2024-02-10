import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import restaurantList from "../utils/mockData";

/* React Hooks --> (Normal Js Function)
    Mainly of 2 types
        -> useState() -- super powerful state  variable in react
        -> useEffect()
*/

// useEffect( () => {} , []) it takes 2 arguments 1-> callback function and 2-> dependencies array

const Body = () => {
  // Local State Variable - Super powerful variable
  // const arr = useState(restaurantList);
  // const [listOfRestaurant , setListOfRestaurant] = arr;

  // -------------------------OR------------------------------------------

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchedRestaurants, setSearchRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //whenever state variable updates, react triggers a reconciliation cycle(re-rendering the component)
  console.log("Body Rendered")

  // Normal variable
  // let listOfRestaurant;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0343135&lng=72.52661049999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      setListOfRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants);
    } catch (error) {
      console.log(error);
    }
  };
  // Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              const fillteredRestaurants = listOfRestaurant.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
              })
              setSearchRestaurants(fillteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter out logic
            const fillteredRes = listOfRestaurant.filter((res) => {
              return res.info.avgRating > 4;
            });
            console.log(fillteredRes);
            setListOfRestaurant(fillteredRes);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {searchedRestaurants?.map((restaurant) => {
          return <RestaurantCard item={restaurant.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;

// NOTE bts of state variable
// Whenever state variable updates React will rerender the Component

// NOTE (How useEffect will work)
/*
  Basically first whole component will render , when rendercycle is finished then callback function written in useEffect is called

  Basically whatever we have to do after rendering a page for that we have to write it in useEffect
*/
