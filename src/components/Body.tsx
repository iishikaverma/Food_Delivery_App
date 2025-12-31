import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)

    // Normal JS Variable
    // let listOfRestaurants = [];

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // resList = resList.filter(res => res.info)
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.2
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} 
                        resData={restaurant}/>)
                    )
                }
            </div>
        </div>
    )
};

export default Body;