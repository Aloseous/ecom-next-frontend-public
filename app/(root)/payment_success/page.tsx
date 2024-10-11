"use client";

import useCart from "@/hooks/useCart";
import Link from "next/link"
import { useEffect } from "react";

const PaymentSuccess = () => {

    const cart = useCart();

    useEffect(() => {
        cart.clearCart();
    }, []);

    return (
        <div className="h-screen flex flex-col justify-center items-center gap-5">
            <div className="text-3xl text-green-600">Payment done successfully</div>
            <Link href={"/"} className="px-3 py-2 bg-green-600 text-white rounded-lg">Continue Shopping</Link>
        </div>
    )
}

export default PaymentSuccess