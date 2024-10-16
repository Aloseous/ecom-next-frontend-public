"use client";

import { useState, useCallback, useRef } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import useCart from "@/hooks/useCart";
import ThemeToogle from "./ThemeToogle";
import useOutSideClick from "@/hooks/useOutSideClick"; // Corrected import

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const pathName = usePathname();
    const { isSignedIn } = useUser();
    const cart = useCart();
    const [query, setQuery] = useState("");

    // Close dropdown menu when clicked outside
    useOutSideClick({
        ref: dropdownRef,
        handler: () => setIsOpen(false),
    });

    const toggleMenu = useCallback((e: React.MouseEvent<HTMLOrSVGElement>) => {
        if (dropdownRef.current && dropdownRef.current.contains(e.target as Node)) {
            setIsOpen((prev) => !prev);
        };

    }, []);

    // Handle search input key press
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key.toLowerCase() === "enter") {
            e.preventDefault();
            router.push(`/search/${query}`);
            setQuery("");
        }
    };

    return (
        <div className="sticky z-10 top-0 py-2 px-10 flex justify-between gap-2 items-center max-sm:px-2 shadow-xl bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
            <Link href="/" className="text-5xl font-bold ecom-logo">
                <Image src="/logo.png" alt="logo" width={100} height={100} priority />
            </Link>

            {/* Navigation Links (hidden on small screens) */}
            <div className="text-base-bold flex gap-4 max-lg:hidden">
                <Link href="/" className={`hover:text-red-600 ${pathName === "/" && "text-red-600"}`}>Home</Link>
                <Link href={isSignedIn ? "/wishlist" : "/sign-in"} className={`hover:text-red-600 ${pathName === "/wishlist" && "text-red-600"}`}>Wishlist</Link>
                <Link href={isSignedIn ? "/orders" : "/sign-in"} className={`hover:text-red-600 ${pathName === "/orders" && "text-red-600"}`}>Orders</Link>
                <Link href="/about" className="hover:text-red-600">About</Link>
                <Link href="/contact" className="hover:text-red-600">Contact us</Link>
            </div>

            {/* Search Input */}
            <div className="flex items-center gap-3 border border-grey-2 rounded-lg px-2 py-1 bg-light-bg text-light-text">
                <input
                    className="outline-none max-sm:max-w-[120px]"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button disabled={!query} onClick={() => { router.push(`/search/${query}`); setQuery(""); }}>
                    <Search className="cursor-pointer h-4 w-4 hover:text-red-600" />
                </button>
            </div>

            <div className="relative flex items-center gap-3">
                <Link
                    href="/cart"
                    className="flex items-center gap-3 border rounded-lg px-2 py-1 text-light-text bg-light-bg dark:text-dark-text dark:bg-dark-bg max-md:hidden transition-colors"
                >
                    <ShoppingCart />
                    <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
                </Link>

                <div ref={dropdownRef}>
                    <Menu className="cursor-pointer lg:hidden" onClick={toggleMenu} />
                    {isOpen && (
                        <div className="absolute top-10 right-10 flex flex-col gap-4 p-3 rounded-lg border text-light-text bg-light-bg dark:bg-dark-bg dark:text-dark-text">
                            <Link href="/" className="hover:text-red-600">Home</Link>
                            <Link href={isSignedIn ? "/wishlist" : "/sign-in"} className="hover:text-red-600">Wishlist</Link>
                            <Link href={isSignedIn ? "/orders" : "/sign-in"} className="hover:text-red-600">Orders</Link>
                            <Link href="/about" className="hover:text-red-600">About</Link>
                            <Link href="/contact" className="hover:text-red-600">Contact</Link>
                            <Link href="/cart" className="hover:text-red-600">Cart ({cart.cartItems.length})</Link>
                        </div>
                    )}
                </div>


                {/* Theme Toggle */}
                <ThemeToogle />

                {/* User Authentication */}
                {isSignedIn ? (
                    <UserButton afterSwitchSessionUrl="/sign-in" />
                ) : (
                    <Link href="/sign-in">
                        <CircleUserRound />
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
