
"use client";

import { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { getProductDetail } from '@/lib/actions';
import Loader from '@/components/Loader';
import ProductCard from '@/components/ProductCard';

const WishList = () => {

    const { isSignedIn } = useUser();

    const [loading, setLoading] = useState(true);
    const [signedInUser, setsignedInUser] = useState<UserTypes | null>(null);
    const [wishList, setWishList] = useState<ProductTypes[]>([]);

    const getUser = async () => {
        try {
            const res = await fetch(`api/users`);
            const data = await res.json();
            setsignedInUser(data);
        } catch (error) {
            setLoading(false);
            console.error("[Get User]", error);
        }
    }

    const getWishList = async () => {
        try {
            // setLoading(true);
            if (!signedInUser) return;
            const wishListProducts = await Promise.all(signedInUser.wishlist.map(async (productId) => {
                const res = await getProductDetail(productId)
                return res;
            }))
            setWishList(wishListProducts)
        } catch (error) {
            console.error("[Get getWishList]", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSignedIn) {
            getUser();
        }
    }, [isSignedIn]);

    useEffect(() => {
        if (signedInUser) {
            getWishList();
        }
    }, [signedInUser]);

    const updateSignedInUser = (updatedUser: UserTypes) => {
        setsignedInUser(updatedUser);
    }

    return loading ? <Loader /> : (
        <div className='flex flex-col items-center gap-20 px-10 py-5  bg-light-softBg text-light-text dark:bg-dark-softBg dark:text-dark-softText'>
            <p className='text-heading3-bold'>WishList</p>
            {!wishList || wishList.length === 0 && (<p className='text-body-bold'>No any products</p>)}
            <div className="flex flex-wrap justify-center gap-16">
                {wishList?.map((product) => (
                    <ProductCard key={product._id} product={product} updateSignedInUser={updateSignedInUser} />
                ))}
            </div>
        </div>)


}

export default WishList