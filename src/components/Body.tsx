import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Restaurant } from "../utils/types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState<Restaurant[]>([])
    // Normal JS Variable
    // let listOfRestaurants = [];

    const [searchText, setSearchText] = useState<string>("")
    const [filteredRestaurant, setFilteredRestaurants] = useState<Restaurant[]>([])

    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return (
            <h2>
                Oops!! Please check your internet connection.
            </h2>
        );
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
                        <Link key={restaurant.info.id} to = {"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
                    )
                }
            </div>
        </div>
    )
};

export default Body;