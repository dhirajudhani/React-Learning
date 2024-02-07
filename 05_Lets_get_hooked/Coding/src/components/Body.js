import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import restaurantList from "../utils/mockData";

/* React Hooks --> (Normal Js Function)
    Mainly of 2 types
        -> useState() -- super powerful state  variable in react
        -> useEffect()
*/


const Body = () => {

    // Local State Variable - Super powerful variable
    // const arr = useState(restaurantList);
    // const [listOfRestaurant , setListOfRestaurant] = arr;

    // -------------------------OR------------------------------------------

    const [listOfRestaurant , setListOfRestaurant] = useState(restaurantList);

    // Normal variable
    // let listOfRestaurant;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {  
            // Filter out logic
            const fillteredRes = listOfRestaurant.filter((res) => {
                return (res.data.avgRating > 4);
            })
            console.log(fillteredRes)
            setListOfRestaurant(fillteredRes);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resName="Jalaram" cuisine="North Indian, Thali"/> */}

        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;


// NOTE bts of state variable
// Whenever state variable updates React will rerender the Component