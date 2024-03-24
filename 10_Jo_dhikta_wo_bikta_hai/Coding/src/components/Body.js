import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
  console.log("Body Rendered");

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
      setSearchRestaurants(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    
    return (
      <h1>Looks like you're offline, please check your internet connection</h1>
    );
  }

  // Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //   return <Shimmer/>
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search for restaurants and food"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-700 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const fillteredRestaurants = listOfRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setSearchRestaurants(fillteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-green-700 m-4 rounded-lg"
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
        
      </div>
      <div className="flex flex-wrap">
        {searchedRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard item={restaurant.info} />
            </Link>
          );
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

  Note :-
      if no dependency array => useEffect is called on every render
      if dependency array is empty [] => useEffect is called on initial render (just once)
      if dependency array is [btnReact] => called everytime btnReact is updated
*/
