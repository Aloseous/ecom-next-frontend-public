"use client";

import useCart from '@/hooks/useCart';
import { useUser } from '@clerk/nextjs';
import { IndianRupee, MinusSquare, PlusSquare, Trash } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Cart = () => {
    const cart = useCart();
    const router = useRouter();
    const { user } = useUser();

    const subTotal = cart.cartItems.reduce((acc, cartItem) => acc + cartItem.item.price * cartItem.quantity, 0);
    const subTotalRounded = parseFloat(subTotal.toFixed(2));

    const customer = {
        clerkId: user?.id,
        email: user?.emailAddresses[0].emailAddress,
        name: user?.fullName,
    };

    const handleChectOut = async () => {
        try {
            if (!user) return router.push('sign-in');
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
                method: 'POST',
                body: JSON.stringify({ cartItems: cart.cartItems, customer }),
            });

            const data = await res.json();
            window.location.href = data.url;
        } catch (error) {
            console.error("[Post Checkout]", error);
        }
    };

    return (
        <div className='flex gap-10 py-16 px-10 max-lg:flex-col bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text'>
            <div className='w-2/3 max-lg:w-full'>
                <p className='text-2xl font-semibold mb-4'>Shopping Cart</p>
                <hr className='my-6 border-light-textColor dark:border-dark-textColor' />
                {cart.cartItems.length === 0 ? (
                    <p className='text-lg text-light-textColor dark:text-dark-textColor'>No items in cart</p>
                ) : (
                    cart.cartItems.map((cartItem) => (
                        <div key={cartItem.item._id} className='flex items-center justify-between bg-light-bg dark:bg-dark-bg shadow-md rounded-lg px-6 py-5 mb-4 hover:bg-light-softBg dark:hover:bg-dark-softBg transition-all'>
                            <div className='flex items-center'>
                                <Image src={cartItem.item.media[0]} alt='cart' width={100} height={100} className='rounded-lg w-32 h-32 object-cover' />
                            </div>
                            <div className='flex flex-col gap-2 ml-4'>
                                <p className='text-lg font-medium text-light-textColor dark:text-dark-textColor'>{cartItem.item.title}</p>
                                {cartItem.color && <p className='text-sm text-light-textColor dark:text-dark-textColor'>Color: {cartItem.color}</p>}
                                {cartItem.size && <p className='text-sm text-light-textColor dark:text-dark-textColor'>Size: {cartItem.size}</p>}
                                <p className='flex items-center gap-1 text-sm font-semibold text-light-textColor dark:text-dark-textColor'>Price: <IndianRupee width={16} height={16} />{cartItem.item.price}</p>
                            </div>
                            <div className='flex items-center gap-4'>
                                <MinusSquare className="hover:text-crimson cursor-pointer transition-all" onClick={() => cart.decreaseQty(cartItem.item._id)} />
                                <p className="text-lg font-semibold text-light-textColor dark:text-dark-textColor">{cartItem.quantity}</p>
                                <PlusSquare className="hover:text-crimson cursor-pointer transition-all" onClick={() => cart.increaseQty(cartItem.item._id)} />
                            </div>
                            <Trash className='hover:text-crimson cursor-pointer transition-all' onClick={() => cart.removeItem(cartItem.item._id)} />
                        </div>
                    ))
                )}
            </div>
            <div className='w-1/3 max-lg:w-full flex flex-col gap-6 bg-light-softBg dark:bg-dark-softBg shadow-md rounded-lg p-6'>
                <p className='text-xl font-semibold text-light-textColor dark:text-dark-textColor'>Summary</p>
                <div className='flex justify-between text-lg font-medium text-light-textColor dark:text-dark-textColor'>
                    <span>Total</span>
                    <span className='flex gap-1 items-center'><IndianRupee width={16} height={16} />{subTotalRounded}</span>
                </div>
                <button
                    className='mt-4 py-3 text-lg font-semibold text-light-textColor dark:text-dark-textColor bg-crimson hover:bg-light-textColor hover:text-light-bg dark:hover:bg-dark-textColor dark:hover:bg-dark-bg transition-all rounded-lg'
                    onClick={handleChectOut}
                >
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
