import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { ItemListProps } from "../utils/types";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}:ItemListProps) => {

    const dispatch = useDispatch();    
    const handleAddItem = (items:string) => {
        dispatch(addItem(items))
    }

    return (
        <div className="space-y-4">
            {items.map((item:any) => (
            <div key={item?.card?.info?.id} 
             className="flex rounded-2xl items-start gap-4 p-4 border-b border-[#e7d7c8]
                       hover:bg-[#fff3ea] transition-colors duration-150">
                
                
                <img className="h-26 w-26 object-cover rounded-lg shrink-0"
                src={CDN_URL + item.card.info.imageId}/>
            
            
                <div className="flex justify-between flex-1">
                    <div className="text-left">
                        <h3 className="font-semibold text-sm text-[#36210f]">
                            {item.card.info.name}
                        </h3>
                        <p className=" mt-3 text-xs text-[#7a5a44] line-clamp-2">
                            {item.card.info.description}
                        </p>
                    </div>

                    <div className="flex ml-2 flex-col items-center gap-2">
                        <span className="font-semibold text-sm text-[#ec5600]"> 
                            ₹{item.card.info.price 
                            ? item.card.info.price/100
                            :item.card.info.defaultPrice/100}
                        </span>
                        <button className=" mt-4 items-center border border-[#ec5600] px-4 py-1 text-xs font-semibold
                            rounded-full text-[#ec5600] bg-white cursor-pointer
                            hover:bg-[#ec5600] hover:text-white active:scale-95 transition-all duration-150"
                            onClick={() => handleAddItem(item)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        ))}
           
        </div>
    )
}

export default ItemList;