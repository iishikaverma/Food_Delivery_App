import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../utils/types";

type RestaurantCardProps = {
  resData: Restaurant;
};

const RestaurantCard = (props:RestaurantCardProps) => {
    const {resData} = props;

    const {cloudinaryImageId, costForTwo, name, cuisines, avgRating, sla} = resData?.info
    return (
        <div className="">
            <img 
                className="res-logo rounded-lg" 
                alt="res-logo" 
                src={CDN_URL + resData.info.cloudinaryImageId } 
            />
            <h3 className="font-bold py-2 ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;