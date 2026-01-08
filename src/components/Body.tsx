import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Restaurant } from "../utils/types";
import { useState, useEffect } from "react";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([])
    // Normal JS Variable
    // let listOfRestaurants = [];

    const [searchText, setSearchText] = useState<string>("")
    const [filteredRestaurant, setFilteredRestaurants] = useState<Restaurant[]>([])

    console.log("Body Rendered")

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
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search restaurants..." 
                    value = {searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button onClick={() => {
                        console.log(searchText);

                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    // resList = resList.filter(res => res.info)
                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4
                    );
                    setFilteredRestaurants(filteredRestaurant);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} 
                        resData={restaurant}/>)
                    )
                }
            </div>
        </div>
    )
};

export default Body;