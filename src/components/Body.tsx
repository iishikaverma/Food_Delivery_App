import RestaurantCard, { withOffer } from "./RestaurantCard";
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
    console.log(listOfRestaurants)
    const [searchText, setSearchText] = useState<string>("")
    const [filteredRestaurant, setFilteredRestaurants] = useState<Restaurant[]>([])

    const RestaurantOffer = withOffer(RestaurantCard);

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
        <div className="max-w-400 mx-auto px-4">
            <div className="flex justify-center my-2 mb-4">
                <div className="flex items-center gap-2.5 ">
                    <input type="text" className="w-60 px-4.5 py-2.5 border border-[#36210f] rounded-[20px] ml-2.5
                                                     bg-transparent text-[#36210f] text-[14px] font-semibold outline-none
                                                     transition-all duration-250 ease-in-out
                                                    focus:bg-[#36210f] focus:text-white  focus:shadow-[0_6px_16px_rgba(212,112,45,0.35)]" 
                    placeholder="Search restaurants..." 
                    value = {searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}/>
                    <button className="px-4.5 py-2.5 border border-[#36210f] rounded-[20px] bg-transparent text-[#ec5600]
                                        text-sm font-semibold cursor-pointer transition-all duration-200 ease-in-out
                                        hover:bg-[#36210f] hover:text-white hover:shadow-[0_6px_16px_rgba(212,112,45,0.35)] hover:-translate-y-0.5
                                        active:translate-y-0 active:shadow-[0_3px_8px_rgba(212,112,45,0.35)]"

                    onClick={() => {

                        const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

                        setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="m-2.5 px-4.5 py-2.5 border border-[#36210f] rounded-[20px] bg-transparent
                                text-[#ec5600] text-sm font-semibold cursor-pointer transition-all duration-200 ease-in-out
                                hover:bg-[#36210f] hover:text-white hover:shadow-[0_6px_16px_rgba(212,112,45,0.35)] hover:-translate-y-0.5
                                active:translate-y-0 active:shadow-[0_3px_8px_rgba(212,112,45,0.35)]" 
                
                onClick={() => {
                    // resList = resList.filter(res => res.info)
                    const filteredRestaurant = listOfRestaurants.filter(
                        (res) => res?.info?.avgRating > 4.4
                    );
                    setFilteredRestaurants(filteredRestaurant);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="flex flex-wrap gap-5 justify-center">
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id} 
                        to = {"/restaurants/" + restaurant.info.id}>
                            {restaurant.info.aggregatedDiscountInfoV3 ?(<RestaurantOffer resData={restaurant}/>
                            ):(
                                <RestaurantCard resData={restaurant}/>)}
                        </Link>
                        )
                    )
                }
            </div>
        </div>
    )
};

export default Body;