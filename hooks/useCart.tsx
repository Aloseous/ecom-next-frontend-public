
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface CartItem {
    item: ProductTypes;
    quantity: number;
    color?: string;
    size?: string;
}

interface CartStore {
    cartItems: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (_id: String) => void;
    increaseQty: (_id: String) => void;
    decreaseQty: (_id: String) => void;
    clearCart: () => void;
}
const useCart = create(persist<CartStore>((set, get) => ({
    cartItems: [],
    addItem: (data: CartItem) => {
        const { item, quantity, color, size } = data;
        const currentItem = get().cartItems
        const existingItem = currentItem.find(cartItem => cartItem.item._id === item._id)
        if (existingItem) return toast("Item already added in cart")
        set({ cartItems: [...currentItem, { item, quantity, color, size }] });
        toast.success("Item added to cart", { icon: "🛒" })
    },
    removeItem: (_id: String) => {
        const updateItems = get().cartItems.filter(cartItem => cartItem.item._id !== _id)
        set({ cartItems: updateItems });
        toast.success("Item removed from cart", { icon: "🛒" })
    },
    increaseQty: (_id: String) => {
        const incQty = get().cartItems.map(cartItem => cartItem.item._id === _id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
        set({ cartItems: incQty })
        toast.success("Quantity increased")
    },
    decreaseQty: (_id: String) => {
        const decQty = get().cartItems.map(cartItem => cartItem.item._id === _id ? { ...cartItem, quantity: cartItem.quantity > 1 ? cartItem.quantity - 1 : 1 } : cartItem)
        set({ cartItems: decQty })
        toast.success("Quantity decreased")
    },
    clearCart: () => set({ cartItems: [] })

}),
    {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    }
))


export default useCart