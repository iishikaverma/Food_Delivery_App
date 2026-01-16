import { CDN_URL } from "../utils/constants";
import { Restaurant } from "../utils/types";

type RestaurantCardProps = {
  resData: Restaurant;
};

const RestaurantCard = (props:RestaurantCardProps) => {
    const {resData} = props;

    const {costForTwo, name, cuisines, avgRating, sla, totalRatingsString } = resData?.info
    return (
        <div className=" w-64 h-100 p-3 bg-[#fffaf6] m-1.25 rounded-2xl transition-all duration-200 ease-in-out 
                        hover:-translate-y-1.5 hover:shadow-[0_14px_30px_rgba(54,33,15,0.25)] cursor-pointer">
            <img
                className="w-full h-40 object-cover rounded-xl" 
                alt="res-logo" 
                src={CDN_URL + resData.info.cloudinaryImageId } 
            />
            <h3 className="font-bold py-2 ">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars ({totalRatingsString})</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export const withOffer = (RestaurantCard: any) => {
    return (props:RestaurantCardProps)=>{
        const {resData} = props;
        const offer = resData?.info.aggregatedDiscountInfoV3;
        return (
            <div className="relative">
                <label className="absolute z-10 top-4 left-2 bg-amber-100 text-amber-800 rounded-e-lg px-3 py-1 text-base font-semibold shadow">
                    {offer.header}
                    {offer.header ? ` - ${offer.subHeader} ` :""}
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    }
}

export default RestaurantCard;