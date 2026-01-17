import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResCategory";


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
        <div className="text-center">
            <h1 className="font-extrabold text-4xl my-10">{name}</h1>
            <p className="font-bold text-2xl">
                {cuisines.join(", ")} - ₹{costForTwo / 100}
            </p>
            {categories.map((category: any,index:number) => 
            <RestaurantCategory
                key={category?.card.card?.title}
                data={category?.card?.card}
                // index={index}
                // showItems={showIndex === index}
                // setShowIndex={setShowIndex}
                />)}
        </div>
    )
};

export default RestaurantMenu;