"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Heart, Loader } from 'lucide-react'
import { fetchUserData } from "@/utils/api";

interface FavoriteCardProps {
    product: ProductTypes;
    updateSignedInUser?: (updatedUser: UserTypes) => void;
}


const Favorite = ({ product, updateSignedInUser }: FavoriteCardProps) => {

    const router = useRouter()
    const { user } = useUser();


    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const getUser = async () => {
        try {
            setLoading(true);
            const data = await fetchUserData();
            setIsLiked(data.wishlist.includes(product._id))

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }


    const handleLikes = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!user) return router.push("/sign-in");
        try {
            setLoading(true);
            const res = await fetch("/api/users/wishlist", {
                method: "POST",
                body: JSON.stringify({ productId: product._id })
            })

            const updatedUserData = await res.json();
            setIsLiked(updatedUserData.wishlist.includes(product._id))
            if (updateSignedInUser) updateSignedInUser(updatedUserData);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);

        }
    }
    useEffect(() => {
        if (user) {
            getUser();
        }
    }, [user])


    return loading ? <Loader /> :
        <button type="button" onClick={handleLikes}>
            <Heart fill={`${isLiked ? "#bc2056" : "white"}`} />
        </button>

}

export default Favorite