"use client";

import { useState } from "react";
import { IndianRupee, MinusSquare, PlusSquare } from "lucide-react";
import Favorite from "./Favorite";
import useCart from "@/hooks/useCart";

const ProductInfo = ({ productInfo }: { productInfo: ProductTypes }) => {
    const cart = useCart();

    const [selectedColor, setSelectedColor] = useState<string>(productInfo.colors[0]);
    const [selectedSize, setSelectedSize] = useState<string>(productInfo.sizes[0]);
    const [quantity, setQuantity] = useState<number>(1);

    return (
        <div className="max-w-[400px] flex flex-col gap-4 text-light-text dark:text-dark-text">
            <div className="flex justify-between items-center">
                <p className=" text-heading2-bold">{productInfo.title}</p>
                <Favorite product={productInfo} />
            </div>

            <div className="flex gap-2">
                <p className="text-base-medium text-grey-2">Category:</p>
                <p className="text-base-bold">{productInfo.category}</p>
            </div>

            <p className="text-heading3-bold flex items-center gap-1"><IndianRupee width={26} height={26} />{productInfo.price}</p>

            <div className="flex flex-col gap-2">
                <p className="text-base-medium text-grey-2">Description</p>
                <p className="text-small-medium">{productInfo.description}</p>
            </div>

            {productInfo.colors.length > 0 && (
                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Colors</p>
                    <div className="flex gap-2">
                        {productInfo.colors.map((color, index) => (
                            <p
                                key={index}
                                className={`border border-gray-300 px-2 py-1 rounded-lg cursor-pointer ${selectedColor === color && "bg-teal-500 text-white"
                                    }`}
                                onClick={() => setSelectedColor(color)}
                            >
                                {color}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            {productInfo.sizes.length > 0 && (
                <div className="flex flex-col gap-2">
                    <p className="text-base-medium text-grey-2">Sizes</p>
                    <div className="flex gap-2">
                        {productInfo.sizes.map((size, index) => (
                            <p
                                key={index}
                                className={`border border-gray-300 px-2 py-1 rounded-lg cursor-pointer ${selectedSize === size && "bg-teal-500 text-white"
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </p>
                        ))}
                    </div>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <p className="text-base-medium text-grey-2">Quantity:</p>
                <div className="flex items-center gap-2">
                    <MinusSquare
                        className="hover:text-red-500 cursor-pointer"
                        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                    />
                    <p className="text-body-bold">{quantity}</p>
                    <PlusSquare
                        className="hover:text-green-500 cursor-pointer"
                        onClick={() => setQuantity(quantity + 1)}
                    />
                </div>
            </div>

            <button
                // className="border border-gray-300 text-gray-700 dark:text-gray-200 bg-transparent py-3 px-6 rounded-sm hover:bg-teal-500 hover:text-white hover:border-green-600 transition-all"
                className="rounded-lg py-3 px-4 text-light-textColor dark:text-dark-textColor bg-crimson hover:bg-light-textColor hover:text-light-bg dark:hover:bg-dark-textColor dark:hover:bg-dark-bg transition-all"
                onClick={() => {
                    cart.addItem({
                        item: productInfo,
                        quantity,
                        color: selectedColor,
                        size: selectedSize,
                    });
                }}
            >
                Add to cart
            </button>
        </div>
    );
};

export default ProductInfo;
