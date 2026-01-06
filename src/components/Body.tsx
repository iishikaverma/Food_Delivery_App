import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Restaurant } from "../utils/types";
import { useState, useEffect } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([])
    // Normal JS Variable
    // let listOfRestaurants = [];

    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6192679&lng=77.4265032&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        console.log(json)
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    // re>sList = resList.filter(res => res.info)
                    const filteredList = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4
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