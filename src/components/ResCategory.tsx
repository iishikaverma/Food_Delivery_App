import { MenuCategoryProps } from "../utils/types";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index}: MenuCategoryProps) => {

    const handleClick = () => {
        setShowIndex(index);
    };
    
    return(
        <div className="w-1/2 mx-auto my-4 bg-[#fffaf6] rounded-xl shadow-[0_6px_18px_rgba(54,33,15,0.12)] p-4">
            <div className="flex justify-between cursor-pointer"
                            onClick={handleClick}>
                <span className="font-bold text-lg text-[#36210f]">
                    {data?.title} {" "}
                    ({data?.itemCards?.length})</span>
                <span className="text-xl">⌄</span>
            </div>
            {showItems && <ItemList items = {data?.itemCards || []}/>}
        </div>
    )
}

export default RestaurantCategory;