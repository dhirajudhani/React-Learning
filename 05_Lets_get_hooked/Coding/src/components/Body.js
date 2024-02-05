import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestaurantCard resName="Jalaram" cuisine="North Indian, Thali"/> */}

                {/* <RestaurantCard resData = {restaurantList[0]}/>
                <RestaurantCard resData = {restaurantList[1]}/>
                <RestaurantCard resData = {restaurantList[2]}/>
                <RestaurantCard resData = {restaurantList[3]}/>
                <RestaurantCard resData = {restaurantList[4]}/>
                <RestaurantCard resData = {restaurantList[5]}/>
                <RestaurantCard resData = {restaurantList[6]}/>
                <RestaurantCard resData = {restaurantList[7]}/>
                <RestaurantCard resData = {restaurantList[8]}/>
                <RestaurantCard resData = {restaurantList[9]}/>
                <RestaurantCard resData = {restaurantList[10]}/>
                <RestaurantCard resData = {restaurantList[11]}/>
                <RestaurantCard resData = {restaurantList[12]}/>
                <RestaurantCard resData = {restaurantList[13]}/>
                <RestaurantCard resData = {restaurantList[14]}/>
                
                 */}

                 {
                    restaurantList.map( (restaurant) => {
                        return <RestaurantCard key = {restaurant.data.id} resData = {restaurant} />
                    })
                 }
            </div>
        </div>
    )
}

export default Body;