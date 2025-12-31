import { CDN_URL } from "../utils/constants";
type RestaurantCardProps = {
  resData: {
    info: {
      name: string;
      cloudinaryImageId: string;
      cuisines: string[];
      avgRating: number;
      costForTwo: string;
      sla: {
        deliveryTime: number;
      };
    };
  };
};

const RestaurantCard = (props:RestaurantCardProps) => {
    const {resData} = props;

    const {cloudinaryImageId, costForTwo, name, cuisines, avgRating, sla} = resData?.info
    return (
        <div className="res-card">
            <img 
                className="res-logo" 
                alt="res-logo" 
                src={CDN_URL + resData.info.cloudinaryImageId } 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export default RestaurantCard;