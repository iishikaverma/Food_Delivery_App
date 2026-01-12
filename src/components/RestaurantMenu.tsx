import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const[ resInfo, setResInfo ]= useState<any>(null);
    const{ resId } = useParams();

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        
        setResInfo(json.data);
    };

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

    return resInfo === null ? (
        <Shimmer/>
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Menu Item 1</li>
                <li>Menu Item 2</li>
                <li>Menu Item 3</li> 
            </ul>
        </div>
    )
}

export default RestaurantMenu;