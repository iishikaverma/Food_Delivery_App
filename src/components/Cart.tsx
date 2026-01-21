import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store: any) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return(
        <div className="min-h-screen bg-[#fffaf6] px-6 py-10">
            <h1 className="text-3xl font-extrabold text-[#36210f] text-center mb-10">
                Your Cart
            </h1>

            <div className="max-w-4xl mx-auto bg-white rounded-2xl
                            shadow-[0_10px_30px_rgba(54,33,15,0.15)] p-6">

                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-[#36210f]">
                        Items: {cartItems.length}
                    </span>

                    <button
                        className="px-4 py-1.5 rounded-full text-sm font-semibold
                                border border-red-400 text-red-500
                                hover:bg-red-500 hover:text-white
                                transition-all"
                        onClick={handleClearCart}
                        disabled={cartItems.length === 0}
                    >
                        Clear Cart
                    </button>
                </div>

                {cartItems.length === 0 ? (
                <div className="text-center py-16">
                    <p className="text-lg font-semibold text-[#7a5a44]">
                        Your cart is empty.....
                    </p>
                    <p className="text-sm mt-2 text-[#9b7b63]">
                        Add items from your favourite restaurant
                    </p>
                </div>
                ) : (
                /* CART ITEMS */
                <ItemList items={cartItems} />
                )}
            </div>
        </div>
    )
}

export default Cart;