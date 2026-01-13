import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {

    const[ resInfo, setResInfo ]= useState<any>(null);
    const{ resID } = useParams<any>();
    console.log("resId from params:", resID);


    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data  = await fetch( MENU_API + resID );
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if (!resInfo) return <Shimmer/>;

    const info = resInfo?.cards?.[2]?.card?.card?.info;
    if (!info) return <Shimmer/>;

    const { name, cuisines=[], costForTwo } = info;

    const categories =
    resInfo?.cards
    ?.find((c: any) => c?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter(
      (c: any) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    const itemCards = categories.flatMap(
    (c: any) => c?.card?.card?.itemCards || []
    );
    console.log("itemCards:", itemCards);



    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - ₹{costForTwo / 100}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item: any) => 
                    <li key={item.card.info.id}>
                        {item?.card?.info?.name} - {"Rs-"} 
                            {item?.card?.info?.price / 100}
                    </li>
                    )
                }
            </ul>
        </div>
    )
};

export default RestaurantMenu;