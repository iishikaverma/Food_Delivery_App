import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    const{ resID } = useParams<string>();

    if (!resID) return <Shimmer />;

    const resInfo = useRestaurantMenu(resID);

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

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - ₹{costForTwo / 100}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item: any, index: number) => 
                    <li key={`${item.card.info.id}-${index}`}>
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